import React from "react";

import { Layout, Button } from "antd";
import {  Menu, Icon, Drawer } from "antd";
import useMedia from "react-media-hook2";

const { Sider } = Layout;
const { SubMenu } = Menu;
export  function MainSider(props) {
    const { collapse } = props;
    const setCollapse = val => {
        props.onCollapse(val);
    };
    const isMobile = useMedia({
        onChange: val => {
            setCollapse(false);
        },
        query: "(max-width: 599px)"
    })[0];
    return (
        <>
            {isMobile ? (
                <Drawer
                    closable={false}
                    visible={!collapse}
                    placement={"left"}
                    width={200}
                    className="ant-pro-sider-menu"
                    onClose={() => setCollapse(true)}
                    style={{ padding: 0, height: "100vh" }}
                >
                    <Sider
                        collapsible
                        collapsed={isMobile ? false : collapse}
                        breakpoint={"lg"}
                        onCollapse={val => {
                            setCollapse(val);
                        }}
                    >
                        <div className="ant-pro-sider-menu-logo">asd</div>
                        <MainMenu />
                    </Sider>
                </Drawer>
            ) : (
                    <Sider
                        collapsible
                        collapsed={collapse}
                        breakpoint={"lg"}
                        onCollapse={val => {
                            setCollapse(val);
                        }}
                    >
                        <div className="ant-pro-sider-menu-logo">asd</div>

                        <MainMenu />
                    </Sider>
                )}
        </>
    );
}

export function MainMenu(props) {
    return (
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="user" />
                        <span>User</span>
                    </span>
                }
            >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="team" />
                        <span>Team</span>
                    </span>
                }
            >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
            </Menu.Item>
        </Menu>
    );
}

const { Header, Content, Footer } = Layout;

function Main(props) {
    const [collapse, setCollapse] = React.useState(true);
    return (
        <>
            <Layout style={{ height: "100vh" }}>
                <MainSider collapse={collapse} onCollapse={val => setCollapse(val)} />
                <Layout>
                    <Header>
                        <Button onClick={() => setCollapse(!collapse)} type={"dashed"}>
                            Collapse
                        </Button>
                    </Header>
                    <Content> content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default Main;
