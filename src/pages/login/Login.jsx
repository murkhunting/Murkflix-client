import React from "react";
import "./login.scss";
import images from "../../assets/images";

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Login to MURKFLIX</h1>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button className="loginbutton">LOGIN</button>
          <span>
            New to Murkflix? <b>Click here to Sign up now!</b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
