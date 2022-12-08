import React from "react";

function ConnectWalletButton({ img, title }) {
  return (
    <button className="w-full bg-[#131313] py-5 sm:py-0 sm:h-[60px] xl:h-[70px] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-between rounded-lg px-6 xl:px-7">
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <img src={img} className="w-[30px] xl:w-[36px]" alt="" />

        <p className="text-sm xl:text-base">{title}</p>
      </div>

      <div className="flex items-center space-x-3">
        <p className="text-xs xl:text-sm">WEB 3</p>
        <img
          src="images/question-sheild.svg"
          className="w-[12px] xl:w-[14px]"
          alt=""
        />
      </div>
    </button>
  );
}

export default ConnectWalletButton;
