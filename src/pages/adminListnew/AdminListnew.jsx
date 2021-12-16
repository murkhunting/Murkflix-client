import React from "react";
import "./adminListnew.scss";
// import images from "../../assets/images";
import { Link } from "react-router-dom";
// import { FaRegTrashAlt } from "react-icons/fa";
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
    </div>
  );
}

export default AdminListnew;
