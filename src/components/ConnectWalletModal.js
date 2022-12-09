import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";

function ConnectWalletModal() {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector(
    (state) => state.connectWalletModal_State
  );
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
