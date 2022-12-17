import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import Button from "components/Button";
import Title from "components/Title";
import { useNavigate, useSearchParams } from "react-router-dom";
import Api from "services/api";
import { ToastMessage } from "components/ToastMessage";

const VerifyAccount = () => {
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setOTP("");
  }, []);

  const verifyEmail = async () => {
    var sendObj = {
      email: window.location.search.split("=")[1],
      otp: OTP,
      mobile: true,
    };
    
    if (OTP) {
      const otpVerify = await Api.emailVerification(sendObj, "otp");

      if (otpVerify && otpVerify.status === 200) {

        navigate("/tv")

      } else {
        ToastMessage(`${otpVerify.message}`, true);
      }
    } else {
      ToastMessage("Please Type OTP");
    }
  };

  const reSendOtp = async() => {
    var sendObj = {
      email: window.location.search.split("=")[1],
      otp: OTP,
      mobile: true,
    };
    const resend = await Api.resendOtp(sendObj,'opt')
debugger
    if(resend && resend.status===200){

    }else{
      ToastMessage(`${resend.data.message}`,true)
    }
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div>

      <div className="h-[70vh] grid grid-col-1 ">
        <div className="my-8 mx-auto text-center">
          <Title className="font-medium mb-5">Enter One Time Password</Title>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="string"
            disabled={false}
            style={{ color: "#000" }}
          />

          <Button
            label="Send"
            loader={loading}
            className="mx-auto mt-5"
            buttonProps={{
              onClick: () => {
                verifyEmail();
              },
            }}
          />

          <ResendOTP
            style={{ display: "block", marginTop: "10px" }}
            onResendClick={() => reSendOtp()}
            maxTime={true}
            renderTime={() => {
              <></>;
            }}
          />
        </div>
      </div>

      <Footer container="container" />
    </div>
  );
};

export default VerifyAccount;
