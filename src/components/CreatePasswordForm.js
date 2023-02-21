import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FloatingInput from "components/FloatingInput";
import { useForm } from "react-hook-form";

import Button from "components/Button";
import Checkbox from "components/Checkbox";
import { togglePasswordModalVisibility } from "redux/reducers/connectWalletModal_State";
import { metamaskCred, userInfo } from "redux/reducers/metamask_state";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import { ToastMessage } from "./ToastMessage";
import Api from "services/api";
import MixPanelService from "services/mixPanelService";

function CreatePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    password: "",
    confirm_password: "",
  });

  const { user } = useSelector((state) => state.metamask_state);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confPasswordShow, setConfPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const { signature } = useSelector((state) => state.metamask_state);
  const navigate = useNavigate();

  const switchPasswordView = (from) => {
    if (from === "newPassword") {
      setPasswordShow(!passwordShow);
    } else {
      setConfPasswordShow(!confPasswordShow);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const resObj = {
      browser: "dummyData",
      country: "dummayData",
      device: "Web",
      loginIp: "dummyData",
      loginLocation: "dummmyData",
      email: user.email,
      userName: user.username,
      password: data.password,
      otherReferralCode: user.referal,
      walletAddress: accountAddress,
      walletSignature: signature ? signature : "",
    };

    const loginW = await Api.walletLogin(resObj, "login_model");
    try {
      MixPanelService.setIdentifier(loginW?.data?.data?.email);
            MixPanelService.track('sign-up', loginW?.data?.data);
    } catch (error) {
      
    }
    if (loginW.data.message === "Please verify your account.") {
      setLoading(false);
      dispatch(togglePasswordModalVisibility(false));
      reset({
        password: "",
        confirm_password: "",
      })
      navigate({
        pathname: "/verify-account",
        search: `?email=${user.email}`,
      });
    } else {
      if (loginW && loginW.status === 200 && loginW.data.isSuccess) {
        setLoading(false);
        if (loginW.data.data.authToken) {
          sessionStorage.setItem(
            "script-token",
            JSON.stringify(loginW.data.data.authToken)
          );
        }

        sessionStorage.setItem(
          "userInfo",
          JSON.stringify({
            email: user.email,
			userName: loginW.data.data.userName,
          })
        );
        ToastMessage(`${loginW.data.message}`, true);

        dispatch(togglePasswordModalVisibility(false));
        reset({
          password: "",
          confirm_password: "",
        })
      } else {
        ToastMessage("something went wrong");
        loading(false);
      }
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

  const errorShow = (type) => {
    let error;
    if (type) {
      switch (type.type) {
        case "required":
          error = "This field is requird. Please enter password";
          break;
        case "minLength":
          error = "Password must have at least 8 characters";
          break;
        case "pattern":
          error =
            "Password Should be eight characters long and alphanumeric with special characters";
          break;

        default:
          break;
      }
    }

    return error;
  };

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
                  type={passwordShow ? "text" : "password"}
                  viewButton={true}
                  switch={switchPasswordView}
                  showPassword={passwordShow}
                  label=""
                  placeholder="Enter password"
                  Eyebutton={true}
                  error={errorShow(errors.password)}
                  other={{
                    ...register("password", {
                      required: true,
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                      pattern: /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{8,}$/,
                    }),
                  }}
                />
                <FloatingInput
                  type={confPasswordShow ? "text" : "password"}
                  id="confirm_password"
                  viewButton={true}
                  switch={switchPasswordView}
                  showPassword={confPasswordShow}
                  label=""
                  placeholder="Repeat your password"
                  error={
                    errors.confirm_password && errors.confirm_password.message
                  }
                  other={{
                    ...register("confirm_password", {
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "Your password do not match";
                        }
                      },
                    }),
                  }}
                />
              </div>

              <div className="space-y-6">
                <div className="pt-2">
                  <Button type="submit" label="Save" loader={loading} />
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
