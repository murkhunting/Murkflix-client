import React from "react";
import "./adminListnew.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function AdminListnew() {
  return (
    <div className="adminlistnew">
      <Link to="/admin" className="link">
        <div className="back">
          <IoChevronBack className="icon" />
          <h3>Back to Admin</h3>
        </div>
      </Link>
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
        </div>
      </div>
      <form className="container">
        <h1>Create a NEW LIST</h1>
        <div className="cover">
          <h2>Title of the List:</h2>
          <input type="text" placeholder="Enter the list title..." />
        </div>
        <div className="cover">
          <h2>Type of the content:</h2>
          <input type="text" placeholder="movies or series?" />
        </div>
        <div className="cover">
          <h2>Genre of the Movies/Series:</h2>
          <input type="text" placeholder="Enter the genre..." />
        </div>
        <div className="cover">
          <h2>Id's of the Movies/Series:</h2>
          <input type="text" placeholder="Enter the 10 ids..." />
        </div>

        <Link to="/admin/listlist" className="link">
          <button>CREATE</button>
        </Link>
      </form>
    </div>
  );
}

export default AdminListnew;
