import React from "react";
import { Link } from "react-router-dom";

function PageLink({ label, icon, img }) {
  return (
    <Link className="h-[32px] lg:h-[40px] w-full flex items-center px-3 rounded space-x-3 transition-all duration-300 hover:bg-primary group">
      <img
        src={`images/dashboard/${img}`}
        className="w-[16px] xl:w-[18px] flex justify-start items-center transition-all duration-300 group-hover:brightness-[0]"
        alt=""
      />
      <span className="text-xs lg:text-sm text-[#ABABAB] font-medium transition-all duration-300 group-hover:text-black">
        {label}
      </span>
    </Link>
  );
}

export default PageLink;
