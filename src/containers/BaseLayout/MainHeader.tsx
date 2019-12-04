import React, { FunctionComponent, ReactNode } from 'react'
import { Icon, Tabs, Layout,Dropdown } from 'antd';
import HeaderDropdown from '../../components/HeaderDropdown/HeaderDropdown';
import './MainHeader.css'

interface MainHeaderProps {
    collapsed : boolean,
    onCollapse : any,
    renderCollapseButton? : boolean
}


const MainHeader : React.SFC<MainHeaderProps> = (props) =>{

    const {children,collapsed , onCollapse} = props;
    const [visible, setVisible] = React.useState(false)
    
    const renderCollapsedButton = () : JSX.Element =>{
        const { renderCollapseButton } = props;
        return (renderCollapseButton 
        ? (
            <span className="collapse-trigger" onClick={onCollapse}>
                <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
            </span>
        ):<></>)
    }

    const renderHeaderContent = () =>{
        const { TabPane} = Tabs;
        var tabs = (
            <>
            <Tabs style={{position :'relative'}} defaultActiveKey="1">
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
        </>
        );
        return (
            <>
            test
                <HeaderDropdown
                    placement="bottomRight"
                    overlay={tabs}
                    trigger={['click']}
                    visible={visible}
                    onVisibleChange={setVisible}>
                    <span className="header-action">
                        <Icon type="down" />
                    </span>
                    </HeaderDropdown>

                
            </>
        )
    }

    const { Header } = Layout; 
    return(
        <>
            
            <Header >
                {renderCollapsedButton()}
                <div style={{ float: 'right', paddingRight: '25px' }}>
                    {renderHeaderContent()}
                </div>
                {children}
            </Header>
        </>
    )
}

MainHeader.defaultProps = {
    renderCollapseButton :true
}

export default MainHeader;