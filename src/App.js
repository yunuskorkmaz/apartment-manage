import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/app.css";
import routes from "./routes";
import MainLayout from "./layout";
import { UnitStoreProvider } from "./contexts/unit/unitContext";

function App() {
	var paths = [];
	routes.map(
		(route) =>
			route.path != "/" &&
			typeof route.path == "string" &&
			paths.push(route.path.replace("/", ""))
	);

	return (
		<HashRouter>
			<Switch>
				<PrivateRoute
					path={`/(|${paths.join("|")})`}
					component={MainLayout}
				/>
				<Route path="/login" component={() => <>login</>} />
				<Route component={() => <>404</>} />
			</Switch>
		</HashRouter>
	);
}

export default App;

