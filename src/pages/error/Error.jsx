import React from "react";
import "./error.scss";
import images from "../../assets/images";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <div className="wrapper">
        <img className="logo" src={images.logo1} alt="" />
        <h1>ERROR 404 PAGE NOT FOUND</h1>
        <Link to="/" className="link">
          <div className="back">
            <IoChevronBack className="icon" />
            <h1>Go back to MURKFLIX</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Error;
