import React from 'react';
import PropTypes from 'prop-types';
import { Layout,Button} from 'antd'


import './mainHeader.css'

const { Header } = Layout;
function MainHeader(props){
    const { children, onCollapse,...rest} = props;

    const renderCollapsedButton = ()=>{
        const {renderCollapseButton} = props;

        return(
            <Button onClick={onCollapse} type={"dashed"}>
                Collapse
            </Button>
        )
    }

    return(
        <Header  >
            {renderCollapsedButton()}
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