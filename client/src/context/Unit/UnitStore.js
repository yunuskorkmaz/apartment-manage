import React from 'react';
import { UNIT_FETCH_ALL, ADDED_UNIT, DELETED_UNIT, START_UNIT_FETCHING, OPEN_UNIT_ADD_MODEL, CLOSE_UNIT_ADD_MODEL} from "../../actiontypes";
import actions from './UnitActions'
export const UnitStore = React.createContext("");

const initialState = {
    loading : false,
    addModalVisible : false,
    units: Array()
};

function reducer(state, action) {
    switch (action.type) {
        case UNIT_FETCH_ALL:
            return {...state, units: [...action.payload],loading:false};
        case ADDED_UNIT :
            return {...state, units: [...state.units,action.payload]};
        case DELETED_UNIT:
            return {...state, units : state.units.filter(({Id} )=> Id !== action.payload)};
        case START_UNIT_FETCHING:
            return{...state,loading : true}
        case OPEN_UNIT_ADD_MODEL:
            return { ...state, addModalVisible : true}
        case CLOSE_UNIT_ADD_MODEL:
            return { ...state, addModalVisible : false}
        default :
            return state
    }
}

export function UnitStoreProvider(props) {
    const [state,dispatch] = React.useReducer(reducer,initialState);
    const value = {state,dispatch};
    
    return (
        <UnitStore.Provider value={value}>
            {props.children}
        </UnitStore.Provider>
    )
}

export function UseUnitStore() {
    const { state, dispatch } = React.useContext(UnitStore);
    var dispatchActions = {};
    Object.keys(actions).map((key, index) => dispatchActions[key] = actions[key](dispatch));
    
   return [state, dispatchActions];
 }