import React from 'react';
import { Layout, Button } from 'antd'


import 'antd/dist/antd.css'
import MainSidebar from './MainSidebar';

const { Header, Sider, Content,Footer } = Layout;

function BaseLayout(props){
    const [collapse, setCollapse] = React.useState(true);
    const change = ()=>{
        console.log("asd");
        console.log(collapse);
        setCollapse(!collapse);
        console.log(collapse);
    }

    return(
        <>
            <Layout style={{height:'100vh'}}>
                <Header>
                    <Button onClick={change} type={"dashed"}>
                        Collapse
            </Button>
                </Header>
                <Layout>
                    <MainSidebar collapse={collapse} onCollapse={val => setCollapse(val)}>
                    asd
                    </MainSidebar>
                    <Content>
                    test
                    </Content>
                </Layout>
            </Layout>
        </>
    )

}
export default BaseLayout;