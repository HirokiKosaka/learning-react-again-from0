import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Hello React</h1>
      <Link to="/state">BgColorChanger Using useState</Link>
      <Link to="/context">BgColorChanger Using useContext</Link>
    </div>
  );
};

export default Home;
