import React from "react";
import "./navbar.scss";
import images from "../../assets/images";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={images.logo1} alt="" />
          <span>HOME</span>
          <span>SERIES</span>
          <span>MOVIES</span>
          <span>NEW & POPULAR</span>
          <span>MY LIST</span>
        </div>
        <div className="right">
          <BsSearch className="icon" />
          <span>KID</span>
          <IoIosNotifications className="icon" />
          <img src={images.profile} alt="" />
          <MdArrowDropDown className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
