import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
		if (window.location.href === "http://cosmicvoiid.github.io/shop") {
			setNavClass("nav-shop");
		} else if (
			window.location.href === "http://cosmicvoiid.github.io/shopping-cart"
		) {
			setNavClass("nav-home");
		} else if (window.location.href === "http://cosmicvoiid.github.io/cart") {
			setNavClass("nav-cart");
		}
	}, []);

	return (
		<nav className={navClass}>
			<h3 className="watch-tower-header">The Watch Tower</h3>
			<ul>
				<Link to="/">
					<li className="nav-li nav-li-home" onClick={handleHomeChange}>
						Home
					</li>
				</Link>

				<Link to="/shop">
					<li className="nav-li nav-li-shop" onClick={handleShopChange}>
						Shop
					</li>
				</Link>

				<Link to="/cart" className="cart-nav-container">
					<li className="nav-li nav-li-cart">Cart</li>
					<div className="icon-container">
						<FontAwesomeIcon
							className="cart-icon"
							icon="fa-solid fa-cart-shopping"
						/>
						<p className="cart-number">
							{props.cartItems === 0 ? "" : props.cartItems}
						</p>
					</div>
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
