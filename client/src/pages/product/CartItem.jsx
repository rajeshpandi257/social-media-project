import React, { useContext } from "react";
import { DataItem } from "../../components/productBuy/Content";

export const CartItem = (props) => {
  const { id, title, price, coverSrc } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(DataItem);

  return (
    <div className="cartItem">
      <img src={coverSrc} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
