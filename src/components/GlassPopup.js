import React from "react";
import FillBar from "./FillBar";
import Popup from "./Popup";

function GlassPopup({ open, setOpen }) {
  return (
    <>
      {/* <Popup
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
            <p className="text-center font-medium text-sm text-black">
              Level 01
            </p>
          </div>
        </div>

        <div className="py-1 px-3 text-center w-fit mx-auto text-xs xl:text-xs bg-black font-medium rounded">
          #708543
        </div>
      </Popup> */}

      <Popup
        open={open}
        setOpen={setOpen}
        className="max-w-[360px] w-full bg-primary py-4 px-8 rounded-lg mx-auto"
      >
        {/* <img
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
            <p className="text-center font-medium text-sm text-black">
              Level 01
            </p>
          </div>
        </div>

        <div className="py-1 px-3 text-center w-fit mx-auto text-xs xl:text-xs bg-black font-medium rounded">
          #708543
        </div> */}

        <h2 className="text-center text-black mb-3">Glasses</h2>

        <div className="max-h-40 overflow-auto">
          <div className="flex border py-1 border-black mb-3 rounded w-11/12 mx-auto bg-black hover:bg-sky-700 hover:bg-gray hover:border-gray cursor-pointer">
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6 className="text-white">Hi</h6>
              <p className="text-white text-xs">Hlo</p>
            </div>
          </div>
          <div className="flex border py-1 border-black mb-3 rounded w-11/12 mx-auto bg-black hover:bg-sky-700 hover:bg-gray hover:border-gray cursor-pointer">
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6 className="text-white">Hi</h6>
              <p className="text-white text-xs">Hlo</p>
            </div>
          </div>
          <div className="flex border py-1 border-black mb-3 rounded w-11/12 mx-auto bg-black hover:bg-sky-700 hover:bg-gray hover:border-gray cursor-pointer">
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6 className="text-white">Hi</h6>
              <p className="text-white text-xs">Hlo</p>
            </div>
          </div>
          <div className="flex border py-1 border-black mb-3 rounded w-11/12 mx-auto bg-black hover:bg-sky-700 hover:bg-gray hover:border-gray cursor-pointer">
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6 className="text-white">Hi</h6>
              <p className="text-white text-xs">Hlo</p>
            </div>
          </div>
          <div className="flex border py-1 border-black mb-3 rounded w-11/12 mx-auto bg-black hover:bg-sky-700 hover:bg-gray hover:border-gray cursor-pointer">
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6 className="text-white">Hi</h6>
              <p className="text-white text-xs">Hlo</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="bg-black px-5 py-1 rounded hover:bg-gray">
            Click
          </button>
        </div>
      </Popup>
    </>
  );
}

export default GlassPopup;
