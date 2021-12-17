import React from "react";
import "./adminMovienew.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function AdminMovienew() {
  return (
    <div className="adminmovienew">
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
        <h1>Create a NEW MOVIE</h1>
        <div className="cover">
          <h2>Title of the Movie:</h2>
          <input type="text" placeholder="Enter the list title..." />
        </div>
        <div className="cover">
          <h2>Description of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the description..." />
        </div>
        <div className="cover">
          <h2>Main image of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the url..." />
        </div>
        <div className="cover">
          <h2>Secondary image of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the url..." />
        </div>
        <div className="cover">
          <h2>Trailer of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the url..." />
        </div>
        <div className="cover">
          <h2>Video of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the url..." />
        </div>
        <div className="cover">
          <h2>Year of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the year..." />
        </div>
        <div className="cover">
          <h2>Age límit of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the age limit..." />
        </div>
        <div className="cover">
          <h2>Genre of the Movie/Serie:</h2>
          <input type="text" placeholder="Enter the genre..." />
        </div>
        <div className="cover">
          <h2>Is a Serie or a Movie?</h2>
          <input type="text" placeholder="Serie or Movie..." />
        </div>

        <Link to="/admin/listlist" className="link">
          <button>CREATE</button>
        </Link>
      </form>
    </div>
  );
}

export default AdminMovienew;
