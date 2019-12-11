import React from 'react';
import { UnitDispatches, END_UNIT_FETCHING } from './UnitActionTypes';
import { request } from '../../agent';
import { async } from 'q';


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
            var data = await request.get("/units/getall");
            if (data.status === 200) {
                dispatch({ type: "UNIT_FETCH_ALL", payload: data.body });
            }
            else {
                dispatch({ type: "HANDLE_ERROR_UNIT", payload: "Hata" });
            }
            dispatch({ type: "END_UNIT_FETCHING" });
        },
        create: (unit: any) => { },
        delete: (id: number) => { },
        openAddModal: () => { },
        closeAddModal: () => { }
    }
    return result;
}