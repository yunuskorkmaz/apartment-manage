import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import  { PrivateRoute } from './helpers/PrivateRoute'
import routes from './routes'
// Styles
import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/icons/css/coreui-icons.min.css';
import "simple-line-icons/css/simple-line-icons.css";
//

import DefaultLayout from './containers/DefaultLayout/DefaultLayout';


function App() {

  var paths = [];
  routes.map(a => a.path != '/' ? paths.push(a.path.replace('/', '')) : null)
  return (
    <HashRouter>
      <PrivateRoute exact path={`/(|${paths.join('|')})`} component={DefaultLayout} />
      <Route path="/login" component={() => <div>Login</div>} />
    </HashRouter>
  );
}

export default App;
