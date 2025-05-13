import { useState } from "react";

type Box = { text: "하늘" | "핑크"; backgroundColor: "skyblue" | "pink" };

const Box = () => {
  const [box, setBox] = useState<Box>({ text: "하늘", backgroundColor: "skyblue" });

  const handleClick = () => {
    setBox((prev) => {
      const text = prev.text == "하늘" ? "핑크" : "하늘";
      const backgroundColor = prev.backgroundColor == "skyblue" ? "pink" : "skyblue";
      return { text, backgroundColor };
    });
  };

  return (
    <div onClick={handleClick} style={{ backgroundColor: box.backgroundColor, width: "100px", height: "100px", textAlign: "center", fontSize: "20px" }}>
      {box.text}
    </div>
  );
};

export default Box;
