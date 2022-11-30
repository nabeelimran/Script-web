import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ChannelBox from "./ChannelBox";

function ChannelsRow({ channels, channleDetails }) {
  const [activeCard, setActiveCard] = useState("");

  return (
    <div className="grid grid-cols-[106px_1fr] gap-3 grid-rows-[106px]">
      <div className="relative bg-shade-grayis rounded-md flex items-center justify-center px-4">
        <button className="flex absolute top-2 right-2 text-lg opacity-60">
          <Icon icon="material-symbols:info-outline" />
        </button>
        <img src={channleDetails.img} className="w-full" alt="" />
      </div>

      {channels && (
        <div className="flex space-x-3 overflow-x-scroll hide-scrollbar">
          {channels.map((channel, index) => (
            <ChannelBox
              state={{ setter: setActiveCard, getter: activeCard }}
              key={index}
              title={channel.name}
              time={channel.time}
              id={channel.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ChannelsRow;
