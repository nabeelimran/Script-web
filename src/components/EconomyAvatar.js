import React from "react";

function EconomyAvatar({ img, className }) {
  return (
    <div
      className={`w-10 lg:w-12 xl:w-16 h-10 lg:h-12 xl:h-16 rounded-full overflow-hidden flex ${className}`}
    >
      <img
        src={img}
        className="w-full h-full rounded-full border-[3px] border-primary"
        alt=""
      />
    </div>
  );
}

export default EconomyAvatar;
