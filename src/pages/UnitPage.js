import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Table, Switch, message, Modal, Form, Input } from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { UseUnitStore } from "../contexts/unit/unitContext";

const UnitPage = () => {
	const [
		{ units, loading },
		{ fetchData, changeStatus, addUnit, updateUnit, deleteUnit },
	] = UseUnitStore();
	const [isOpen, setIsOpen] = useState(false);
	const [mode, setMode] = useState("create");
	const [editingData, setEditingData] = useState(null);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const [form] = Form.useForm();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		form.resetFields();
		if (mode === "edit") {
			form.setFieldsValue(editingData)
		} else {
			form.setFieldsValue({
				doorNumber: null,
				status: true
			})
		}
	}, [editingData, form, mode])

	const formValidate = () => {
		form.validateFields().then(handleSubmit);
	}

	const handleSubmit = async (model) => {
		try {
			setConfirmLoading(true);
			if (mode === "edit") {
				await updateUnit({ ...editingData, ...model });
			} else {
				await addUnit(model);
			}
			setConfirmLoading(false);
			closeModal();
		} catch (err) {
			message.error({ content: err, }, 3000);
		} finally {
			setConfirmLoading(false);
		}
	};

	const closeModal = () => {
		setIsOpen(false);
		setMode("none");
		setEditingData({});
	};

	const columns = [
		{
			title: "Kapı Numarası",
			dataIndex: "doorNumber",
			key: "doorNumber",
		},
		{
			title: "Durum",
			dataIndex: "status",
			render: (status, item) => {
				return (
					<Switch
						onChange={() => {
							changeStatus(item);
						}}
						size={"small"}
						checked={status}
					/>
				);
			},
		},
		{
			title: "Mülk Sahibi", dataIndex: "properyOwner", render: (value, item) => {
				return (
					<>
						{!value && <Button size="small" >Kat Maliki Ata</Button>}
					</>
				)
			}
		},
		{
			title: "Kiracı", dataIndex: "tenant", render: (value, item) => {
				return (
					<>
						{!value && <Button onClick={() => { }} size="small" >Kiracı Ata</Button>}
					</>
				)
			}
		},
		{
			align: "right",
			render: (value, item) => {
				return (
					<Button.Group>
						<Button
							onClick={async () => {
								deleteUnit(item._id);
							}}
							size="small"
							danger
							type="primary"
							icon={<DeleteOutlined />}
						/>
						<Button
							onClick={() => {
								setMode("edit");
								setEditingData(item);
								setIsOpen(true);
							}}
							size="small"
							type="primary"
							icon={<EditOutlined />}
						/>
					</Button.Group>
				);
			},
		},
	];

	const drawForm = () => {

		return (
			<Form
				form={form}
				layout={"vertical"}
				initialValues={{
					doorNumber: 0,
					status: true
				}}>				
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
		)
	}

	return (
		<div style={{ margin: "24px" }}>
			<Row>
				<Col sm={24} xs={24} md={24} lg={24}>
					<Card
						title="Daireler"
						extra={
							<Button
								type={"primary"}
								icon={<PlusOutlined />}
								onClick={() => {
									// setMode("Add");
									//dispatch.openModal();
									setIsOpen(true);
								}}
							>
								Ekle
							</Button>
						}
						loading={loading}
					>
						<Table
							pagination={false}
							columns={columns}
							rowKey={"_id"}
							dataSource={units}
							size="small"
						/>
						{/* <UnitModal
							mode={mode}
							editData={editingData}
							confirmLoading={confirmLoading}
							isOpen={isOpen}
							onCancel={closeModal}
							onOk={handleSubmit}
							/> */}
						<Modal
							title="Daite Ekle/Güncelle"
							visible={isOpen}
							onCancel={closeModal}
							forceRender
							confirmLoading={confirmLoading}
							getContainer={false}
							onOk={formValidate}>
							{drawForm()}
						</Modal>
					</Card>
				</Col>
			</Row>
		</div>
	);
};
export default UnitPage;
