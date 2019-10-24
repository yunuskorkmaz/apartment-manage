import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Button, Icon, Menu, Dropdown, Tabs } from 'antd'
import HeaderDropdown from '../../components/HeaderDropdown/HeaderDropdown'
import 'antd/es/style/themes/default.less';

import './mainHeader.css'

const { Header } = Layout;
const { TabPane } = Tabs;
function MainHeader(props) {
    const { children, collapsed, onCollapse, ...rest } = props;

    const renderCollapsedButton = () => {
        const { renderCollapseButton } = props;

        return renderCollapseButton
            ? (
                <span className={"collapse-trigger"} onClick={onCollapse}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </span>
            )
            : <></>


    }

    const [visible, setVisible] = useState(false)


    const renderHeaderContent = () => {


        var menuContent = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        var tabs = (
            <Tabs style={{ position: 'relative', width: '336px' }} defaultActiveKey="1" >
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

        const menu = (
            <div style={{ "backgroundColor": "#fff", "borderRadius": "4px", border:"1px solid #000"}}>
                {tabs}
            </div>
        );

        return (
            // <HeaderDropdown
            //     placement="bottomRight"
            //     overlay={menu}
            //     // overlayClassName={styles.popover}
            //     trigger={['click']}
            //     visible={visible}
            //     onVisibleChange={setVisible}
            // >
            //     <span>
            //         asd
            //     </span>
            // </HeaderDropdown>
            <HeaderDropdown
                placement="bottomRight"
                overlay={menu}
                trigger={['click']}
                visible={visible}
                onVisibleChange={setVisible}>
                <a className="ant-dropdown-link" href="#">
                    Click me <Icon type="down" />
                </a>
            </HeaderDropdown>
        )
    }

    return (
        <Header theme={'light'}>
            {renderCollapsedButton()}
            <div style={{ float: 'right', marginRight: '100px' }}>
                {renderHeaderContent()}
            </div>
            {children}
        </Header>
    )
}

MainHeader.propsTypes = {
    onCollapse: PropTypes.func,
    renderCollapseButton: PropTypes.bool
}

MainHeader.defaultProps = {
    renderCollapseButton: true
}


export default MainHeader;