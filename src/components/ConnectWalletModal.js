import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  toggleEmailModalVisibility,
  toggleModalVisibility,
} from "redux/reducers/connectWalletModal_State";
import { metamaskCred } from "redux/reducers/metamask_state";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import MetamaskService from "services/metamask";
import { ToastMessage } from "./ToastMessage";
import Api from "services/api";

function ConnectWalletModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const modalRef = OutsideClickDetector(() =>
    dispatch(toggleModalVisibility(false))
  );

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalVisible]);

  const metaMaskHandler = async () => {
    if (!window.ethereum) {
      ToastMessage("Install Metamask");
      return false;
    }
    const accAddres = await MetamaskService.connectHandler();

    if (accAddres) {
      dispatch(metamaskCred(accAddres));
      const isUser = await Api.getUserDetailsByWalletAddress(
        accAddres,
        "login-modal"
      );
      if (!isUser.data.isSuccess) {
        dispatch(toggleModalVisibility(false));
        dispatch(toggleEmailModalVisibility(true));
      }

      if (isUser.data.data.userExist) {
        const resObj = {
          browser: "dummyData",
          country: "dummayData",
          device: "Web",
          loginIp: "dummyData",
          loginLocation: "dummmyData",
          email: "",
          userName: "",
          password: "",
          walletAddress: accAddres,
          walletSignature: "",
          otherReferralCode: "",
        };

        const loginW = await Api.walletLogin(resObj, "");

        if (loginW && loginW.status === 200 && loginW.data.isSuccess) {
          ToastMessage(`${loginW.data.message}`, true);
          dispatch(toggleModalVisibility(false));
          if (loginW.data.message === "Please verify your account.") {
            navigate({
              pathname: "/verify-account",
              search: `?email=${loginW.data.data.email}`,
            });
          } else {
            if (loginW.data.data.authToken) {
              sessionStorage.setItem(
                "script-token",
                JSON.stringify(loginW.data.data.authToken)
              );
            }

            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({
                email: loginW.data.data.email,
                userId: loginW.data.data.id,
                walletAddress: loginW.data.data.walletAddress,
              })
            );
            navigate({
              pathname: "/tv",
            });
          }
        } else {
          ToastMessage("Somthing went wrong");
        }
      }
    }
  };

  return (
    <>
      <BlackScreen zIndex="1000000" show={isModalVisible} />

      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isModalVisible
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
          <div className="lg:w-[50%]">
            <div className="mb-8">
              <Title className="font-medium mb-3">Welcome Back</Title>
              <p className="text-sm">
                We knew you’d come around, sign in for endless entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-7">
              <ConnectWalletButton
                clickEvent={metaMaskHandler}
                img="images/metamask.svg"
                title={
                  <>
                    Metamask <span className="text-sm">( Recommended )</span>
                  </>
                }
              />
              <ConnectWalletButton
                img="images/wallet-connect.svg"
                title="Walletconnet"
              />
            </div>

            <div>
              <p className="text-center text-sm mb-5">Social</p>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <SocialLoginCard
                  title="Google"
                  icon={<Icon icon="ri:google-fill" className="text-lg" />}
                />
                <SocialLoginCard
                  title="Twitter"
                  icon={<Icon icon="mdi:twitter" className="text-lg" />}
                />
              </div>

              <Link to="/" className="block w-fit mx-auto text-center text-sm">
                Forget Password?
              </Link>
            </div>
          </div>

          <img
            src="images/connect-wallet-banner.png"
            className="w-full lg:w-auto mt-10 lg:mt-0 max-w-[26rem] lg:max-w-none mx-auto lg:h-full object-cover lg:absolute top-0 right-0 z-[100]"
            alt=""
          />

          <button
            onClick={() => dispatch(toggleModalVisibility(false))}
            className="absolute top-8 right-10 text-lg text-white flex z-[500000]"
          >
            <Icon icon="maki:cross" />
          </button>
        </section>
      </UpperRoot>
    </>
  );
}

export default ConnectWalletModal;
