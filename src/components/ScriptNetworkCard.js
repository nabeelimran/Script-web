import React from "react";

function ScriptNetworkCard({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-3 rounded-lg pt-3 px-4 pb-10 w-full">
        <p className="text-center text-base lg:text-lg xl:text-2xl font-bold text-white">
          {title}
        </p>
      </div>
      <div className="-mt-6 bg-primary text-base xl:text-xl text-black py-2 px-3 w-[80%] rounded-lg text-center font-bold">
        {subtitle}
      </div>
    </div>
  );
}

export default ScriptNetworkCard;
