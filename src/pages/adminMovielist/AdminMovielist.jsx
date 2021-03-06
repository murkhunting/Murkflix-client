import React from "react";
import "./adminMovielist.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

function adminMovielist() {
  return (
    <div className="adminmovielist">
      <Link to="/admin" className="link">
        <div className="back">
          <IoChevronBack className="icon" />
          <h3>Back to Admin</h3>
        </div>
      </Link>

      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
          <h1>ALL LISTS PANEL</h1>
        </div>
      </div>
      <div className="container">
        <div className="cover">
          <div className="title">
            <h2>SUPERMAN</h2>
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
            <h2>MEMENTO</h2>
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
            <h2>MATRIX</h2>
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
            <h2>SCARY MOVIE 3</h2>
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
            <h2>THE LEGEND OF THE DRUNK MASTER</h2>
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
            <h2>COCO</h2>
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

export default adminMovielist;
