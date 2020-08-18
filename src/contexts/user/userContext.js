import React, { createContext, useContext, useReducer } from 'react';
import { UnitStore } from '../unit/unitContext';
import actions from './actions';

export const UserStore = createContext(null);

const initialState = {
    loading : false,
    isModalOpen: false,
    users: []
}

const reducer = (state,action) => {
    switch(action.type){
        case 'USER_FETCH_ALL':
            return { ...state,users: [...action.payload],loading: false};
        case 'ADDED_USER':
            return { ...state, users: [...state.users, action.payload]};
        case 'DELETED_USER':
            return { ...state, users: state.users.filter(({ _id }) => _id !== action.payload )};
        case 'ADD_LOADING':
            return { ...state, loading: true };
        case 'UPDATE_USER':
            return { ...state, users : state.users.map( item => item._id === action.payload._id ? action.payload : item)};
        default:
            return state;
    }
}

export const UserStoreProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch};
    return <UserStore.Provider value={value}>{children}</UserStore.Provider>;
}

export const UseUserStore = () => {
    const { state, dispatch } = useContext(UnitStore);
    var dispatchActions = {};
	Object.keys(actions).map((key,index) => (dispatchActions[key] = actions[key](dispatch)));
	return [state,dispatchActions]
}