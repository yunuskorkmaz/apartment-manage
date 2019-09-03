import agent from './../../agent'
import {UNIT_FETCH_ALL, ADDED_UNIT, DELETED_UNIT, HANDLE_ERROR_UNIT} from "../../actiontypes";

export default {
    fetchData : dispatch => {
        agent.Units.getAll().then(data => {
            dispatch({
                type: UNIT_FETCH_ALL,
                payload:  data
            })
        });
    },
    create : (unit,dispatch) => {
        agent.Units.create(unit).then(data => {
            dispatch({
                type : ADDED_UNIT,
                payload : data
            })
        })
    },
    delete : (id,dispatch) =>{
        agent.Units.delete(id).then(data =>{
            if(data.success){
                dispatch({
                    type : DELETED_UNIT,
                    payload : data.data
                })
            }
            else{
                dispatch({
                    type : HANDLE_ERROR_UNIT,
                    payload : data.message
                })
            }
        })
    }
}