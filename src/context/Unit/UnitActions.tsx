import React from 'react';
import { UnitDispatches, END_UNIT_FETCHING } from './UnitActionTypes';
import { request } from '../../agent';
import { Unit } from './UnitStore';
import { ApiResponse } from './../GenericTypes';
import { message } from 'antd';


export interface UnitActions {
    fetchData: () => void,
    create: (unit: Unit) => Promise<boolean>,
    delete: (id: number) => void,
    openModal: () => void,
    closeModal: () => void,
    edit : (unit : Unit) => Promise<boolean>
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
        create: async (unit: Unit) => {
            try{
                var response = await request.post('/units/create',unit);
                var body = response.body as ApiResponse;
                if (body.success){
                    dispatch({ type: "ADDED_UNIT", payload: body.data as Unit})
                }
                else{
                    message.error(body.message);
                }
            }catch{
                message.error("HATA")
            }finally{
                return Promise.resolve(true)
            }
        },
        delete:  async (id: number) => {
            var response = await request.get("/units/delete?id="+id);
            if(response.status == 200){
                var body = response.body as ApiResponse;
                if(body.success){
                    dispatch({type : "DELETED_UNIT", payload : body.data})
                }
                else{
                    message.error(body.message);
                }
            }
        },
        edit : async (unit : Unit) => {
            try{
                var result = await request.post("/units/edit?id="+unit.Id,unit);
                if(result.status == 200){
                    var response = result.body as ApiResponse;
                    if(response.success){
                        dispatch({type : "EDITED_UNIT", payload : response.data as Unit});
                    }
                    else{
                        message.error(response.message);
                    }
                }
                else{
                    message.error("Hata");
                }
            }catch{
                message.error("Hata")
            }
            finally{
                return Promise.resolve(true);
            }

        },
        openModal: () => { dispatch({type : "OPEN_UNIT_MODEL"}) },
        closeModal: () => { dispatch({type : "CLOSE_UNIT_MODEL"}) }
    }
    return result;
}