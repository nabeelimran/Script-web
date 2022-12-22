import React from "react";

function SocialLoginCard({ icon, title,click }) {
  return (
    <button className="text-center w-full max-w-[130px] bg-[#131313] rounded-xl py-4 px-4 flex flex-col items-center" onClick={()=>click()}>
      <div className="h-[23px]">{icon}</div>
      <p className="text-sm">{title}</p>
    </button>
  );
}

export default SocialLoginCard;
