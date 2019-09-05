import React,{useEffect} from 'react';
import PropTypes  from 'prop-types'
import { AppSwitch } from "@coreui/react";
import { Modal,ModalHeader, ModalBody, ModalFooter, Button,Form,FormGroup,Label,Input,Col,CustomInput } from 'reactstrap'
import {UnitStore} from "../../context/Unit/UnitStore";
import actions from "../../context/Unit/UnitActions";


function AddUnitModal({open,toggle, className}){

    const unitContext = React.useContext(UnitStore);

    const [state,setState] = React.useState({
        No: 0,
        Status : true
    })

    const handleSubmit = (event) =>{
        actions.create(state,unitContext.dispatch);
        toggle()
        event.preventDefault();
    }
    const handleChange = (event) =>{
        event.persist();
        setState({...state,[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value})
    }

    useEffect(() => {
        if(unitContext.state.units.length != 0){
            var nMax = Math.max(...Array.from(unitContext.state.units, o => o.No));
            if(!isNaN(nMax)){
                setState({...state,No : nMax +1})
            } 
        }
        
    }, [unitContext.state.units])

    return (<Modal isOpen={open}  toggle={toggle} className={className}>
         <Form onSubmit={handleSubmit}>
            <ModalHeader>Daire Ekle</ModalHeader>
                <ModalBody>
                    <FormGroup >
                        <Label for={"No"} >No</Label>
                        <Input type={"number"} defaultValue={state.No} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={"Status"}>Durum</Label>
                        <div>
                            <CustomInput id="status" type={"switch"} name="Status" checked={state.Status} onChange={handleChange} />
                        </div>
                    </FormGroup>
                </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle} >Cancel</Button>
                <Button color="primary" type="submit">Kaydet</Button>{' '}
            </ModalFooter>
         </Form>
    </Modal>)
}
AddUnitModal.propTypes = {
    open : PropTypes.bool,
    toggle : PropTypes.func,
    className : PropTypes.string
}
export default AddUnitModal;