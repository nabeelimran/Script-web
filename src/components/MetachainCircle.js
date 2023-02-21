import React from "react";

function MetachainCircle() {
  return (
    <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[200px] xl:w-[240px] h-[200px] xl:h-[240px] bg-primary rounded-full flex items-center justify-center mx-auto z-40">
      <div className="px-6">
        <p className="text-base xl:text-xl text-center font-bold text-black mb-2">
          Script Network
        </p>

        <p className="text-center text-xs xl:text-sm text-black mb-2">
          A scalable blockchain for web2 and web3 content partners, businesses
          and contributors
        </p>

        <a
          href="/"
          className="block w-fit mx-auto text-xs xl:text-sm underline text-black font-medium"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default MetachainCircle;
