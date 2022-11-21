import { Icon } from "@iconify/react";
import React from "react";

function SocialCard({ IconComponent, title, link = "/", target = "_blank" }) {
  return (
    <a
      href={link}
      target={target}
      className="flex items-center bg-shade-darkest-blue rounded-xl h-[70px] lg:h-[80px] px-8 xl:px-11 hover:bg-shade-dark-blue-2 transition-all duration-100"
    >
      <div className="w-[3rem] lg:w-[3.6rem] xl:w-[4rem] text-2xl lg:text-3xl">
        {IconComponent && <IconComponent />}
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <p className="text-base lg:text-lg text-white font-bold">{title}</p>
          <span className="text-base lg:text-lg text-white">
            <Icon icon="ic:round-arrow-outward" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default SocialCard;
