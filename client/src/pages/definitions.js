import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader} from "reactstrap";
import Col from "reactstrap/es/Col";
import actions from '../context/Unit/UnitActions'
import {UnitStore} from "../context/Unit/UnitStore";

function DefinitionsPage(prop) {
    const {state,dispatch} = React.useContext(UnitStore);
    
    useEffect(()=>{
        
       state.units.length === 0 && actions.fetchData(dispatch)
    },[state]);
    
    return (
        <React.Fragment>
            <Col lg={6} md={6}>
                <Card>
                    <CardHeader>
                        Daireler
                    </CardHeader>
                    <CardBody>
                        <ul>
                            {state.units.map((item,i) =>{
                                return <li key={i}>{item.no} - {item.status}</li>
                            })}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            
        </React.Fragment>
    )
}

export default  DefinitionsPage;