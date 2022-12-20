import React, { useState } from "react";
import FillBar from "./FillBar";
import Popup from "./Popup";

function GlassPopup({ open, setOpen }) {
  const [active, setActive] = useState(1);

  const changeActiveState = (id) => {
    setActive(id);
  };

  const returnClasses = (id) => {
    if (id === active) {
      return "active-class";
    } else {
      return "";
    }
  };

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

      {/* <Popup
        open={open}
        glass={true}
        setOpen={setOpen}
        className="max-w-[400px] w-full bg-black text-white py-5 px-8 rounded-lg mx-auto border border-primary"
      >
        <h2 className="text-center mb-3">Glasses</h2>
        <div className="max-h-48 overflow-auto">
          <div
            className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(
              1
            )}`}
            onClick={() => changeActiveState(1)}
          >
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6>Hi</h6>
              <p className="text-xs">Hlo</p>
            </div>
          </div>

          <div
            className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(
              2
            )}`}
            onClick={() => changeActiveState(2)}
          >
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6>Hi</h6>
              <p className="text-xs">Hlo</p>
            </div>
          </div>

          <div
            className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(
              3
            )}`}
            onClick={() => changeActiveState(3)}
          >
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6>Hi</h6>
              <p className="text-xs">Hlo</p>
            </div>
          </div>

          <div
            className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(
              4
            )}`}
            onClick={() => changeActiveState(4)}
          >
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6>Hi</h6>
              <p className="text-xs">Hlo</p>
            </div>
          </div>

          <div
            className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(
              5
            )}`}
            onClick={() => changeActiveState(5)}
          >
            <img src="images/tv/glasses.svg" alt="" className="mx-4" />
            <div>
              <h6>Hi</h6>
              <p className="text-xs">Hlo</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            className="px-5 py-1 rounded bg-[#131313]"
            onClick={() => setOpen(false)}
          >
            Continue
          </button>
        </div>
      </Popup> */}

      <Popup
        open={open}
        glass={true}
        setOpen={setOpen}
        className="max-w-[400px] w-full bg-black text-white rounded-lg mx-auto border border-primary"
      >
        <div className="px-5 py-3 flex justify-between items-center">
          <h2 className="text-xl ">Verify Captcha</h2>
          <p className="text-2xl">x</p>
        </div>

        <div className="flex flex-col py-5 px-5">
          <label htmlFor="captchaCode" className="mb-2 ml-1">
            Enter Captcha Code
          </label>
          <input
            type="text"
            name=""
            id="captchaCode"
            placeholder="Enter Captcha Code"
            className="rounded py-1.5 px-3 bg-[#131313] outline-none"
          />
          <button
            className="bg-primary text-black w-full rounded-xl py-2.5 mt-5"
            onClick={() => setOpen(false)}
          >
            Verify
          </button>
        </div>
      </Popup>
    </>
  );
}

export default GlassPopup;
