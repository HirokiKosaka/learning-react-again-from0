import { useEffect, useState } from "react";

// stateを使用してページの背景色を切り替える実装
// 背景色は白、黒、青の3色
// 背景色の色によって文字色も変更する
// ボタンは常に2つ（初期画面のみ3つ）存在し、背景色が白の場合はボタン名は黒、青のように背景色と同じ色に切り替えるボタンは存在しない

const State = () => {
  const [bgColor, setBgcolor] = useState<{ backgroundColor?: string }>({});
  const [textColor, setTextColor] = useState<{ color?: string }>({});
  useEffect(() => {
    const colorMap: { [key: string]: string } = {
      black: "white",
      white: "black",
      blue: "gold",
    };
    setTextColor({ color: colorMap[bgColor.backgroundColor || ""] });
  }, [bgColor]);

  const changeBgColor = (color: string) => {
    setBgcolor({ backgroundColor: color });
  };

  return (
    <>
      <div style={bgColor}>
        <h1 style={textColor}>Title</h1>
        <p style={textColor}>Description</p>
        {["white", "black", "blue"].map(
          (color) =>
            bgColor.backgroundColor !== color && (
              <button key={color} onClick={() => changeBgColor(color)}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            )
        )}
      </div>
    </>
  );
};

export default State;
