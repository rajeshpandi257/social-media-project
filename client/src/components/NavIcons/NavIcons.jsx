import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthActions";
// import { UilLock } from "@iconscout/react-unicons";
import { UilLockAlt } from "@iconscout/react-unicons";
import { BsCart4 } from "react-icons/bs";
import "./navicon.css";
const NavIcons = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      {/* <UilSetting /> */}
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
      <Link to="../delevery" className="s">
        <BsCart4 />

        {/* <BsCart2 /> */}
      </Link>
      {/* <img src={Noti} alt=""  /> */}
      <div className="icon">
        <UilLockAlt onClick={handleLogOut} />
      </div>
    </div>
  );
};

export default NavIcons;
