import React from "react";

const Card = ({ color, title, description, clickHandler }) => {
  return (
    <div
      className={`py-4 px-5 rounded-lg flex items-center cursor-pointer bg-[${color}]`}
      style={{
        backgroundColor: color,
      }}
      onClick={clickHandler}
    >
      <div className="flex w-full justify-between">
        {/* <div className="min-w-[40px] h-[40px] rounded-full bg-white"></div> */}

        <div className="m-auto w-full">
          <p className="text-base lg:text-lg xl:text-2xl font-semibold text-primary">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-end">
          <img src="../images/blue-glasses.png" className="w-[200px]" alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Card;
