import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UnitStoreProvider } from './context/Unit/UnitStore';

ReactDOM.render(
    (
        <>
            <UnitStoreProvider>
                <App/>
            </UnitStoreProvider>
        </>
    )
    , document.getElementById('root'));

