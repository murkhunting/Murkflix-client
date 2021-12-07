import React from "react";
import "./list.scss";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <MdArrowBackIos />
        <MdArrowForwardIos />
      </div>
    </div>
  );
}

export default List;
