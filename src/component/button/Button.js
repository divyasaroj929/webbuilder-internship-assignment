import React from "react";

const Button = (props) => {
  const handleHover = () => {
    console.log("Button is clickable!");
  };
  return (
    <button
      type={props.type}
      className="bg-blue-500 w-[200px] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      onMouseEnter={handleHover}
    >
      {props.name}
    </button>
  );
};

export default Button;
