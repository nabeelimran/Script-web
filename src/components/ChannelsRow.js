import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ChannelBox from "./ChannelBox";

function ChannelsRow({ channels, channleDetails,changeVideo }) {
  const [activeCard, setActiveCard] = useState("");
  const [currenChannels, setCurrentChannels] = useState(channels);

  const selector = (show) => {
    // const newArr = currenChannels.map((item) =>
    //   item.id === id
    //     ? { ...item, selected: item.selected ? false : true }
    //     : { ...item, selected: false }
    // );

    // setCurrentChannels(newArr);
    changeVideo(show);
  };

  return (
    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[106px_1fr] gap-3 grid-rows-[80px] md:grid-rows-[106px]">
      <div className="relative bg-shade-grayis rounded-md flex items-center justify-center px-4">
        <button className="flex absolute top-2 right-2 text-lg opacity-60">
          <Icon icon="material-symbols:info-outline" />
        </button>
        <img src={channleDetails.channelImageLink} className="w-full" alt="" />
      </div>

      {currenChannels && (
        <div className="flex space-x-3 overflow-x-scroll hide-scrollbar">
          {currenChannels.map((channel, index) => (
            <ChannelBox
              onClick={() => selector(channel)}
              state={{ setter: setActiveCard, getter: activeCard }}
              key={index}
              title={channel.title}
              time={channel.time}
              id={channel.id}
              data={channel}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ChannelsRow;
