import { Icon } from "@iconify/react";
import React from "react";

const ChannelBox = ({ title, time, id, state }) => {
  const isActive = state.getter === id ? true : false;

  return (
    <div
      onClick={() => state.setter(id)}
      className={`cursor-pointer flex items-center px-10 bg-shade-grayis h-full rounded-md min-w-fit relative z-10 ${
        isActive ? "sticky left-0 right-0 z-50" : ""
      }`}
    >
      <div className="max-w-[200px] space-y-[2px] z-50">
        <p className="text-base font-medium two-lines-only">{title}</p>

        {time && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">{time}</p>
            <button className="flex text-base opacity-80">
              <Icon icon="material-symbols:info-outline" />
            </button>
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full rounded-md border-2 z-10 transition-all duration-200 ${
          isActive ? "border-primary" : "border-transparent"
        }`}
      ></div>
    </div>
  );
};
export default ChannelBox;
