import React from "react";
import FillBar from "./FillBar";
import Popup from "./Popup";

function GlassPopup({ open, setOpen }) {
  return (
    <Popup
      open={open}
      setOpen={setOpen}
      className="max-w-[260px] w-full bg-primary py-4 px-8 rounded-lg mx-auto"
    >
      <img
        src="images/tv/glasses.svg"
        className="mx-auto max-w-[70px] w-full mb-5"
        alt=""
      />

      <div className="space-y-2 mb-3">
        <div className="space-y-1 w-full">
          <FillBar barColor="#FF0015" bgColor="#434242" />
          <p className="text-center font-medium text-sm text-black">47/100</p>
        </div>
        <div className="space-y-1 w-full">
          <FillBar barColor="#3C58EE" bgColor="#434242" />
          <p className="text-center font-medium text-sm text-black">Level 01</p>
        </div>
      </div>

      <div className="py-1 px-3 text-center w-fit mx-auto text-xs xl:text-xs bg-black font-medium rounded">
        #708543
      </div>
    </Popup>
  );
}

export default GlassPopup;
