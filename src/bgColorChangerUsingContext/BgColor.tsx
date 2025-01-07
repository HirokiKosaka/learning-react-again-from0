import { useContext } from "react";
import { colorContext } from "./ColorChanger";
import { Link } from "react-router-dom";

const BgColor = () => {
  const { bgColor, setBgColor } = useContext(colorContext);
  const changeBgColor = () => {
    setBgColor(bgColor === "green" ? "red" : "green");
  };
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
