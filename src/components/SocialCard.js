import { Icon } from "@iconify/react";
import React from "react";

function SocialCard({ IconComponent, title, link = "/", target = "_blank" }) {
  return (
    <a
      href={link}
      target={target}
      className="flex items-center bg-shade-darkest-blue rounded-xl h-[106px] px-11 space-x-6"
    >
      <div className="flex-[0.4] text-5xl">
        {IconComponent && <IconComponent />}
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <p className="text-2xl text-white font-bold">{title}</p>
          <span className="text-2xl text-white">
            <Icon icon="ic:round-arrow-outward" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default SocialCard;
