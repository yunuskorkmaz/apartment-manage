import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Button, Icon, Menu, Dropdown, Tabs } from 'antd'
import 'antd/es/style/themes/default.less';

import './mainHeader.css'

const { Header } = Layout;
const { TabPane } = Tabs;
function MainHeader(props){
    const { children, collapsed, onCollapse,...rest} = props;

    const renderCollapsedButton = ()=>{
        const {renderCollapseButton} = props;

        return renderCollapseButton
                ? (
                <span className={"collapse-trigger"} onClick={onCollapse}>
                        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </span>
                )
                : <></>
            
        
    }

    const renderHeaderContent = () =>{

        const menu = (
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
        );

        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>

        )
    }

    return(
        <Header  theme={'light'}>
            {renderCollapsedButton()}
            <div style={{float:'right',marginRight:'100px'}}>
                {renderHeaderContent()}
            </div>
            {children}
        </Header>
    )
}

MainHeader.propsTypes = {
    onCollapse : PropTypes.func,
    renderCollapseButton : PropTypes.bool
}

MainHeader.defaultProps = {
    renderCollapseButton : true
}


export default MainHeader;