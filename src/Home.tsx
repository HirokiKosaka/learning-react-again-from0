import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <Link to="/state">BgColorChanger Using useState</Link>
    </div>
  );
};

export default Home;
