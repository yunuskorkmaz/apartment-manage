import React from 'react';
import { UnitDispatches, END_UNIT_FETCHING } from './UnitActionTypes';
import { request } from '../../agent';


export interface UnitActions {
    fetchData: () => void,
    create: (unit: any) => void,
    delete: (id: number) => void,
    openAddModal: () => void,
    closeAddModal: () => void
}

export const CreateActions = (dispatch: React.Dispatch<UnitDispatches>): UnitActions => {
    const result: UnitActions = {
        fetchData: async () => {
            dispatch({ type: "START_UNIT_FETCHING" });
            var data  = await request.get("/units/getall");
            console.log(data.body)
            dispatch({type : "UNIT_FETCH_ALL",payload: data.body })
            dispatch({ type: "END_UNIT_FETCHING" })

        },
        create: (unit: any) => { },
        delete: (id: number) => { },
        openAddModal: () => { },
        closeAddModal: () => { }
    }
    return result;
}
