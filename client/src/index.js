import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthStoreProvider } from './context/Auth/AuthStore';
import {UnitStoreProvider} from "./context/Unit/UnitStore";

ReactDOM.render(
(
    <AuthStoreProvider>
        <UnitStoreProvider>
            <App />
        </UnitStoreProvider>
    </AuthStoreProvider>
)
, document.getElementById('root'));

serviceWorker.unregister();
