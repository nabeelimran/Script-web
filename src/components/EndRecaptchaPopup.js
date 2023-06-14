import React, { useState } from "react";
import Api from "services/api";
import { helper } from "utils/helper";
import PopupClose from "./PopupClose";
import { ToastMessage } from "./ToastMessage";
import LoaderGif from "../assets/Loading_icon.gif"

function EndRecaptchaPopup({ open, setOpen, selectedGlass, user }) {
  const [active, setActive] = useState(1);
  const [loader, setLoader] = useState(false);

  const endSession = () => {
    setLoader(true);
    if(selectedGlass && selectedGlass.sessionId) {
      const req = {
        glassId: selectedGlass.glassId,
        userId: user.userId,
        sessionId: selectedGlass?.sessionId
      }
  
      Api.endSession(req, 'watch').then((res) => {
        if(res && res.status === 200) {
          ToastMessage('Session has been ended successfully', true);
          setOpen(false)
          setLoader(false);
        } else {
          ToastMessage(res?.data?.message || 'Unable to close session');
          setLoader(false);
        }
      })
    } else {
      ToastMessage('Unable to close the session');
      setLoader(false);
    }
  }

  return (
    <PopupClose
      open={open}
      glass={true}
      setOpen={setOpen}
      className="max-w-[400px] w-full bg-black text-white rounded-lg mx-auto border border-primary"
    >
      <div className="px-5 py-3 flex justify-between items-center">
        <h2 className="text-xl ">End Session</h2>
        <p className="text-2xl cursor-pointer" onClick={() => setOpen(false)}>
          x
        </p>
      </div>

      <div className="flex flex-col py-5 px-5">
        <label htmlFor="captchaCode" className="mb-2 ml-1">
          Are you sure? Do you want to close session
        </label>
        <button
          className="bg-primary text-black w-full rounded-xl py-2.5 mt-5"
          onClick={() => endSession()}
          disabled={loader}
        >
          {loader ? (<img src={LoaderGif} alt="loader" style={{height:"16px", margin: "auto"}}/>) : 'Confirm'}
        </button>
      </div>
    </PopupClose>
  );
}

export default EndRecaptchaPopup;
