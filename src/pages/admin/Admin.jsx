import React from "react";
import "./admin.scss";
import images from "../../assets/images";

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
        <h2>EDIT ALL MOVIES</h2>
        <button className="loginbutton">CREATE NEW MOVIE</button>
        <h2>EDIT ALL LISTS</h2>
        <button className="loginbutton">CREATE NEW LIST</button>
      </div>
    </div>
  );
}

export default Admin;
