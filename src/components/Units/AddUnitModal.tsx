import React from 'react';
import { UseUnitStore } from '../../context/Unit/UnitStore';
import { Modal, Form } from 'antd';

@Form.create()
const AddUnitModal : React.SFC<{}> = (props) => {
    
    const [] = UseUnitStore();

    return (
        <>
            <Modal
                title={'Daire Ekle'}
                visible={addModalvisible}
                okText="Kaydet"
                cancelText="İptal"
                onOk={()=>{
                    form.validateFields((err,values)=>{
                        if(err) return;
                        create(values);
                    })
                }}
                onCancel={() => closeAddModal()}
            >

            </Modal>
        </>
    )
}
