import React from "react";

function EconomyAvatar({ img, className }) {
  return (
    <div className={`w-16 h-16 rounded-full overflow-hidden flex ${className}`}>
      <img
        src={img}
        className="w-full h-full rounded-full border-[3px] border-primary"
        alt=""
      />
    </div>
  );
}

export default EconomyAvatar;
