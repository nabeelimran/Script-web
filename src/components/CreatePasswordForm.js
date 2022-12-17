import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FloatingInput from "components/FloatingInput";
import { useForm } from "react-hook-form";

import Button from "components/Button";
import Checkbox from "components/Checkbox";
import { togglePasswordModalVisibility } from "redux/reducers/connectWalletModal_State";
import { metamaskCred,userInfo } from "redux/reducers/metamask_state";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import { ToastMessage } from "./ToastMessage";
import Api from "services/api";

function CreatePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    password: "",
    confirm_password: "",
  });

  const { user } = useSelector((state) => state.metamask_state);

  const { accountAddress } = useSelector((state) => state.metamask_state);
  const { signature } = useSelector((state) => state.metamask_state);

  const onSubmit = async (data) => {
  
    const resObj = {
      "browser": "dummyData",
      "country": "dummayData",
      "device": "Web",
      "loginIp": "dummyData",
      "loginLocation": "dummmyData",
      email: user.email,
      userName: user.username,
      password:data.password,
      walletAddress: accountAddress,
      walletSignature: signature ? signature : "",
      otherReferralCode: ""
    }

    const loginW  = await Api.walletLogin(resObj,"login_model")
    if(loginW.status===200 && loginW.data.isSuccess){
      
      ToastMessage(`${loginW.data.message}`)
      sessionStorage.setItem("userInfo",JSON.stringify({
        token:loginW.data.data.authToken,
        email:user.email
      }))
    }

    
  };
  const dispatch = useDispatch();
  const { isPasswordModal } = useSelector(
    (state) => state.connectWalletModal_State
  );

  const modalRef = OutsideClickDetector(() =>
    dispatch(togglePasswordModalVisibility(false))
  );

  useEffect(() => {
    if (isPasswordModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isPasswordModal]);

  return (
    <>
      <BlackScreen zIndex="1000000" show={isPasswordModal} />

      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isPasswordModal
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
          <div className="lg:w-[50%] mx-auto">
            <div className="mb-8">
              <Title className="font-medium mb-3">Last step!</Title>
              <p className="text-sm">
                Set your password to use it in the Script-tv
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6 mb-10">
                <FloatingInput
                  id="newPassword"
                  type="password"
                  label=""
                  placeholder="Enter password"
                  error={
                    errors.password &&
                    "This field is requird. Please enter password."
                  }
                  other={{
                    ...register("password", { required: true }),
                  }}
                />
                <FloatingInput
                  type="password"
                  id="confirm_password"
                  label=""
                  placeholder="Repeat your password"
                  error={
                    errors.confirm_password && errors.confirm_password.message
                  }
                  other={{
                    ...register("confirm_password", {
                      validate: (val) => {
                        if (watch("password") != val) {
                          return "Your passwords do no match";
                        }
                      },
                    }),
                  }}
                />
              </div>

              <div className="space-y-6">
                <div className="pt-2">
                  <Button type="submit" label="Continue" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </UpperRoot>
    </>
  );
}

export default CreatePasswordForm;
