import React from "react";
import "./styles.css";
import { BsCart4 } from "react-icons/bs";
import Swal from "sweetalert2";
const ListItem = ({ item: { coverSrc, title, price } }) => {
  const handleClick = () => {
    Swal.fire({
      title: "Success",
      text: "product buy successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="listItem-wrap">
      {/* <NavIcons /> */}
      <img src={coverSrc} alt="" />
      <header>
        <h4>{title}</h4>
        <p>
          <b>Rs. {price}</b>
        </p>
      </header>
      <span onClick={handleClick}>add to cart </span>
    </div>
  );
};

export default ListItem;
