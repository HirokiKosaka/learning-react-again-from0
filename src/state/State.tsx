import React, { useEffect, useState } from "react";

// stateを使用してページの背景色を切り替える実装
// 背景色は白、黒、水色の3色
// 背景色の色によって文字色も変更する
// ボタンは常に2つ存在し、背景色が白の場合はボタン名は黒、青のように背景色と同じ色に切り替えるボタンは存在しない

const State = () => {
  const [bgColor, setBgcolor] = useState<{ backgroundColor?: string }>({});
  const [textColor, setTextColor] = useState<{ color?: string }>({});
  useEffect(() => {
    switch (bgColor.backgroundColor) {
      case "black":
        setTextColor({ color: "white" });
        break;
      case "white":
        setTextColor({ color: "black" });
        break;
      case "blue":
        setTextColor({ color: "gold" });
    }
  }, [bgColor]);
  console.log(bgColor);
  const changeWhite = () => {
    setBgcolor({ backgroundColor: "white" });
  };
  const cahngeBlue = () => {
    setBgcolor({ backgroundColor: "blue" });
  };
  const cahngeBlack = () => {
    setBgcolor({ backgroundColor: "black" });
  };
  return (
    <>
      <div style={bgColor}>
        <h1 style={textColor}>Title</h1>
        <p style={textColor}>Description</p>
        <button onClick={changeWhite}>White</button>
        <button onClick={cahngeBlack}>Brack</button>
        <button onClick={cahngeBlue}>Blue</button>
      </div>
    </>
  );
};

export default State;
