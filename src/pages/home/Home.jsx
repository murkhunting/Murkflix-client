import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
// import foto from "../assets/img/portatil-libreta-vasos-mesa_23-2148036976.jpg";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <img src={foto} alt="" /> */}
      <Featured className="img" type="movie" />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
