import React, { useState } from "react";
import PopupClose from "./PopupClose";

function RecaptchaPopup({ open, setOpen }) {
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
    <PopupClose
      open={open}
      glass={true}
      setOpen={setOpen}
      className="max-w-[400px] w-full bg-black text-white rounded-lg mx-auto border border-primary"
    >
      <div className="px-5 py-3 flex justify-between items-center">
        <h2 className="text-xl ">Verify Captcha</h2>
        <p className="text-2xl cursor-pointer" onClick={() => setOpen(false)}>
          x
        </p>
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
    </PopupClose>
  );
}

export default RecaptchaPopup;
