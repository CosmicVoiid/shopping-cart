import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import lige from "./products/lige-watch.jpeg";
import rolex from "./products/rolex.jpeg";
import omega from "./products/omega.jpeg";
import patek from "./products/patek.jpeg";
import seiko from "./products/seiko.jpeg";

function Shop(props) {
	const [imgArray] = useState([
		{ src: lige, description: "Lige", price: 10 },
		{ src: rolex, description: "Rolex", price: 20 },
		{ src: omega, description: "Omega", price: 30 },
		{ src: patek, description: "Patek", price: 40 },
		{ src: seiko, description: "Seiko", price: 50 },
	]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		props.parentCallback(cartItems);
		console.log(cartItems);
	}, [cartItems]);

	const handleCartCallback = (childData) => {
		const findObject = cartItems.findIndex(
			(obj) => obj.description === childData.description
		);
		console.log(findObject);

		if (findObject !== -1) {
			const arrayCopy = [...cartItems];
			let objCopy = { ...arrayCopy[findObject] };
			objCopy.amount += childData.amount;
			arrayCopy[findObject] = objCopy;
			setCartItems(arrayCopy);
		} else {
			setCartItems(cartItems.concat(childData));
		}
	};

	return (
		<div>
			<h1 className="title">Shop</h1>
			<div className="shop">
				{imgArray.map((info) => (
					<Product
						key={info.description}
						images={info.src}
						description={info.description}
						price={info.price}
						cartCallback={handleCartCallback}
						cartPage={false}
						oldAmount={1}
					/>
				))}
			</div>
		</div>
	);
}

export default Shop;
