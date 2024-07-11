import React, { useState } from "react";
export default function MovingPic() {
  const image = "./src/assets/speed.jpg";
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [Click, setClick] = useState(false);
  const [count, setCount] = useState(0);

  const moveImage = () => {
    const imageWidth = 400;
    const imageHeight = 400;

    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;

    const newPosition = {
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    };

    setPosition(newPosition);
  };

  const handleClick = () => {
    setClick(true);
    setCount(count + 1);
    console.log("Image clicked!");
    const imageWidth = 400;
    const imageHeight = 400;

    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;

    const newPosition = {
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    };

    setPosition(newPosition);
  };

  return (
    <div>
      {Click && <h1>Gochu! {count}</h1>}
      <img
        className="img"
        src={image}
        onMouseEnter={moveImage}
        onClick={handleClick}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          transition: "top 0.3s, left 0.3s",
        }}
        alt="Profile Picture"
      />
    </div>
  );
}
