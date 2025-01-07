import { createContext, useState } from "react";
import BgColor from "./BgColor";

// Top of the component
export const colorContext = createContext({
  bgColor: "green",
  setBgColor: (color: string) => {},
});
export const textContext = createContext({
  text: "",
  setText: (val: string) => {},
});
const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("green");
  const [text, setText] = useState("hello");
  return (
    <>
      <colorContext.Provider value={{ bgColor, setBgColor }}>
        <textContext.Provider value={{ text, setText }}>
          <BgColor />
        </textContext.Provider>
      </colorContext.Provider>
    </>
  );
};

export default ColorChanger;
