import React from 'react';
import { Layout, Button,Tabs } from 'antd'
import 'antd/dist/antd.css'
import useMedia from "react-media-hook2";
import MainSider from "./MainSider";
import MainHeader from './MainHeader';

const { Content, Footer } = Layout;
const { TabPane } = Tabs

function Main(props) {
    const [collapse, setCollapse] = React.useState(true);

    const isMobile = useMedia({
        onChange: val => {
            setCollapse(true);
        },
        query: "(max-width: 599px)"
    })[0];

    return (
        <>
            <Layout style={{ height: "100vh" }}>
                <MainSider collapse={collapse} onCollapse={val => setCollapse(val)} isMobile={isMobile} />
                <Layout>
                    <MainHeader collapsed={collapse} onCollapse={() => setCollapse(!collapse)}/>
                    <Content>
                    
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Tab 1" key="1">
                                Content of Tab Pane 1
                </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                Content of Tab Pane 2
                </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                Content of Tab Pane 3
                </TabPane>
                        </Tabs>
                    
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default Main;