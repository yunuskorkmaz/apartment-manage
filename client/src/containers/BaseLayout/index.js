import React from 'react';
import { Layout, Button } from 'antd'
import useMedia from 'react-media-hook2';

import 'antd/dist/antd.css'
import MainSidebar from './MainSidebar';
import MainHeader from './MainHeader';

const { Header, Sider, Content, Footer } = Layout;

function BaseLayout(props) {
    const [collapse, setCollapse] = React.useState(true);
    const onCollapse = () => {
        setCollapse(!collapse);
    }

    const isMobile = useMedia({
        onChange: val => {
            setCollapse(true);
        },
        query: "(max-width:599px)"
    })[0];


    const sidebarProps = {
        isMobile,
        collapse,
        onCollapse : val => setCollapse(val)
    }

    const getPaddingLeft = (hasLeftPadding,collapsed,siderWith) =>{
        if(hasLeftPadding){
            return collapsed ? 80 : siderWith;
        }
        return undefined;
    }

    return (
        <>
            <Layout style={{height:'100vh'}}>
                <MainSidebar {...sidebarProps}>
                    asd
                </MainSidebar>
                
                <Layout style={{paddingLeft : getPaddingLeft(!isMobile,collapse,200),minWidth:'100vh'}}>
                    <MainHeader style={{background:'#fff'}}>
                        <Button onClick={onCollapse} type={"dashed"}>
                            Collapse
                        </Button>
                    </MainHeader>
                    <Content>
                        test
                    </Content>
                </Layout>
            </Layout>
        </>
    )

}
export default BaseLayout;