import React from 'react';
import { Drawer } from 'antd'
import useMedia from 'react-media-hook2';
import Sider from 'antd/lib/layout/Sider';

function MainSidebar(props) {
    const {collapse} = props;

    const setCollapse = val =>{
        props.onCollapse(val);
    }

    const isMobile = useMedia({
        onChange : val =>{
            setCollapse(false);
        },
        query : "(max-width:599px)"
    })[0];

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
                            
                        </Sider>
            </Drawer>
        )
        :(
                    <Sider
                        collapsible
                        collapsed={isMobile ? false : collapse}
                        breakpoint={"lg"}
                        onCollapse={val => {
                            setCollapse(val);
                        }}
                    >
                        <div className="ant-pro-sider-menu-logo">asd</div>
                       
                    </Sider>
        )
        
        }
            
        </>
    )
}

export default MainSidebar;