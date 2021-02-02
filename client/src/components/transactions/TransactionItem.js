import React, { useContext } from "react";

export const TransactionItem = ({ selectedTrx }) => {
	return (
		<div>
			<h1>{selectedTrx.rowIds}</h1>
			<h2>test</h2>
		</div>
	);
};

export default TransactionItem;
