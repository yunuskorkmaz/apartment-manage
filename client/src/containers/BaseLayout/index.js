import React from 'react';
import { Layout, Button } from 'antd'
import 'antd/dist/antd.css'
import useMedia from "react-media-hook2";
import MainSider from "./MainSider";
import MainHeader from './MainHeader';

const { Content, Footer } = Layout;

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
                    <MainHeader onCollapse={() => setCollapse(!collapse)}/>
                    <Content>asdasd</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default Main;