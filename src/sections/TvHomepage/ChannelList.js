import React from "react";
import { useNavigate } from "react-router-dom";

function ChannelList({ channels }) {

  const navigate = useNavigate();

  const viewChannelDetail = (channelId) => {
    navigate({
      pathname: "/channel-detail",
      search: `?channelId=${channelId}`,
    });
  }
  

  return (
    <div className="flex flex-wrap">
      {channels && channels.length > 0
        ? channels.map((channel, index) => (
            // <div
            //   className="bg-shade-grayis rounded-2xl py-6 px-8 h-auto w-1/5 mr-5 ml-0 mb-5"
            //   key={index}
            // >
            <div
              className="bg-shade-grayis rounded-2xl mr-5 mb-5 w-1/5 h-[150px] flex justify-center items-center"
              key={index}
              onClick={() => viewChannelDetail(channel.id)}
            >
              <div className="w-[70%]">
                <img src={channel?.image || channel?.channelImageLink} alt="" className="w-full h-auto" />
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ChannelList;
