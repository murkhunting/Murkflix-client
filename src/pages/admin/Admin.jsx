import React from "react";
import "./admin.scss";
import images from "../../assets/images";
import { BsPlayCircle } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BrowserRouter, Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
          <h1>MURKFLIX ADMIN PANEL</h1>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
          <Link to="/admin/movielist" className="link">
            <div className="cover">
              <BsPlayCircle className="icon" />
              <h2>ALL MOVIES</h2>
            </div>
          </Link>
          <Link to="/admin/movienew" className="link">
            <button>CREATE NEW MOVIE</button>
          </Link>
          <Link to="/admin/listlist" className="link">
            <div className="cover">
              <BsCardList className="icon" />
              <h2>ALL LISTS</h2>
            </div>
          </Link>
          <Link to="/admin/listnew" className="link">
            <button>CREATE NEW LIST</button>
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Admin;
