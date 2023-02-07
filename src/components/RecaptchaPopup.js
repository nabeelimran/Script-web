import React, { useState } from "react";
import Api from "services/api";
import { helper } from "utils/helper";
import PopupClose from "./PopupClose";
import { ToastMessage } from "./ToastMessage";
import LoaderGif from "../assets/Loading_icon.gif"

function RecaptchaPopup({ open, setOpen, recaptchaCode, selectedGlass, user }) {
  const [active, setActive] = useState(1);
  const [loader, setLoader] = useState(false);

  const changeActiveState = (id) => {
    setActive(id);
  };

  const verifyCaptcha = () => {
    const enteredCode = document.getElementById('captchaCode').value
    setLoader(true);
    if(!enteredCode) {
      ToastMessage('Please enter captcha code');
      setLoader(false);
      return;
    }
    if(recaptchaCode !== enteredCode) {
      ToastMessage('Invalid captcha code. Please enter valid code');
      setLoader(false);
      return;
    }

    if(!user?.userId) {
      ToastMessage('Unable to start session. User detail is missing');
      setLoader(false);
      return;
    }

    if(!selectedGlass?.glassId) {
      ToastMessage('Unable to start session. Please select glass first');
      setLoader(false);
      return;
    }

    const req = {
      glassId: selectedGlass.glassId,
      userId: user.userId,
      sessionId: enteredCode
    }

    Api.startSession(req, 'watch').then((res) => {
      if(res && res.status === 200) {
        ToastMessage('Captcha code verified successfully. Session has been started', true);
        setLoader(false);
        setOpen(false)
      } else {
        ToastMessage(res?.data?.message || 'Unable to start session', true);
        setLoader(false);
      }
    })
  }

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
          disabled={loader}
          onClick={() => verifyCaptcha()}
        >
          {loader ? (<img src={LoaderGif} alt="loader" style={{height:"16px", margin: "auto"}}/>) : 'Verify'}
        </button>
      </div>
    </PopupClose>
  );
}

export default RecaptchaPopup;
