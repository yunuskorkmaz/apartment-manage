import React from 'react';
import { USER_LOGIN, USER_LOGOUT } from '../../actiontypes';

export const AuthStore = React.createContext("");

const initialState = {
    isLogined: true
}


function reducer(state, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {...state,isLogined : true}
        case USER_LOGOUT:
            return {...state,isLogined : false}
        default: return state;
    }
}

export function AuthStoreProvider(props) {

    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <AuthStore.Provider value={value} >
            {props.children}
        </AuthStore.Provider>
    )
}

export function UseAuthStore() {
    const {state,dispatch} = React.useContext(AuthStore);
    return [state,dispatch];
}