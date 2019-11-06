import agent from './../../agent'
import { UNIT_FETCH_ALL, ADDED_UNIT, DELETED_UNIT, HANDLE_ERROR_UNIT, START_UNIT_FETCHING, OPEN_UNIT_ADD_MODEL, CLOSE_UNIT_ADD_MODEL, END_UNIT_FETCHING} from "../../actiontypes";

export default {
    fetchData : dispatch=> () => {
        dispatch({
            type : START_UNIT_FETCHING
        });
        agent.Units.getAll().then(data => {
            dispatch({
                type: UNIT_FETCH_ALL,
                payload:  data
            });
             
        });
        dispatch({
            type: END_UNIT_FETCHING
        })
    },
    create: (dispatch) => unit => {
        agent.Units.create(unit).then(data => {
            dispatch({
                type : ADDED_UNIT,
                payload : data
            })
        })
    },
    deleteUnit : (dispatch) => id =>{
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
    },
    openAddModal : dispatch => () =>{
        dispatch({
            type : OPEN_UNIT_ADD_MODEL
        })
    },
    closeAddModal : dispatch => () =>{
        dispatch({
            type : CLOSE_UNIT_ADD_MODEL
        })
    }
}