import React from "react";
import "./navbar.scss";
import images from "../../assets/images";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
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
          <div className="profile">
            <MdArrowDropDown className="icon" />
            <div className="options">
              <span>SETTINGS</span>
              <span>LOGOUT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
