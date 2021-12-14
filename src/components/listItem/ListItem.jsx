import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import "./listItem.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjUwYjJhMzVmNDAzNzI2N2NjNmI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQ2ODQxOCwiZXhwIjoxNjM5OTAwNDE4fQ.M8Wt893QE4srmzz0whCu4FbQOefD9UHDm4FjS8mGSmk",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <ReactPlayer
              url={movie.trailer}
              width="100%"
              height="150px"
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
              playing={true}
            />
            <div className="itemInfo">
              <div className="icons">
                <BsFillPlayFill className="icon" />
                <IoAdd className="icon" />
                <AiOutlineLike className="icon" />
                <AiOutlineDislike className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.description}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
