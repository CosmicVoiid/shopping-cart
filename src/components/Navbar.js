import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
	const [isOnShop, setIsOnShop] = useState(false);
	const [isOnHome, setIsOnHome] = useState(true);
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

				<li>Cart</li>
			</ul>
		</nav>
	);
}

export default Navbar;
