import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './containers/BaseLayout';
import PrivateRoute from './helpers/PrivateRoute';
import routes from './routes'

const App: React.FC = () => {

  var paths: any[] = [];
  routes.map(route => route.path != '/' && typeof route.path == 'string' && paths.push(route.path.replace('/', '')))
  return (
    <>
      <HashRouter>
        <Switch>
          <PrivateRoute path={`/(|${paths.join('|')})`} component={BaseLayout} />
          <Route path="/login" component={() => (<>login</>)} />
          <Route component={() => (<>404</>)} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
