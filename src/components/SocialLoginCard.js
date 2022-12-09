import React from "react";

function SocialLoginCard({ icon, title }) {
  return (
    <button className="text-center w-full max-w-[130px] bg-[#131313] rounded-xl py-4 px-4 flex flex-col items-center">
      <div className="h-[23px]">{icon}</div>
      <p className="text-sm">{title}</p>
    </button>
  );
}

export default SocialLoginCard;
