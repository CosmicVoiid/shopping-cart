import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "./App.js";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

const Routes = () => {
	const [totalItems, setTotalItems] = useState(0);
	const [totalCartItems, setTotalCartItems] = useState([]);

	const totalCartCallback = (childData) => {
		let amountArray = childData.map((data) => data.amount);
		let cartTotalItems = amountArray.reduce(
			(total, amount) => total + amount,
			0
		);
		console.log(`Total Items: ${totalItems}`);
		setTotalItems(cartTotalItems);
	};

	// const totalCartCallback = (childData) => {
	// 	let amountArray = childData.map((data) => data.amount);
	// 	let cartTotalItems = amountArray.reduce(
	// 		(total, amount) => total + amount,
	// 		0
	// 	);
	// 	console.log(totalItems);

	// };

	// const totalCartCallback = (childData) => {
	// 	setTotalCartItems(totalCartItems.concat(childData));
	// };

	// useEffect(() => {
	// 	console.log(totalCartItems);
	// }, [totalCartItems]);

	return (
		<BrowserRouter>
			<Navbar cartItems={totalItems} />
			<Switch>
				<Route exact path="/" component={App} />
				<Route
					exact
					path="/shop"
					component={(props) => (
						<Shop parentCallback={totalCartCallback} {...props} />
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
