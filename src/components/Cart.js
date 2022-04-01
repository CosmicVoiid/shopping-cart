import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

function Cart(props) {
	const [inCart, setInCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setInCart(props.cart);
		console.log(inCart);
	}, [props]);

	const handleDelete = async (childData) => {
		console.log(childData);
		let arrayCopy = inCart.filter(
			(info) => info.description !== childData.description
		);
		setInCart(arrayCopy);
		console.log(arrayCopy);
		props.parentCallback(arrayCopy);
	};

	useEffect(() => {
		if (inCart.length > 0) {
			let subTotals = inCart.map((info) => info.amount * info.price);
			let total = subTotals.reduce((a, b) => a + b);
			setTotalPrice(total);
		} else setTotalPrice(0);
	}, [inCart]);

	const handleAmountChange = (childData) => {
		const findObject = inCart.findIndex(
			(obj) => obj.description === childData.description
		);

		if (findObject !== -1) {
			const arrayCopy = [...inCart];
			let objCopy = { ...arrayCopy[findObject] };
			objCopy.amount = childData.amount;
			arrayCopy[findObject] = objCopy;
			setInCart(arrayCopy);
			props.parentCallback(arrayCopy);
		}
	};

	return (
		<div className="cart-container">
			<h2 className="cart-header">Cart</h2>
			{inCart.map((info) => (
				<Product
					key={info.description}
					images={info.img}
					description={info.description}
					price={info.price}
					cartPage={true}
					deleteCallback={handleDelete}
					oldAmount={info.amount}
					amountChange={handleAmountChange}
				/>
			))}
			{inCart.length !== 0 && (
				<h2 className="cart-total">Total: ${totalPrice}</h2>
			)}
			{inCart.length === 0 && (
				<div className="empty-cart-container">
					<h2>Your cart is empty!</h2>
					<Link to="/shop">
						<button className="empty-cart-btn">Browse Shop</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Cart;
