import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar(props) {
	const [isOnShop, setIsOnShop] = useState();
	const [isOnHome, setIsOnHome] = useState();
	const [navClass, setNavClass] = useState("nav-home");

	const handleShopChange = () => {
		setIsOnHome(false);
		setIsOnShop(true);
	};

	const handleHomeChange = () => {
		setIsOnHome(true);
		setIsOnShop(false);
	};

	useEffect(() => {
		if (isOnShop === true) {
			setNavClass("nav-shop");
		}

		if (isOnHome === true) {
			setNavClass("nav-home");
		}
	}, [isOnShop, isOnHome]);

	useEffect(() => {
		if (window.location.href === "http://localhost:3000/shop") {
			setNavClass("nav-shop");
		} else if (window.location.href === "http://localhost:3000") {
			setNavClass("nav-home");
		} else if (window.location.href === "http://localhost:3000/cart") {
			setNavClass("nav-cart");
		}
	}, []);

	return (
		<nav className={navClass}>
			<h3>The Watch Tower</h3>
			<ul>
				<Link to="/">
					<li onClick={handleHomeChange}>Home</li>
				</Link>

				<Link to="/shop">
					<li onClick={handleShopChange}>Shop</li>
				</Link>

				<Link to="/cart">
					<li>Cart {props.cartItems === 0 ? "" : props.cartItems}</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
