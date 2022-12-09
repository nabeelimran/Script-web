import React from "react";

function SocialLoginCard({ icon, title }) {
  return (
    <button className="text-center w-full max-w-[152px] bg-[#131313] rounded-xl py-4 px-4 flex flex-col items-center">
      <div className="h-[26px]">{icon}</div>
      <p className="text-sm xl:text-base">{title}</p>
    </button>
  );
}

export default SocialLoginCard;
