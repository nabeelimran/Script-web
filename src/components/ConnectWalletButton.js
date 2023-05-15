import React from "react";
import LoaderGif from "../assets/Loading_icon.gif"


function ConnectWalletButton({ img, title,clickEvent,loader }) {
  return (
    <button onClick={clickEvent}  className="w-full bg-[#131313] py-5 sm:py-0 sm:h-[50px] flex flex-col sm:flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center rounded-lg px-6">
      <div className="flex flex-col sm:flex-col items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <img src={img} className="w-[26px]" alt="" />
        <p className="text-sm mt-2" style={{'margin-left': 0}}>{title}</p>
      </div>

      {/* <div className="flex items-center space-x-3">
      {loader ? (<img src={LoaderGif} alt="loader" style={{height:"16px"}}/>) : null}
        <p className="text-xs">WEB 3</p>
        <img src="images/question-sheild.svg" className="w-[12px]" alt="" />
      </div> */}
    </button>
  );
}

export default ConnectWalletButton;
