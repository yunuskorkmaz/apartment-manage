import React from 'react';
import {Spinner ,SpinnerProps} from 'reactstrap'
import propTypes from "prop-types";


function LoadingComponent(props){
    return(
        <div className="d-flex justify-content-center">
            <Spinner {...props} />
        </div>
    )

}

LoadingComponent.propTypes = Spinner.propTypes

export default LoadingComponent;