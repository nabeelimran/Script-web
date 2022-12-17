import { Icon } from "@iconify/react";
import React from "react";

const ChannelBox = ({ title, time, id, state, onClick, data }) => {
  // const isActive = state.getter === id ? true : false;

  const click = () => {
    // state.setter(id)
    onClick();
  };
  const getWidth=()=>{
    return (data.duration/30)*160}
  const getWidthmd=()=>{
    return 'md:min-w-['+Math.ceil((data.duration/30)*160)+'px]';
  }


  return (
    <div
      onClick={click}
      className={`cursor-pointer flex items-center px-4 md:px-10 bg-shade-grayis h-full rounded-md  relative z-10  ${getWidth()} ${getWidthmd()}  ${
        data.selected ? "md:sticky left-0 right-0 z-50" : ""
      } `}
      style={{
        minWidth:getWidth()+'px'
      }}
    >
      <div className="max-w-[200px] space-y-[2px] z-50">
        <p className="text-xs md:text-base font-medium two-lines-only">
          {title}
        </p>

        {time && (
          <div className="flex items-center space-x-2">
            <p className="text-xs md:text-sm font-medium">{time}</p>
            <button className="flex text-base opacity-80">
              <Icon icon="material-symbols:info-outline" />
            </button>
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full rounded-md border-2 z-10 transition-all duration-200 ${
          data.selected ? "border-primary" : "border-transparent"
        }`}
      ></div>
    </div>
  
  );
};
export default ChannelBox;
