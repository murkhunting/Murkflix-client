import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjUwYjJhMzVmNDAzNzI2N2NjNmI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQ2ODQxOCwiZXhwIjoxNjM5OTAwNDE4fQ.M8Wt893QE4srmzz0whCu4FbQOefD9UHDm4FjS8mGSmk",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured className="img" type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
