import React from 'react';
import { UseUnitStore } from '../../context/Unit/UnitStore';
import { Modal } from 'antd';

export const AddUnitModal : React.SFC<{}> = (props) => {
    
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
