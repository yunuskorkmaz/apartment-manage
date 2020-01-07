import React, { useState, useEffect } from 'react';
import { UseUnitStore, Unit } from '../../context/Unit/UnitStore';
import { Modal, Form, InputNumber, Switch, message } from 'antd';
import useForm from 'rc-form-hooks';

export type ModeType = "Edit" | "Add" | "None"

const AddUnitModal: React.SFC<{ mode: ModeType, data?: number | null }> = (props) => {

    const [{ units, Modalvisible }, { closeModal, create, edit }] = UseUnitStore();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { getFieldDecorator, validateFields, setFieldsValue } = useForm<{
        No: number,
        Status: boolean
    }>()

    useEffect(() => {
        const { mode, data } = props;
        if (mode == "Add") {
            if(units.length){
                var nmax = Math.max(...Array.from(units, o => o.No));
                if (!isNaN(nmax)) {
                    setFieldsValue({ No: nmax + 1 , Status : true})
                }
            }
        }
        else if (mode == "Edit") {
            var unit = units.find(a => a.Id == data);
            if (unit) {
                setFieldsValue({
                    No: unit.No,
                    Status: unit.Status
                })
            }
        }
    }, [units, Modalvisible])

    const handleSave = async (unit: Unit) => {
        const { mode, data } = props;
        if (mode == "Add") {
            await create(unit);
        }
        else if (mode == "Edit") {
            if (data != null) {
                unit.Id = data;
                await edit(unit);
            } else {
                message.error("Id yok");
            }
        }
    }

    return (
        <>
            <Modal
                title={props.mode == "Add" ? "Daire Ekle" : "Daire Düzenle"}
                visible={Modalvisible}
                okText="Kaydet"
                cancelText="İptal"
                confirmLoading={Modalvisible ? confirmLoading : false}
                onOk={() => {
                    validateFields()
                        .then(async (values) => {
                            setConfirmLoading(true);
                            await handleSave(values as Unit)
                            setConfirmLoading(false);
                        })
                }}
                onCancel={closeModal}
            >
                <Form layout="inline">
                    <Form.Item label="Daire No">
                        {
                            getFieldDecorator("No", {
                                rules: [{ required: true, message: "Lütfen Daire Numarası Giriniz" }]
                            })(<InputNumber />)
                        }
                    </Form.Item>
                    <Form.Item label="Durum">
                        {
                            getFieldDecorator("Status", {
                                valuePropName: 'checked', initialValue: true
                            })(<Switch />)
                        }
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AddUnitModal;
