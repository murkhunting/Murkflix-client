import React from "react";
import "./watch.scss";
import { IoArrowBack } from "react-icons/io5";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <IoArrowBack />
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://vimeo.com/118635227"
      />
    </div>
  );
}

export default Watch;
