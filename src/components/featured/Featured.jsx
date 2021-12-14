import React from "react";
import "./featured.scss";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

function Featured({ type }) {
  const [random, setRandom] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjUwYjJhMzVmNDAzNzI2N2NjNmI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQ2ODQxOCwiZXhwIjoxNjM5OTAwNDE4fQ.M8Wt893QE4srmzz0whCu4FbQOefD9UHDm4FjS8mGSmk",
          },
        });
        setRandom(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "MOVIES" : "SERIES"}</span>
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
      <img src={random.img} alt="" />
      <div className="info">
        <h1 className="title">{random.title}</h1>
        <span className="desc">{random.desc}</span>
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
