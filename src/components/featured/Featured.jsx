import React from "react";
import "./featured.scss";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "MOVIES" : "SERIES"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://i.blogs.es/8b8798/06-06-matrix/1366_2000.jpg" alt="" />
      <div className="info">
        <h1 className="title">TÍTULO</h1>
        <span className="desc">
          Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className="buttons">
          <button className="play">
            <BsPlayCircle />
            <span>Play</span>
          </button>
          <button className="more">
            <AiOutlineInfoCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
