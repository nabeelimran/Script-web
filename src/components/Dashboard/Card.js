import React from "react";

const Card = ({ color, title, description, clickHandler }) => {
  console.log(color);
  return (
    <div
      className={`py-4 px-5 rounded-lg flex items-center cursor-pointer bg-[${color}]`}
      style={{
        backgroundColor: color,
      }}
      onClick={clickHandler}
    >
      <div className="flex items-start space-x-3">
        <div className="min-w-[40px] h-[40px] rounded-full bg-white"></div>

        <div className="">
          <p className="fs-16px font-medium mb-1">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
