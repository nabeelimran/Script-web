import React from "react";
import Title from "./Title";

function ChannelShowCard({ show }) {
  return (
    <div className="rounded-md overflow-hidden">
      <img
        src={show.videoThumbnailUrl}
        className="w-full block object-cover h-[200px]"
        alt=""
      />

      <div className="py-4 pb-6">
        <Title className="text-[#ffef00]" variant="16">
          {show.title}
        </Title>
      </div>
    </div>
  );
}

export default ChannelShowCard;
