import React from "react";
import { NavLink } from "react-router-dom";

function PageLink({ label, icon, img, link = "/", onClick }) {
  return (
    <NavLink
      onClick={onClick}
      to={link}
      end
      className={({ isActive }) =>
        `h-[32px] lg:h-[40px] w-full flex items-center px-3 rounded space-x-3 transition-all duration-300 hover:bg-primary group ${
          isActive && "pagelink-activated"
        }`
      }
    >
      <img
        src={`/images/dashboard/${img}`}
        className="pagelink-img w-[16px] xl:w-[18px] flex justify-start items-center transition-all duration-300 group-hover:brightness-[0]"
        alt=""
      />
      <span className="pagelink-text text-xs lg:text-sm text-[#ABABAB] font-medium transition-all duration-300 group-hover:text-black">
        {label}
      </span>
    </NavLink>
  );
}

export default PageLink;
