import { createContext, useState } from "react";
import BgColor from "./BgColor";

// Top of the component
export const colorContext = createContext({
  bgColor: "green",
  setBgColor: (color: string) => {},
});
const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("green");
  return (
    <>
      <colorContext.Provider value={{ bgColor, setBgColor }}>
        <BgColor />
      </colorContext.Provider>
    </>
  );
};

export default ColorChanger;
