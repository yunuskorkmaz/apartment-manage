import React, { useEffect } from 'react';
import { Row,Col,Card ,Switch,Button, Table, message, Modal} from 'antd'
import { UseUnitStore } from '../../context/Unit/UnitStore';
import actions from '../../context/Unit/UnitActions'

function UnitManagement(props){
    const { fetchData} = actions;
    const [state,dispatch] = UseUnitStore();
    
    useEffect(()=>{
        state.units.length === 0 && fetchData(dispatch)
    },[state.units])
    const columns = [
        {
            title : "Daire No",
            key : "no",
            dataIndex : 'No'
        },
        {
            title : "Durum",
            key : "status",
            dataIndex : "Status",
            render : status => (
                <Switch onChange={()=> message.success("İşlem Başarılar")} size={'small'} defaultChecked={status} />
            )
        },
        {
            title : "",
            key : "action",
            render : (text,record) =>(
                <span>
                    <Button size={'small'} type={'danger'} icon={'delete'}></Button>
                </span>
            )
        }
    ];
    return(
        <>
            <Col lg={12} md={12}>
                <Card size="default" title="Small size card" extra={
                    <Button type={"dashed"} icon={'plus'}>Ekle</Button>
                }>
                    <Table columns={columns} rowKey={'Id'} dataSource={state.units} />
                </Card>
            </Col>
        </>
    )
}

export default UnitManagement;