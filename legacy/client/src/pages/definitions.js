import React, {useEffect} from 'react';
import UnitManagement from "../components/UnitManagement/UnitManagement";
import { Row } from 'antd';

function DefinitionsPage(prop) {

    return (
        <div style={{margin:'24px'}}>
            <Row>
                <UnitManagement/>
            </Row>
        </div>
    )
}

export default  DefinitionsPage;