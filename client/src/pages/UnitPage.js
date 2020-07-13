import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Table, Switch, message, Modal } from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { UseUnitStore } from "../contexts/unit/unitContext";
import UnitModal from "../components/unit/UnitModal";

const UnitPage = () => {
	const [
		{ units, loading },
		{ fetchData, changeStatus, addUnit, updateUnit, deleteUnit },
	] = UseUnitStore();
	const [isOpen, setIsOpen] = useState(false);
	const [mode, setMode] = useState("create");
	const [editingData, setEditingData] = useState(null);
	const [confirmLoading, setConfirmLoading] = useState(false);
	useEffect(() => {
		fetchData();
	}, []);

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
			message.error(
				{
					content: err,
				},
				3000
			);
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
			key: "status",
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
		{ title: "Mülk Sahibi" },
		{ title: "Oturan" },
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

	return (
		<div style={{ margin: "24px" }}>
			<Row>
				<Col sm={24} xs={24} md={24} lg={12}>
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
						{
							<UnitModal
								isOpen={isOpen}
								mode={mode}
								editData={editingData}
								confirmLoading={confirmLoading}
								onCancel={closeModal}
								onOk={handleSubmit}
							/>
						}
					</Card>
				</Col>
			</Row>
		</div>
	);
};
export default UnitPage;
