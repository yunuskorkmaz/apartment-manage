import React from 'react';
import { UnitActionsType } from "./UnitStore";

export interface UnitActions {
    test : (id : number) => void
}

export const CreateActions = (dispatch : React.Dispatch<UnitActionsType>) : UnitActions =>{

    
    const result: UnitActions = {
        test : (id :number) =>{
            dispatch({type : "TEST",payload : 1})
        }
    }
    return  result;
}