import React from 'react';
import { ReducerType, ActionType } from '../GenericTypes';
import { CreateActions, UnitActions } from './UnitActions';
import { UnitDispatches } from './UnitActionTypes';

export type UnitStore = {
    loading : boolean,
    Modalvisible : boolean,
    units : Array<Unit>,
}

export interface Unit{
    Id : number,
    No : number,
    Status : boolean
}

const initialState : UnitStore = {
    loading : true,
    Modalvisible : false,
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
        case "OPEN_UNIT_MODEL":
            return {...state,Modalvisible : true}
        case "CLOSE_UNIT_MODEL":
            return {...state,Modalvisible : false}
        case "ADDED_UNIT":
            return {...state,units :[...state.units,action.payload],Modalvisible : false}
        case "DELETED_UNIT":
            return {...state,units : state.units.filter( ({Id}) => Id !== action.payload )}
        case "EDITED_UNIT":
            var updatedUnits =  state.units.map(unit => {
                if(unit.Id == action.payload?.Id){
                    return action.payload as Unit;
                }
                return unit;
            })
            return {...state, units : updatedUnits,Modalvisible : false}
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
