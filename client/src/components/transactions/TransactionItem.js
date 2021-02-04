//* Dependencies
import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

//* Exported component
const TransactionItem = ({ selectedTrx }) => {
  const [currentTrx, setCurrentTrx] = useState();

  useEffect(() => {
    const findCurrentTrx = async () => {
      const res = await axios.get("/api/transactions");

      console.log("selectedTrx: " + selectedTrx);
      console.log("Data: " + res.data);

      for (let i = 0; i <= res.data.length; i++) {
        if (selectedTrx === res.data[i]._id) {
        }
        console.log("currentTrx: " + currentTrx);
      }
    };

    findCurrentTrx();
  });
  
  const handleTrx = (transaction) => {
    setCurrentTrx(transaction);
  };

  return (
    <Fragment>
      <h1>{selectedTrx.rowIds}</h1>
      <h2>test</h2>
    </Fragment>
  );
};

export default TransactionItem;
