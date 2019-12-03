import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Table, Button, Spinner } from "reactstrap";
import { AppSwitch } from "@coreui/react";
import { UnitStore } from "../../context/Unit/UnitStore";
import actions from "../../context/Unit/UnitActions";
import AddUnitModal from './AddUnitModal';
import ConfirmButton from '../shared/confirmButton'
import LoadingComponent from '../shared/LoadingComponent';

function UnitManagetmentLegacy(props) {

    const unitContext = React.useContext(UnitStore);
    const [openModal, setOpenModal] = React.useState(false);

    useEffect(() => {
        unitContext.state.units.length === 0 && actions.fetchData(unitContext.dispatch)
    }, [unitContext.units]);

    const handleDelete = (data) => {
        actions.delete(data, unitContext.dispatch);
    };
    return (
        <React.Fragment>
            <Col lg={4} md={4}>
                <Card>
                    <CardHeader>
                        Daireler
                        <Button className={'float-right'} size={'sm'} onClick={() => setOpenModal(true)} color={"primary"}>
                            <i className={'icon-plus'} />
                            {' '}Ekle</Button>
                    </CardHeader>
                    <CardBody>
                        {unitContext.state.loading
                            ? <LoadingComponent type="grow" color="dark" className={"d-flex justify-content-center"} />
                            : (
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Daire Numarası</th>
                                            <th>Durum</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            unitContext.state.units.map((item, i) => {
                                                return (
                                                    <tr key={item.Id}>
                                                        <td>
                                                            {item.No}
                                                        </td>
                                                        <td>
                                                            <AppSwitch variant="pill" className={'mx-1'} color={'primary'}  disabled checked={item.Status} label />
                                                        </td>
                                                        <td className="operation">
                                                            <Button size={'sm'} >Düzenle</Button>
                                                            <ConfirmButton data={item.Id} confirm={handleDelete} />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            )
                        }
                    </CardBody>
                    <AddUnitModal open={openModal} toggle={() => setOpenModal(!openModal)} />
                </Card>
            </Col>

        </React.Fragment>
    )
}

export default UnitManagetmentLegacy;