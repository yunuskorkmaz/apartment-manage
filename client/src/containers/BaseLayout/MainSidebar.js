import React from 'react';
import { Drawer, Icon,Menu } from 'antd'
import useMedia from 'react-media-hook2';
import Sider from 'antd/lib/layout/Sider';
import PropTypes from 'prop-types';

import './mainSidebar.css'

const { SubMenu } = Menu;

function MainSidebar(props) {
    const { collapse, onCollapse, children, isMobile } = props;
    return (
        <>
            {isMobile
                ? (
                    <Drawer
                        closable={false}
                        visible={!isMobile ? false : !collapse}
                        placement={"left"}
                        width={250}
                        className="main-sidebar"
                        onClose={() => onCollapse(true)}
                        style={{ padding: 0, height: "100vh" }}
                    >
                        <Sider
                            collapsible
                            collapsed={isMobile ? false : collapse}
                            breakpoint={"lg"}
                            width={250}
                            onCollapse={val => {
                                if (!isMobile) {
                                    onCollapse(val);
                                }
                            }}
                        >
                            {children}
                        </Sider>
                    </Drawer>
                )
                : (
                    <Sider
                        collapsible
                        collapsed={collapse}
                        breakpoint={"lg"}
                        width={250}
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                        onCollapse={val => {
                                onCollapse(val);
                        }}
                    >
                        {children}
                    </Sider>
                )
            }
        </>
    )
}

//  SidebarHeader
function SidebarHeader({ logo, title }) {

    const renderLogo = () => {
        if (logo) {
            return (
                <img src={logo} alt="" />
            )
        }
    }
    const renderTitle = () => {
        if (title) {
            return (
                <h1>{title}</h1>
            )
        }
    }
    return (
        <div className={'sidebar-logo'}>
            {renderLogo()}
            {renderTitle()}
        </div>
    )
}

SidebarHeader.propType = {
    logo: PropTypes.string,
    title: PropTypes.string,
}
// # SidebarHeader

function MainMenu({ props }) {
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
    )
}

export default MainSidebar;

export { SidebarHeader, MainMenu }