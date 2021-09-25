import React, { useState, useEffect } from "react";
import "./App.css";

function Product(props) {
	const [amount, setAmount] = useState(1);
	const [data, setData] = useState({
		img: props.images,
		description: props.description,
		price: props.price,
		amount: 0,
	});

	const decrementAmount = () => {
		if (amount > 1) setAmount(amount - 1);
	};

	const incrementAmount = () => {
		setAmount(amount + 1);
	};

	const typeAmount = (event) => {
		if (event.target.value > 0) setAmount(Number(event.target.value));
	};

	const handleCartCallback = () => {
		props.cartCallback(data);
	};

	useEffect(() => {
		console.log("testting");
		setData({
			...data,
			amount: amount,
		});
	}, [amount]);

	return (
		<div className="product-container">
			<img className="product-img" src={props.images} alt={props.description} />
			<p>{props.description}</p>
			<p>${props.price}</p>
			<div className="counter-container">
				<div className="counter-item btn" onClick={decrementAmount}>
					-
				</div>
				<input
					type="number"
					className="input-num"
					value={amount}
					onChange={typeAmount}
				/>
				<div className="counter-item btn" onClick={incrementAmount}>
					+
				</div>
			</div>
			<button type="button" onClick={handleCartCallback}>
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
