import React, { useState } from "react";

function Product(props) {
	const [amount, setAmount] = useState(0);

	return (
		<div>
			<img src={props.images} alt={props.description} />
			<p>{props.descrition}</p>
			<input type="number" />
		</div>
	);
}

export default Product;
