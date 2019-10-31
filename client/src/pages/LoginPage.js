import React from 'react';
import { UseAuthStore } from '../context/Auth/AuthStore';
import { Actions } from '../context/Auth/AuthActions';
import { Redirect } from 'react-router-dom'
function LoginPage(props) {
    
    const [{
        isLogined
    },dispatch] = UseAuthStore()
    const {login} = Actions;
    return(
        <>
            {isLogined 
                ? (<Redirect to="/" />)
                :(<div>
                    Login Page
                    <button onClick={() => { login(dispatch)}}> Giriş Yap </button>
                    </div>)}
        </>
    )
}

export default LoginPage;