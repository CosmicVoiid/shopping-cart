import React, { useState, useEffect } from "react";
import "./App.css";

function Product(props) {
	const [amount, setAmount] = useState(props.oldAmount);
	const [data, setData] = useState({
		img: props.images,
		description: props.description,
		price: props.price,
		amount: props.oldAmount,
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

	const handleDelete = () => {
		props.deleteCallback(data);
	};

	useEffect(() => {
		setData({
			...data,
			amount: amount,
		});
	}, [amount]);

	useEffect(() => {
		if (props.cartPage === true) {
			props.amountChange(data);
		}
	}, [data]);

	return (
		<div className="product-container">
			<img className="product-img" src={props.images} alt={props.description} />
			<p className="product-name">{props.description}</p>
			<p className="product-price">${props.price}</p>
			<div className="counter-container">
				<div className="counter-item minus btn" onClick={decrementAmount}>
					-
				</div>
				<input
					type="number"
					className="input-num"
					value={amount}
					onChange={typeAmount}
				/>
				<div className="counter-item add btn" onClick={incrementAmount}>
					+
				</div>
			</div>
			{props.cartPage === false && (
				<button
					className="add-to-cart"
					type="button"
					onClick={handleCartCallback}
				>
					Add to Cart
				</button>
			)}
			{props.cartPage === true && (
				<button
					className="delete-from-cart"
					type="button"
					onClick={handleDelete}
				>
					Remove
				</button>
			)}
		</div>
	);
}

export default Product;
