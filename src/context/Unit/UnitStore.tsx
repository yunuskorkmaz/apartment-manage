import React from 'react';
import { ReducerType, ActionType } from '../GenericTypes';
import { CreateActions, UnitActions } from './UnitActions';
import { UnitDispatches } from './UnitActionTypes';

export type UnitStore = {
    loading : boolean,
    addModelvisible : boolean,
    units : Array<any>,
}

const initialState : UnitStore = {
    loading : true,
    addModelvisible : false,
    units : []
}

interface IUnitStoreProps {
    state : UnitStore,
    dispatch: React.Dispatch<UnitDispatches>;
}
export const UnitContext = React.createContext({} as IUnitStoreProps);

const reducer: ReducerType<UnitStore, UnitDispatches> = (state ,action ) =>{
    switch(action.type){
        case "UNIT_FETCH_ALL":
            return {...state,units : action.payload}
        case "END_UNIT_FETCHING":
            return {...state, loading : false}
        default:
            return state;
    }
}


export const UnitStoreProvider : React.SFC = (props) =>{
    const [state,dispatch] = React.useReducer(reducer,initialState);
    const value :IUnitStoreProps = {state,dispatch};
    return(
        <UnitContext.Provider value={value}>
            {props.children}
        </UnitContext.Provider>
    )
}

export const UseUnitStore = (): [UnitStore, UnitActions] =>{
    const {state,dispatch} = React.useContext(UnitContext);
    
    return[state,CreateActions(dispatch)]
}
