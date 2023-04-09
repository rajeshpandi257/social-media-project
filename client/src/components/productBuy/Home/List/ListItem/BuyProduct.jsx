import React, { useState } from "react";
import ListItem from "./index";

const BuyProduct = (onBuy) => {
  const [purchased, setPurchased] = useState(false);

  const handleBuy = () => {
    // your purchasing process logic here
    setPurchased(true);
  };

  return (
    <div>
      {purchased ? (
        <p>Thank you for your purchase!</p>
      ) : (
        <ListItem name="Example Product" price="$9.99" onBuy={handleBuy} />
      )}
    </div>
  );
};

export default BuyProduct;
