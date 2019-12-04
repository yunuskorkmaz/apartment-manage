import React, { useEffect }  from 'react';
import { UseUnitStore } from '../../context/Unit/UnitStore';


const UnitManagement : React.SFC = (props) => {

    const [state,action] = UseUnitStore();
    
    return(
        <>
        <button onClick={()=>{action.test(1)}}>Ekle</button>
        <ul>
            {state.units.map(unit =>{
                return (<li>{unit}</li>)
            })}
        </ul>
        </>

    )
}

export default UnitManagement;