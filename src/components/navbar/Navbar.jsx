import React from "react";
import "./navbar.scss";
import images from "../../assets/images";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>MOovies</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
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
