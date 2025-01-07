import { useContext, useState } from "react";
import { colorContext } from "./ColorChanger";
import { Link } from "react-router-dom";

const BgColor = () => {
  const theme = useContext(colorContext);
  const [bgColor, setBgColor] = useState(theme);
  const changeBgColor = () => {
    setBgColor(bgColor === "green" ? "red" : "green");
  };
  console.log(bgColor);
  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <h1>{`The Color is ${bgColor}`}</h1>
        <p>description</p>
        <button onClick={changeBgColor}>toggle bgColor</button>
      </div>
      <Link to="/">Back to Top</Link>
    </>
  );
};

export default BgColor;
