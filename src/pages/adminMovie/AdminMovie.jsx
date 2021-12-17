import React from "react";
import "./adminMovie.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function AdminMovie() {
  const serie = false;
  return (
    <div className="adminmovie">
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
        <h1>{serie ? "Edit SERIE info" : "Edit MOVIE info"}</h1>
        <div className="cover">
          <h2>Title:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Description:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Main image:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Secondary image:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Trailer:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Video:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Year:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Age límit:</h2>
          <input type="text" placeholder="" />
        </div>
        <div className="cover">
          <h2>Genre:</h2>
          <input type="text" placeholder="" />
        </div>

        <Link to="/admin/movielist" className="link">
          <button>EDIT INFO</button>
        </Link>
      </form>
    </div>
  );
}

export default AdminMovie;
