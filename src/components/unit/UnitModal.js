import React, { memo, useEffect, useRef, useState } from "react";
import { Modal, Form, Input, Switch } from "antd";

const UnitModal = ({
	mode,
	editData,
	confirmLoading,
	isOpen,
	onCancel,
	onOk,
}) => {
	const [form] = Form.useForm();

	useEffect(() => {

		form.resetFields();
		if (mode === "edit") {
			form.setFieldsValue(editData);
		} else {
			form.setFieldsValue({ status: true });
		}

	}, [editData, mode, form]);


	return (
		<Modal
			title={`Daire ${mode === "edit" ? "Düzenle" : "Ekle"}`}
			visible={isOpen}
			onCancel={onCancel}
			confirmLoading={confirmLoading}
			destroyOnClose={false}
			getContainer={false}
			onOk={async () => {
				form
					.validateFields()
					.then(onOk)
					.catch((error) => {
						//console.log("error", error);
					});
			}}
		>
			<Form 
				form={form}>
				<Form.Item
					label="No"
					name="doorNumber"
					rules={[
						{
							required: true,
							message: "Lütfen daire numarasını giriniz",
						},
					]}
				>
					<Input min={0} type="number" />
				</Form.Item>
				<Form.Item label="Durum" name="status" valuePropName="checked">
					<Switch />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default memo(UnitModal);
