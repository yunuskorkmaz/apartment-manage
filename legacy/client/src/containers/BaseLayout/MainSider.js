import React from "react";
import { Layout, Menu, Icon, Drawer } from "antd";
import './mainSider.css'
import navigations from '../../_nav';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg'
const { Sider } = Layout;
const { SubMenu } = Menu;
export default function MainSider(props) {
    const { collapse, isMobile } = props;
    const setCollapse = val => {
        props.onCollapse(val);
    };

    const logoSection = (
        <>
            <img src={logo}/>
            <h1>Apartman Yönetimi</h1>
        </>
    )

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

                        collapsed={isMobile ? false : collapse}
                        breakpoint={"lg"}
                        onCollapse={val => {
                            if (!isMobile) {
                                setCollapse(val);
                            }
                        }}
                    >
                        <div className="ant-pro-sider-menu-logo">
                            {logoSection}
                        </div>
                        <MainMenu />
                    </Sider>
                </Drawer>
            ) : (
                    <Sider
                        collapsible
                        collapsed={collapse}
                        breakpoint={"lg"}
                        onCollapse={val => {
                            if (!isMobile) {
                                setCollapse(val);
                            }
                        }}
                    >
                        <div className="ant-pro-sider-menu-logo">
                           {logoSection}
                        </div>

                        <MainMenu />
                    </Sider>
                )}
        </>
    );
}

export function MainMenu(props) {
    return (
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {
                navigations.menu.map((item, index) => {
                    if (item.items) {
                        return (
                            <SubMenu
                                key={index}
                                title={
                                    <span>
                                        {item.icon ? <Icon type={item.icon} /> : null}
                                        <span>{item.name}</span>
                                    </span>
                                }
                            >
                                {item.items.map((child, cindex) => {
                                    return (
                                        <Menu.Item key={index + "_" + cindex}>
                                            <NavLink to={child.url || '#'}>
                                                {child.name}
                                            </NavLink>
                                        </Menu.Item>
                                    )
                                })}
                            </SubMenu>
                        )
                    }
                    else {
                        return (
                            <Menu.Item key={index}>
                                <NavLink to={item.url || '#'} >
                                    {item.icon && <Icon type={item.icon} />}
                                    <span>
                                        {item.name}
                                    </span>
                                </NavLink>
                            </Menu.Item>
                        )
                    }
                })
            }
        </Menu>
    );
}