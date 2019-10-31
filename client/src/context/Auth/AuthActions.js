import { UseAuthStore } from "./AuthStore";
import { USER_LOGIN, USER_LOGOUT } from "../../actiontypes";

export const Actions = {
    login: dispatch => {
        dispatch({
            type : USER_LOGIN
        });
    },
logout: (dispatch)=>{
        dispatch({
            type : USER_LOGOUT
        })
    }
}