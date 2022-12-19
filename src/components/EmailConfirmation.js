import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FloatingInput from "components/FloatingInput";
import { useForm } from "react-hook-form";

import Button from "components/Button";
import Checkbox from "components/Checkbox";
import {
  toggleEmailModalVisibility,
  togglePasswordModalVisibility,
} from "redux/reducers/connectWalletModal_State";
import { metamaskCred, metamaskSignature, userInfo } from "redux/reducers/metamask_state";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import { ToastMessage } from "./ToastMessage";
import Api from "services/api";
import MetamaskService from "services/metamask";
import LoaderGif from "../assets/Loading_icon.gif";

function EmailConfirmation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    nickname: "",
    refral: "",
  });

  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch();
  const { isEmailModal } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const modalRef = OutsideClickDetector(() =>
    dispatch(toggleEmailModalVisibility(false))
  );

  useEffect(() => {
    if (isEmailModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isEmailModal]);

  const onSubmit = async (data) => {
    setLoading(true)
    const emailCheck = await Api.checkUsernameOrEmailExist(
      data.email,
      data.nickname,
      "login_modal"
    );
    
    if (emailCheck.status == 200) {
      if (
        emailCheck.data.data.isEmailExist === false &&
        emailCheck.data.data.isUserNameExist === false
      ) {
        const signeture = await MetamaskService.signatureRequest(
          accountAddress
        );
        if (signeture) {
          dispatch(userInfo({email:data.email,username:data.nickname,referal:data.refral}))
          dispatch(metamaskSignature(signeture));
          dispatch(toggleEmailModalVisibility(false));
          dispatch(togglePasswordModalVisibility(true));
        setLoading(false)

        }
      } else {
        ToastMessage(emailCheck.data.message, true);
        setLoading(false)
      }
    } else {
      ToastMessage("Somthing went wrong", true);
      setLoading(false)

    }
  };

  const errorShow = (type) => {
    let error;
    if(type){
      switch (type.type) {
        case "required":
          error = "This field is requird. Please enter email"
          break;
        case "pattern":
          error = "Invalid Email"
          break;
      
        default:
          break;
      }
    }

  
    return error
  }

  return (
    <>
      <BlackScreen zIndex="1000000" show={isEmailModal} />

      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isEmailModal
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
          <div className="lg:w-[50%] mx-auto">
            <div className="mb-8">
              <Title className="font-medium mb-3">You are almost there</Title>
              <p className="text-sm">
                Complete these fields with your email and nickname
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6 mb-10">
                <FloatingInput
                  id="email"
                  type="email"
                  label=""
                  placeholder="Enter username or email address"
                  error={
                    errorShow(errors.email)
                  }
                  other={{
                    ...register("email", { required: true,pattern: /^[A-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/}),
                  }}
                />
                <FloatingInput
                  type="text"
                  id="nickname"
                  label=""
                  placeholder="NickName"
                  error={errors.nickname && "NickName is required."}
                  other={{
                    ...register("nickname", { required: true }),
                  }}
                />
                <FloatingInput
                  type="text"
                  id="refral"
                  label=""
                  placeholder="Referral code "
                  other={{
                    ...register("refral"),
                  }}
                />
              </div>

              <div className="space-y-6">
                <div className="pt-2">
                  <Button type="submit" label="Continue" loader={loading} disable={loading}/>
                </div>
              </div>
            </form>
          </div>
          <button
            onClick={() => dispatch(toggleEmailModalVisibility(false))}
            className="absolute top-8 right-10 text-lg text-white flex z-[500000]"
          >
            <Icon icon="maki:cross" />
          </button>
        </section>
      </UpperRoot>
    </>
  );
}

export default EmailConfirmation;
