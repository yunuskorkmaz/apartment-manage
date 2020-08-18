import {PlusOutlined} from '@ant-design/icons';
import {Button, Card, Row, Col, Table} from 'antd';
import React from 'react';

const UserPage = () => {

  return (
      <div style={{margin: '24px'}}>
        <Row>
          <Col sm={24} xs={24} md={24} lg={24}>
            <Card
                title="Kullanıcılar"
                loading={false}
                extra={
                  <Button
                      type="primary"
                      icon={<PlusOutlined/>}
                      onClick={() => {

                      }}>Ekle
                  </Button>}>
              <Table
                  pagination={false}
                  columns={[]}
                  rowKey={"_id"}
                  dataSource={[]}
                  size="small"/>
            </Card>
          </Col>
        </Row>
      </div>
  )
};

export default UserPage;
