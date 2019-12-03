import React from 'react';
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import ModalFooter from "reactstrap/es/ModalFooter";
import Button from "reactstrap/es/Button";
import PropTypes  from 'prop-types'


ConfirmButton.defaultProps = {
    confirm : (e)=> console.log(e),
    deleteButtonText : 'Sil',
    confirmButtonText : 'Onayla',
    modalHeader : 'Başlık',
    modalBody : 'Silmek istediğinize emin misiniz?'
};


function ConfirmButton({data,confirm,deleteButtonText,confirmButtonText,modalHeader,modalBody}) {
    
    const [open,setOpen] = React.useState(false);
    
    const handleConfirm = () =>{
        confirm(data);
        setOpen(false);
    };
    
    return (
        <React.Fragment>
            <Button color={'danger'} size={'sm'} onClick={()=> setOpen(true)}>{deleteButtonText}</Button>
            <Modal isOpen={open}>
                <ModalHeader>
                    {modalHeader}
                </ModalHeader>
                <ModalBody>
                    {modalBody}
                </ModalBody>
                <ModalFooter>
                    <Button color={'default'} onClick={()=> setOpen(false)}>İptal</Button>
                    <Button color={'danger'} onClick={handleConfirm}>{confirmButtonText}</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}


ConfirmButton.propTypes = {
    data : PropTypes.any,
    confirm : PropTypes.func,
    deleteButtonText : PropTypes.string,
    confirmButtonText : PropTypes.string,
    modalHeader : PropTypes.string,
    modalBody : PropTypes.any
};


export default ConfirmButton;