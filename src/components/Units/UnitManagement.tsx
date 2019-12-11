import React, { useEffect }  from 'react';
import { UseUnitStore } from '../../context/Unit/UnitStore';
import { Col, Card, Table, Switch, message, Button } from 'antd';


const UnitManagement : React.SFC = (props) => {

    const [{units,loading,...state},action] = UseUnitStore();
    const { fetchData,openAddModal,closeAddModal } = action;
    useEffect(() => {
        units.length === 0 && fetchData()
    }, [units])
    

    const columns = [
        {
            title: "Daire No",
            key: "no",
            dataIndex: 'No'
        },
        {
            title: "Durum",
            key: "status",
            dataIndex: "Status",
            render: (status : any) => (
                <Switch onChange={() => message.success("İşlem Başarılı")} size={'small'} defaultChecked={status} />
            )
        },
        {
            title: "",
            key: "action",
            ellipsis: true,
            render: (text :any, record :any) => (
                // <span>
                //     <Button onClick={() => showDeleteConfirm(record.Id)} size='small' type={'danger'} icon={'delete'}></Button>
                // </span>
                <>
                </>
                )
        }
    ];

    return(
        <>
            <Col lg={12} md={12}>
                <Card
                    size="default" title="Daireler"
                    extra={
                        <Button type={"primary"} icon={'plus'} onClick={() => openAddModal()}>Ekle</Button>
                    }
                    loading={loading}
                >
                    <Table pagination={false} columns={columns} rowKey={'Id'} size="middle" dataSource={units} />
                </Card>
            </Col>
        </>

    )
}

export default UnitManagement;