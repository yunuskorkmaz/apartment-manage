import React from 'react';
import { Drawer } from 'antd'
import useMedia from 'react-media-hook2';
import Sider from 'antd/lib/layout/Sider';

import './mainSidebar.css'

function MainSidebar(props) {
    const { collapse, onCollapse,children,isMobile } = props;

    

    return (
        <>
            {isMobile
                ? (
                    <Drawer
                        closable={false}
                        visible={!isMobile ? false : !collapse}
                        placement={"left"}
                        width={200}
                        className="main-sidebar"
                        onClose={() => onCollapse(true)}
                        style={{ padding: 0, height: "100vh" }}
                    >
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={isMobile ? false : collapse}
                            breakpoint={"lg"}
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
                        collapsed={isMobile ? false : collapse}
                        breakpoint={"lg"}
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                        onCollapse={val => {
                            if (!isMobile) {
                                onCollapse(val);

                            }
                        }}
                    >
                        {children}
                    </Sider>
                )
            }
        </>
    )
}

export default MainSidebar;