import React, { createContext, useReducer, useContext } from "react";
import actions from "./unitActions";
export const UnitStore = createContext(null);

const initialState = {
	loading: false,
	isModalOpen: false,
	units: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "UNIT_FETCH_ALL":
			return { ...state, units: [...action.payload], loading: false };
		case "ADDED_UNIT":
			return { ...state, units: [...state.units, action.payload] };
		case "DELETED_UNIT":
			return {
				...state,
				units: state.units.filter(({ _id }) => _id !== action.payload),
			};
		case "START_UNIT_FETCHING":
			return { ...state, loading: true };
		case "UPDATE_UNIT":
			return {
				...state,
				units: state.units.map((item) => {
					if (item._id === action.payload._id) {
						return action.payload;
					}
					return item;
				}),
			};
		case "DELETE_UNIT":
			return {
				...state,
				units: state.units.filter((item) => item._id !== action.payload),
			};
		default:
			return state;
	}
};

export const UnitStoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <UnitStore.Provider value={value}>{children}</UnitStore.Provider>;
};

// export const UseUnitStore = () => {
// 	const { state, dispatch } = useContext(UnitStore);
// 	var dispatchActions = {};
// 	Object.keys(actions).map(
// 		(key, index) => (dispatchActions[key] = actions[key](dispatch))
// 	);
// 	return [state, dispatchActions];
// };
