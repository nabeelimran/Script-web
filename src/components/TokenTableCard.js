import React from "react";

function TokenTableCard({ texts = ["", "", ""] }) {
  return (
    <div className="bg-primary rounded-lg px-5 py-4 xl:py-5 grid grid-cols-[1fr_auto] sm:flex items-center justify-between relative">
      {/*  */}
      <div className="sm:absolute top-1/2 sm:-translate-y-1/2 left-1/2 sm:-translate-x-1/2 col-span-2 text-center pb-3 sm:pb-0">
        <p className="text-sm md:text-base xl:text-xl font-semibold text-darkGray">
          {texts[1]}
        </p>
      </div>

      <p className="text-sm md:text-base xl:text-xl font-semibold text-darkGray">
        {texts[0]}
      </p>

      <p className="text-sm md:text-base xl:text-xl font-semibold text-darkGray">
        {texts[2]}
      </p>
    </div>
  );
}

export default TokenTableCard;
