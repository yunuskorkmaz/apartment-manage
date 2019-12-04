import React from 'react';
import { Row } from 'antd';
import UnitManagement from '../components/Units/UnitManagement';


const Units : React.SFC = (props) => {
    return (
        <>
            <div style={{margin : '24px'}}>
                <Row>
                    <UnitManagement/>
                </Row>
            </div>
        </>
    )
}

export default Units;