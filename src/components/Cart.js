import React, { useState, useEffect } from "react";
import Product from "./Product";

function Cart(props) {
	const [inCart, setInCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setInCart(props.cart);
		console.log(inCart);
	}, [props]);

	const handleDelete = (childData) => {
		let arrayCopy = inCart.filter(
			(info) => info.description !== childData.description
		);
		setInCart(arrayCopy);
		console.log("switchero");
	};

	useEffect(() => {
		if (inCart.length > 0) {
			let subTotals = inCart.map((info) => info.amount * info.price);
			let total = subTotals.reduce((a, b) => a + b);
			setTotalPrice(total);
		}
	}, [inCart]);

	return (
		<div>
			<h2>Cart</h2>
			{inCart.map((info) => (
				<Product
					key={info.description}
					images={info.img}
					description={info.description}
					price={info.price}
					cartPage={true}
					deleteCallback={handleDelete}
					oldAmount={info.amount}
				/>
			))}
			<h2>Total: ${totalPrice}</h2>
		</div>
	);
}

export default Cart;
