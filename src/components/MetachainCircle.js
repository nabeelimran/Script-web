import React from "react";

function MetachainCircle() {
  return (
    <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[170px] lg:w-[200px] xl:w-[240px] h-[170px] lg:h-[200px] xl:h-[240px] bg-primary rounded-full flex items-center justify-center mx-auto z-40">
      <div className="px-6">
        <p className="text-lg lg:text-xl text-center font-bold text-black mb-2">
          Metachain
        </p>

        <p className="text-center text-xs lg:text-sm text-black mb-2">
          Customize Highly Scable blockchain for your web3 Business
        </p>

        <a
          href="/"
          className="block w-fit mx-auto text-xs lg:text-sm underline text-black font-medium"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default MetachainCircle;
