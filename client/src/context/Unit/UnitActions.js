import agent from './../../agent'
import {UNIT_FETCH_ALL} from "../../actiontypes";

export default {
    fetchData : dispatch => {
        agent.Units.getAll().then(data => {
            dispatch({
                type: UNIT_FETCH_ALL,
                payload:  data
            })
        });
    }
}