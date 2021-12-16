import React from "react";
import "./watch.scss";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(location);
  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <IoArrowBack />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src="" />
    </div>
  );
}

export default Watch;
