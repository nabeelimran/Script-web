import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Button";
import BlackScreen from "./BlackScreen";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import LoaderGif from "../assets/Loading_icon.gif"
import { toggleMetamaskChangeDetect } from "redux/reducers/MetamaskChangeDetect_State";
import MixPanelService from "services/mixPanelService";
import { ToastMessage } from "./ToastMessage";
import { isLogin } from "redux/reducers/login_state";
import { resetEarnedToken } from "redux/reducers/video_State";
import { useNavigate } from "react-router-dom";
import Api from "services/api";

function MetamaskChangeDetectionModal() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { isMetamaskChangeDetectModal } = useSelector(
    (state) => state.MetamaskChangeDetect_State
  );
  const navigate = useNavigate();

  // const modalRef = OutsideClickDetector(() =>
  //   dispatch(toggleMetamaskChangeDetect(false))
  // );

  const confirmLoginAction = (action) => {
    if(action) {
      const user = JSON.parse(sessionStorage.getItem("userInfo"));
      try {
        MixPanelService.setIdentifier(user?.email || "default");
        MixPanelService.track("logout");
      } catch (error) {}
      Api.logout(
        {
          email: user.email,
        },
        "dashboard"
      ).then(() => {});
      sessionStorage.clear();
      ToastMessage("Logout successfully", true);
      dispatch(resetEarnedToken(0));
      dispatch(isLogin(false));
      navigate({
        pathname: "/tv",
      });
    }
    dispatch(toggleMetamaskChangeDetect(false))
  }

  useEffect(() => {
    if (isMetamaskChangeDetectModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMetamaskChangeDetectModal]);

  return (
    <>
      <BlackScreen zIndex="1000000" show={isMetamaskChangeDetectModal} />

      <UpperRoot>
        <section
          // ref={modalRef}
          className={`max-w-[500px] fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-5 px-2 md:px-5 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isMetamaskChangeDetectModal
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
          <div className="lg:w-[80%] mx-auto">
            <div className="mb-5">
              <Title className="font-medium mb-3">Metamask Change Detect!</Title>
              <p className="text-sm">
                Wallet address has been changed. Do you want to login with current wallet ?
              </p>
              <div className="flex gap-5">
                <button
                  className="bg-primary text-black w-full rounded-xl py-2.5 mt-5"
                  disabled={loading}
                  onClick={() => confirmLoginAction(true)}
                >
                  {loading ? (<img src={LoaderGif} alt="loader" style={{height:"16px", margin: "auto"}}/>) : 'Yes'}
                </button>
                <button
                  className="bg-primary text-black w-full rounded-xl py-2.5 mt-5"
                  disabled={loading}
                  onClick={() => confirmLoginAction(false)}
                >
                  {loading ? (<img src={LoaderGif} alt="loader" style={{height:"16px", margin: "auto"}}/>) : 'No'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </UpperRoot>
    </>
  );
}

export default MetamaskChangeDetectionModal;
