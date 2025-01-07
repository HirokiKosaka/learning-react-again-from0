import { useContext } from "react";
import { colorContext, textContext } from "./ColorChanger";
import { Link } from "react-router-dom";

const BgColor = () => {
  const { bgColor, setBgColor } = useContext(colorContext);
  const { text, setText } = useContext(textContext);
  const changeBgColor = () => {
    setBgColor(bgColor === "green" ? "red" : "green");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  console.log(text);
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
        }}
      >
        <h1>{`The Color is ${bgColor}`}</h1>
        <p>description</p>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={changeBgColor}>toggle bgColor</button>
      </div>
      <Link to="/">Back to Top</Link>
    </>
  );
};

export default BgColor;
