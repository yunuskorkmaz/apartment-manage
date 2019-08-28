import React,{useEffect} from 'react';
import {Card, CardBody, CardHeader,Col, Table,Button} from "reactstrap";
import {AppSwitch} from "@coreui/react";
import {UnitStore} from "../../context/Unit/UnitStore";
import actions from "../../context/Unit/UnitActions";

function UnitManagetment(props){
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
                        <Button className={'float-right'} size={'sm'} >
                            <i className={'icon-plus'}/>
                            {' '}Ekle</Button>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Daire Numarası</th>
                                <th>Durum</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {state.units.map((item,i) =>{
                                return (
                                    <tr key={i}>
                                        <td>
                                            {item.no}
                                        </td>
                                        <td>
                                            <AppSwitch className={'mx-1'} color={'primary'}  disabled checked={item.status} label  />
                                        </td>
                                        <td>
                                            <Button size={'sm'}>Düzenle</Button>
                                        </td>
                                    </tr>

                                )
                            })}
                            </tbody>
                        </Table>

                        {/*<ListGroup>*/}
                        {/*{state.units.map((item,i) =>{*/}
                        {/*return <ListGroupItem key={i}>{item.no} - {item.status}</ListGroupItem>*/}
                        {/*})}*/}
                        {/*</ListGroup>*/}
                    </CardBody>
                </Card>
            </Col>

        </React.Fragment>
    )
}

export default UnitManagetment;