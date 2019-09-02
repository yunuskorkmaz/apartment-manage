import agent from './../../agent'
import {UNIT_FETCH_ALL,ADDED_UNIT} from "../../actiontypes";

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
    }
}