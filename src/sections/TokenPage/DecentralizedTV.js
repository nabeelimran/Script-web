import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function DecentralizedTV() {
  const isAbove640px = useMediaQuery("(min-width: 640px)");

  return (
    <div
      className={`${
        isAbove640px ? "container-two px-12 rounded-2xl" : ""
      } flex flex-col items-center text-center py-10 xl:py-14 overflow-hidden relative z-10`}
    >
      <img src="images/tv.svg" className="w-12 sm:w-16 xl:w-36 mb-8" alt="" />

      <div className={`${isAbove640px ? "" : "container-two"}`}>
        <p
          className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-8 md:mb-10 xl:mb-14"
          style={{ lineHeight: 1.3 }}
        >
          Decentralised TV And Film For You, And Everyone With A Device
        </p>

        <p
          className="text-base sm:text-lg xl:text-2xl font-medium"
          style={{ lineHeight: 1.4 }}
        >
          Introducing SCPT – the token for the overall network and script
          blockchain and SPAY - the operational token of the Script.TV
          blockchain, used for gas, payments and rewards on and off chain
        </p>

        <img
          src="images/decentralized-tv-bg.png"
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default DecentralizedTV;
