import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthStoreProvider } from './context/Auth/AuthStore';

ReactDOM.render(
(
    <AuthStoreProvider>
            <App />
    </AuthStoreProvider>
)
, document.getElementById('root'));

serviceWorker.unregister();
