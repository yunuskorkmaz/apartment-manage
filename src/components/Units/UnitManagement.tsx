import React, { useEffect, useState } from 'react';
import { UseUnitStore, Unit } from '../../context/Unit/UnitStore';
import { Col, Card, Table, Switch, message, Button, Modal } from 'antd';
import AddUnitModal, { ModeType } from './AddUnitModal';
import { ColumnProps } from 'antd/lib/table';

const UnitManagement: React.SFC = (props) => {

    const { confirm } = Modal
    const [{ units, loading, ...state }, action] = UseUnitStore();
    const { fetchData, openModal } = action;
    const [mode, setMode] = useState<ModeType>("None")
    const [data, setData] = useState<number | null>(null);

    useEffect(() => {
        units.length === 0 && fetchData()
    }, [units])

    const showDeleteConfirm = (id: number) => {
        confirm({
            title: "Emin Misiniz?",
            content: "Silmek İstediğinize Emin Misiniz?",
            okText: "Sil",
            okType: "danger",
            cancelText: "İptal",
            onOk() {
                action.delete(id);
                message.success("Başarılı");
            },
            onCancel() {
                message.info("İptal edildi")
            }
        })
    }

    const showEdit = (id: number) => {
        setMode("Edit");
        setData(id);
        openModal();
    }
    const columns: ColumnProps<Unit>[] = [
        {
            title: "Daire No",
            key: "no",
            dataIndex: 'No',
            ellipsis: true
        },
        {
            title: "Durum",
            key: "status",
            dataIndex: "Status",
            ellipsis: true,
            align : 'center',
            render: (status: boolean) => (
                <>
                    <Switch onChange={() => message.success("İşlem Başarılı")} size={'small'}  checked={status} />
                </>
            )
        },
        {
            title: "",
            key: "action",
            ellipsis: true,
            align: "right",
            render: (text: any, record: any) => (
                <Button.Group>
                    <Button onClick={() => showDeleteConfirm(record.Id)} size='small' type={'danger'} icon={'delete'}></Button>
                    <Button onClick={() => showEdit(record.Id)} size='small' type={'primary'} icon={'edit'}></Button>
                </Button.Group>
            )
        }
    ];

    return (
        <>
            <Col lg={12} md={12}>
                <Card
                    size="default" title="Daireler"
                    extra={
                        <Button type={"primary"} icon={'plus'} onClick={() => { setMode("Add"); openModal(); }}>Ekle</Button>
                    }
                    loading={loading}
                >
                    <Table pagination={false} columns={columns} rowKey={'Id'} size="middle" dataSource={units} />
                    <AddUnitModal mode={mode} data={data} />
                </Card>
            </Col>
        </>

    )
}

export default UnitManagement;