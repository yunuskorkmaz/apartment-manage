import React from 'react';
import { ReducerType, ActionType } from '../GenericTypes';
import { CreateActions, UnitActions } from './UnitActions';



export type UnitStore = {
    loading : boolean,
    addModelvisible : boolean,
    units : Array<any>,
}

type UnitTestAction = ActionType<typeof TEST, number>
type UnitTest2Action = ActionType<typeof TEST2, Array<any>>

export type UnitActionsType = UnitTestAction | UnitTest2Action;

const initialState : UnitStore = {
    loading : true,
    addModelvisible : false,
    units : []
}

interface IUnitStoreProps {
    state : UnitStore,
    dispatch: React.Dispatch<UnitActionsType>;
}
export const UnitContext = React.createContext({} as IUnitStoreProps);

const TEST = 'TEST';
const TEST2 = 'TEST2';


const reducer: ReducerType<UnitStore, UnitActionsType> = (state ,action ) =>{
    switch(action.type){
        case TEST:
            return {...state,units : [...state.units,action.payload]}
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
