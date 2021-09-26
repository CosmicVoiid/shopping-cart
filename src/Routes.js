import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "./App.js";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const Routes = () => {
	const [totalItems, setTotalItems] = useState(0);
	const [totalCartItems, setTotalCartItems] = useState([]);

	const totalCartCallback = (childData) => {
		setTotalCartItems(childData);
	};

	useEffect(() => {
		if (totalCartItems.length !== 0) {
			let amountArray = totalCartItems.map((data) => data.amount);
			let cartTotalItems = amountArray.reduce(
				(total, amount) => total + amount,
				0
			);
			setTotalItems(cartTotalItems);
		}
		console.log({ totalCartItems });
	}, [totalCartItems]);

	return (
		<BrowserRouter>
			<Navbar cartItems={totalItems} />
			<Switch>
				<Route
					exact
					path="/shop"
					render={(props) => (
						<Shop {...props} parentCallback={totalCartCallback} />
					)}
				/>
				<Route
					exact
					path="/cart"
					render={(props) => <Cart {...props} cart={totalCartItems} />}
				/>
				<Route path="/" component={App} />
			</Switch>
		</BrowserRouter>
	);
};
//parentCallback={totalCartCallback} {...props}
export default Routes;
