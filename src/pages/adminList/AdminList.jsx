import React from "react";
import "./adminList.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function AdminList() {
  return (
    <div className="adminlist">
      <Link to="/admin" className="link">
        <div className="back">
          <IoChevronBack className="icon" />
          <h3>Back</h3>
        </div>
      </Link>
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
        </div>
      </div>
      <form className="container">
        <h1>Edit LIST info</h1>
        <div className="cover">
          <h2>Title of the List:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Type of the content:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Genre of the Movies/Series:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Id's of the Movies/Series:</h2>
          <input type="text" placeholder="" />
        </div>

        <Link to="/admin/listlist" className="link">
          <button>EDIT INFO</button>
        </Link>
      </form>
    </div>
  );
}

export default AdminList;
