//* Dependencies
import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

//* Exported component
const TransactionItem = ({ selectedTrx }) => {
  const [currentTrx, setCurrentTrx] = useState();

  useEffect(() => {
    const res = await axios.get("/api/transactions");

  })

  return (
    <Fragment>
      <h1>{selectedTrx.rowIds}</h1>
      <h2>test</h2>
    </Fragment>
  );
};

export default TransactionItem;
