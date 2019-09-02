import React from 'react';
import PropTypes  from 'prop-types'
import { AppSwitch } from "@coreui/react";
import { Modal,ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import {UnitStore} from "../../context/Unit/UnitStore";
import actions from "../../context/Unit/UnitActions";


function AddUnitModal({open,toggle, className}){

    const unitContext = React.useContext(UnitStore);

    const [state,setState] = React.useState({
        No : 0,
        Status : true
    })

    const handleSubmit = (event) =>{
        console.log(actions.create(state,unitContext.dispatch));
        event.preventDefault();
    }
    const handleChange = (event) =>{
        event.persist();
        setState({...state,[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value})
    }
    return (<Modal isOpen={open}  toggle={toggle} className={className}>
         <form onSubmit={handleSubmit}>
            <ModalHeader>Daire Ekle</ModalHeader>
                <ModalBody>                
                    <input type="number" defaultValue={state.no} name="No" onChange={handleChange} />
                    <AppSwitch className={'mx-1'} color={'primary'} checked={state.status} onChange={handleChange} label name="Status" />
                </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle} >Cancel</Button>
                <Button color="primary" type="submit">Kaydet</Button>{' '}
            </ModalFooter>
         </form>
    </Modal>)
}
AddUnitModal.propTypes = {
    open : PropTypes.bool,
    toggle : PropTypes.func,
    className : PropTypes.string
}
export default AddUnitModal;