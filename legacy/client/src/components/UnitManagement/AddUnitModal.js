import React, { useEffect, useState, forwardRef, useRef } from 'react';
import PropTypes from 'prop-types'
import { UseUnitStore } from "../../context/Unit/UnitStore";
import { Modal, Form, InputNumber,Switch } from 'antd'

function AddUnitModal({ toggle, className,form,...props}) {
    
    const [{ units, addModalVisible}, {closeAddModal,create}] = UseUnitStore()
    const { getFieldDecorator, setFieldsValue } = form;

    useEffect(() => {
        if (units.length != 0) {
            var nmax = Math.max(...Array.from(units, o => o.No));
            if (!isNaN(nmax)) {
                setFieldsValue({No:nmax+1})
            }
        }
    }, [units,addModalVisible])

    return (
        <>
            <Modal
                title={'Daire Ekle'}
                visible={addModalVisible}
                okText="Kaydet"
                cancelText="İptal"
                onOk={() => {
                    form.validateFields((err,values)=>{
                        if(err)
                            return
                        create(values);
                    })
                }}
                onCancel={() => closeAddModal()}
            >
                <Form layout={'inline'}>
                    <Form.Item label="Daire No">
                        {getFieldDecorator('No', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }]
                        })(<InputNumber  />)}
                    </Form.Item>
                    <Form.Item label="Durum">
                        {getFieldDecorator('Status', { valuePropName: 'checked',initialValue:true })(<Switch />)}
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
AddUnitModal.propTypes = {
    open: PropTypes.bool,
    toggle: PropTypes.func,
    className: PropTypes.string
}
export default Form.create()(AddUnitModal);