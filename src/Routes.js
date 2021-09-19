import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
