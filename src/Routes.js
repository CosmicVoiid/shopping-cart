import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Navbar from "./components/Navbar";

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
