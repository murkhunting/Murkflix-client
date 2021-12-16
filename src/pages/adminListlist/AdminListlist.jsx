import React from "react";
import "./adminListlist.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

function AdminListlist() {
  return (
    <div className="adminlistlist">
      <Link to="/admin" className="link">
        <div className="back">
          <IoChevronBack className="icon" />
          <h3>Back to Admin</h3>
        </div>
      </Link>
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
          <h1>MURKFLIX LISTS PANEL</h1>
        </div>
      </div>
      <div className="container">
        <div className="cover">
          <div className="title">
            <h2>Best Horror Movies</h2>
          </div>
          <div className="buttons">
            <Link to="/admin/list" className="link">
              <button>Edit</button>
            </Link>
            <button>
              <FaRegTrashAlt className="icon" />
            </button>
          </div>
        </div>

        <div className="cover">
          <div className="title">
            <h2>Total Action Movies</h2>
          </div>
          <div className="buttons">
            <Link to="/admin/list" className="link">
              <button>Edit</button>
            </Link>
            <button>
              <FaRegTrashAlt className="icon" />
            </button>
          </div>
        </div>
        <div className="cover">
          <div className="title">
            <h2>Cartoons for Kids</h2>
          </div>
          <div className="buttons">
            <Link to="/admin/list" className="link">
              <button>Edit</button>
            </Link>
            <button>
              <FaRegTrashAlt className="icon" />
            </button>
          </div>
        </div>
        <div className="cover">
          <div className="title">
            <h2>Anime</h2>
          </div>
          <div className="buttons">
            <Link to="/admin/list" className="link">
              <button>Edit</button>
            </Link>
            <button>
              <FaRegTrashAlt className="icon" />
            </button>
          </div>
        </div>
        <div className="cover">
          <div className="title">
            <h2>Best Comedy Movies</h2>
          </div>
          <div className="buttons">
            <Link to="/admin/list" className="link">
              <button>Edit</button>
            </Link>
            <button>
              <FaRegTrashAlt className="icon" />
            </button>
          </div>
        </div>
        <div className="cover">
          <div className="title">
            <h2>Your Selection</h2>
          </div>
          <div className="buttons">
            <Link to="/admin/list" className="link">
              <button>Edit</button>
            </Link>
            <button>
              <FaRegTrashAlt className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminListlist;
