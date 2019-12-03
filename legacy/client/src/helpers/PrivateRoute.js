import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { AuthStore } from '../context/Auth/AuthStore';


export const PrivateRoute = (props) => { 
    const {component : Component, ...rest} = props;
    const { state, dispatch } = React.useContext(AuthStore);
    return (
        <>
            <Route {...rest}  render={childProps => {
                if(!state.isLogined){
                    return <Redirect to={{pathname: '/login'}} />
                }
                return <Component {...childProps}/>
            }} />
        </>
    );
 }