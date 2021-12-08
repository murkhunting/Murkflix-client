import React from "react";
import { useState } from "react";
import "./listItem.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/video/118635227?h=1e03081999";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://1.bp.blogspot.com/-A68HoMwhsGM/WIyXFmQI7vI/AAAAAAAAASw/4I-DCI0O9BI0v46i6pQkWOn6yFHzO_IMQCLcB/s1600/aCyq3nI.png"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <BsFillPlayFill />
              <IoAdd />
              <AiOutlineLike />
              <AiOutlineDislike />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="lmit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
