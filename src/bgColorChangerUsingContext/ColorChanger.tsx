import { createContext } from "react";
import BgColor from "./BgColor";

// Top of the component
export const colorContext = createContext("green");
const ColorChanger = () => {
  return (
    <>
      <colorContext.Provider value="green">
        <BgColor />
      </colorContext.Provider>
    </>
  );
};

export default ColorChanger;
