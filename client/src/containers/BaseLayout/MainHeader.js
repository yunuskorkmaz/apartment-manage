import React from 'react';
import { Layout} from 'antd'
import './mainHeader.css'

const { Header } = Layout;
function MainHeader(props){
    const {children,...rest} = props;
    return(
        <Header {...rest} >
            {children}
        </Header>
    )
}

export default MainHeader;