import React from 'react';

export const AuthStore = React.createContext("");

const initialState = {
    isLoged : true
}


function reducer(state,action) { 
    switch(action.type){
        default:
            return state; 
    }
 }

 export function AuthStoreProvider(props) { 
    
    const [state,dispatch] = React.useReducer(reducer,initialState);
    const value = {state,dispatch};
    
    return (
        <AuthStore.Provider value={value}>
            {props.children}
        </AuthStore.Provider>
     )
  }