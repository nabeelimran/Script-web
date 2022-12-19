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

  const verifyEmail = () => {
    var sendObj = {
      email: window.location.search.split("=")[1],
      otp: OTP,
      recaptcha: ""
      // mobile: true,
    };
    
    if (OTP) {
      Api.emailVerification(sendObj, "otp").then((otpVerify) => {
        if (otpVerify) {
          if (otpVerify && otpVerify.status === 200) {
            if (otpVerify.data.data.authToken) {
              sessionStorage.setItem(
                "script-token",
                JSON.stringify(otpVerify.data.data.authToken)
              );
            }
    
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({
                email: otpVerify.data.data.email,
                userId: otpVerify.data.data.id,
                walletAddress: otpVerify.data.data.walletAddress,
              })
            );
            navigate("/tv")
            ToastMessage(`${otpVerify.data.message}`, true);
          } else {
            ToastMessage(`${otpVerify.message}`);
          } 
        } else {
          ToastMessage("Invalid OTP");  
        }
      }).catch(err => {
        ToastMessage(`${err.message}`);
        setOTP('');
      });
    } else {
      ToastMessage("Please Enter OTP");
    }
  };

  const reSendOtp = async() => {
    var sendObj = {
      email: window.location.search.split("=")[1],
      otp: OTP,
      mobile: true,
    };
    const resend = await Api.resendOtp(sendObj,'opt')
    if(resend && resend.status===200){
      ToastMessage(`${resend.data.message}`, true)
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
            otpType="number"
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
