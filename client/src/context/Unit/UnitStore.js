import React from 'react';
import {UNIT_FETCH_ALL, ADDED_UNIT, DELETED_UNIT, HANDLE_ERROR_UNIT} from "../../actiontypes";

export const UnitStore = React.createContext("");

const initialState = {
    units: Array()
};

function reducer(state, action) {
    switch (action.type) {
        case UNIT_FETCH_ALL:
            return {...state, units: [...action.payload]};
        case ADDED_UNIT :
            return {...state, units: [...state.units,action.payload]};
        case DELETED_UNIT:
            return {...state, units : state.units.filter(({Id} )=> Id !== action.payload)};
        
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