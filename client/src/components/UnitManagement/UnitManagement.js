import React, { useEffect } from 'react';
import { Col,Card ,Switch,Button, Table, message, Modal} from 'antd'
import { UseUnitStore } from '../../context/Unit/UnitStore';
import AddUnitModal from './AddUnitModal';

function UnitManagement(props){
    const [{units,loading,...state},action] = UseUnitStore();
    const { fetchData,deleteUnit,openAddModal } = action;
    const { confirm } = Modal;
    useEffect(()=>{
        units.length === 0 && fetchData()
    },[units])

    const showDeleteConfirm = (id)=>{
        confirm({
            title : "Emin Misiniz?",
            content : "Silmek İstediğinize Emin Misiniz?",
            okText:"Sil",
            okType:"danger",
            cancelText:"İptal",
            onOk(){
                deleteUnit  (id);
                message.success("Başarılı");
            },
            oncancel(){
                message.info("İptal edildi")
            }
        })
    }

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
                <Switch onChange={()=> message.success("İşlem Başarılı")} size={'small'} defaultChecked={status} />
            )
        },
        {
            title : "",
            key : "action",
            ellipsis:true,
            render : (text,record) =>(
                <span>
                    <Button onClick={()=>showDeleteConfirm(record.Id)} size='small' type={'danger'} icon={'delete'}></Button>
                </span>
            )
        }
    ];
    return(
        <>
            <Col lg={12} md={12}>
                <Card 
                    size="default" title="Daireler" 
                    extra={
                        <Button type={"primary"} icon={'plus'} onClick={()=>openAddModal()}>Ekle</Button>
                    }
                    loading={loading}
                >
                    <Table pagination={false} columns={columns} rowKey={'Id'} size="middle"  dataSource={units} />
                </Card>
                <AddUnitModal />
            </Col>
        </>
    )
}

export default UnitManagement;