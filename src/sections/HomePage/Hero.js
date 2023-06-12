import Button from "components/Button";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import CountDown from "components/CountDown";
// import Title from "components/Title";
// import { Link } from "react-router-dom";
// import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
// import analyticsEventTracker from "services/google-analytics/trackAnalyticsEvent";
import Api from "services/api";
import { helper } from "utils/helper";

function Hero() {
  // const [isSidebarVisible, setSidebarVisibility] = useState(false);
  // const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));
  // const dispatch = useDispatch();
  // const [countDownWidth, setCountDownWidth] = useState(0);
  const [overAllOrderedToken, setOverAllOrderedToken] = useState(0);
  // const totalPresaleAmount = 70290000;

  const getOverAllOrderedToken = () => {
    Api.getOverAllOrderedToken().then((res) => {
      if (res && res.status === 200) {
        setOverAllOrderedToken(res.data.data);
      }
    });
  };

  // const getProgressBarWidth = (progressBarWidth) => {
  //   setCountDownWidth(progressBarWidth);
  // };

  useEffect(() => {
    getOverAllOrderedToken();
  }, []);

  return (
    <div>
      <div className="container grid lg:grid-cols-2 gap-[5%]">
        <div className="text-center lg:text-left relative z-10">
          <h5 className="text-primary mb-4 font-semibold fs-16px">
            Powering Live TV and Film for the next generation.
          </h5>
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl lh-1_2 mb-6 max-w-[30rem] lg:max-w-none mx-auto">
            Watch To Earn Live TV Decentralized On Chain,{" "}
            <span className="text-primary">For Free</span>
          </h1>

          <div>
            {/* <div className="bg-transparent rounded p-6 w-full block lg:hidden max-w-[26rem] mx-auto cursor-pointer">
              <Title variants={18} className="mb-3 text-center font-semibold">
                FINAL <span className="ml-2 text-primary">PRESALE</span> NOW ON
              </Title>
              <div className="flex justify-center p-3.5 border border-[#36e6ae91] mb-5 rounded-xl">
                <CountDown getProgressBarWidth={getProgressBarWidth} />
              </div>
              <div className="flex items-center space-x-5 lg:space-x-7 justify-center lg:justify-start">
                <div className="h-10 border border-[#36e6ae] rounded-full w-full relative overflow-hidden">
                  <div
                    className="h-[38px] border border-[#36e6ae] bg-[#36e6ae] rounded-full flex items-center justify-center"
                    style={{ width: `${countDownWidth}%` }}
                  ></div>
                  <p className="text-md md:text-sm text-white font-bold absolute left-0 text-center w-full top-[25%]">
                    Until end of alpha + public round
                  </p>
                </div>
              </div>
              <h5 className="font-medium text-md mb-5 mt-1">
                <span className="text-primary">1 SCPT</span> = $ 0.00947
              </h5>
              <div className="flex flex-col justify-center items-center border border-[#36e6ae91] mb-5 p-3.5 rounded-xl">
                <p className="flex text-3xl font-semibold">
                  <span className="text-primary mx-2">
                    {Math.floor(overAllOrderedToken).toLocaleString("en-US")}
                  </span>{" "}
                  Token Sold
                </p>
                <p className="flex text-md">
                  a maximum of{" "}
                  <span className="text-primary mx-2">
                    {totalPresaleAmount - overAllOrderedToken > 0
                      ? Math.floor(
                          totalPresaleAmount - overAllOrderedToken
                        ).toLocaleString("en-US")
                      : 0}
                  </span>{" "}
                  remaining
                </p>
              </div>
              <button
                type="button"
                className="flex items-center text-xs sm:text-sm xl:text-base min-h-[34px] xl:min-h-[38px] space-x-3 px-6 xl:px-8 rounded-lg font-semibold w-full justify-center py-4 text-darkGray bg-primary"
                onClick={() => helper.openLink("https://presale.script.tv/")}
              >
                <span className="text-inherit lh-1">Buy Tokens</span>
              </button>
            </div> */}
            <img
            src="images/hero-img.png"
            className="block lg:hidden max-w-[26rem] mx-auto cursor-pointer"
            alt=""
          />
          </div>

          <p className="fs-18px text-white opacity-50 font-normal mb-8 xl:mb-12 mt-5 md:mt-0">
            24/7 live television on chain. Earn rewards whilst you watch through
            gameFi and socialFi elements.Join and start earning in minutes!
            Built on Script infrastructure, on Script blockchain.
          </p>

          {/* <div className="flex flex-col md:flex-row items-center space-x-5 lg:space-x-7 mb-8 justify-center lg:justify-start space-y-5 md:space-y-0"> */}
          <div className="flex flex-col md:flex-row items-center mb-5 justify-center lg:justify-start space-y-5 md:space-y-0 md:space-x-5">
            {/* <Button
              label="Presale"
              buttonProps={{
                onClick: () => {
                  analyticsEventTracker(
                    "buy-now-on-presale",
                    "click",
                    window.location.pathname
                  );
                  helper.openLink("https://presale.script.tv/");
                },
              }}
              className="w-[120px] h-[40px] justify-center"
            /> */}
            <Button
              label="Whitepaper"
              variant={2}
              buttonProps={{
                onClick: () => helper.openLink("https://whitepaper.script.tv/"),
              }}
              className="w-[140px] h-[40px] justify-center"
            />
            <Button
              label="Audits"
              variant={2}
              arrowVisible={true}
              iconName="ion:shield-checkmark"
              buttonProps={{
                onClick: () =>
                  helper.openLink(
                    "https://whitepaper.script.tv/security-+-audits"
                  ),
              }}
              className="w-[180px] h-[40px] justify-center"
            />
            <Button
              link={helper.generateTokenUrl("")}
              label="Launch app"
              arrowVisible={true}
              iconName="material-symbols:arrow-right-alt-rounded"
              className="w-[200px] h-[40px] justify-center"
            />
          </div>
          {/* <div className="flex flex-col md:flex-row items-center space-x-5 lg:space-x-7 mb-8 justify-center lg:justify-start space-y-5 md:space-y-0">
            <Button
              link={helper.generateTokenUrl("")}
              label="Launch app"
              arrowVisible={true}
              iconName="material-symbols:arrow-right-alt-rounded"
              className="w-[150px] h-[50px] justify-center md:w-[400px]"
            />
          </div> */}

          <p className="fs-16px font-medium text-white mb-9">
            <span className="opacity-50">Already using script.tv?</span>{" "}
            <a
              href="/"
              onClick={(e) => {
                helper.openLink(helper.generateTokenUrl(''))
                // e.preventDefault();
                // setSidebarVisibility(false);
                // dispatch(toggleModalVisibility(true));
              }}
              className="text-primary"
            >
              Sign in
            </a>
          </p>

          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 items-stretch justify-center lg:justify-start">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 justify-center sm:justify-start space-y-4 sm:space-y-0">
              {/* <div className="flex -space-x-4 xl:-space-x-7">
                <EconomyAvatar img="images/avatar-1.png" className="z-30" />
                <EconomyAvatar img="images/avatar-2.png" className="z-20" />
                <EconomyAvatar img="images/avatar-3.png" className="z-10" />
              </div> */}
              <div>
                <p className="text-white font-medium fs-20px mb-1">200,000+</p>
                <p className="text-sm text-white opacity-50">
                  Part of the <br />
                  ecosystem <br />
                  pre launch
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[50%] mx-auto sm:w-[2px] h-[2px] sm:h-[90%] bg-white opacity-50"></div>
            </div>
            <div>
              <p className="text-white font-medium fs-20px mb-1">24/7/365+</p>
              <p className="text-sm text-white opacity-50">
                Television for free
              </p>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:block">
        <img
            src="images/hero-img.png"
            className="w-full block w-full mx-auto cursor-pointer"
            alt=""
          />
          {/* <div className="relative z-20">
            <div className="yellow-center-blob -z-20 w-[200px] h-[200px] blur-[140px]"></div>
            
            <div className="bg-black rounded p-6">
              <Title variants={18} className="mb-3 text-center font-semibold">
                FINAL<span className="ml-2 text-primary">PRESALE</span> NOW ON
              </Title>
              <div className="flex justify-center py-5 border border-[#36e6ae91] mb-5 rounded-xl">
                <CountDown getProgressBarWidth={getProgressBarWidth} />
              </div>
              <div className="flex items-center space-x-5 lg:space-x-7 justify-center lg:justify-start">
                <div className="h-10 border border-[#36e6ae] rounded-full w-full relative overflow-hidden">
                  <div
                    className="h-[38px] border border-[#36e6ae] bg-[#36e6ae] rounded-full flex items-center justify-center"
                    style={{ width: `${countDownWidth}%` }}
                  ></div>
                  <p className="text-md md:text-sm text-white font-bold absolute left-0 text-center w-full top-[25%]">
                    Until end of alpha + public round
                  </p>
                </div>
              </div>
              <h5 className="font-medium text-md mb-5 mt-1">
                <span className="text-primary">1 SCPT</span> = $ 0.00947
              </h5>
              <div className="flex flex-col justify-center items-center border border-[#36e6ae91] mb-5 p-3.5 rounded-xl">
                <p className="flex text-3xl font-semibold">
                  <span className="text-primary mx-2">
                    {Math.floor(overAllOrderedToken).toLocaleString("en-US")}
                  </span>{" "}
                  Token Sold
                </p>
                <p className="flex text-md">
                  a maximum of{" "}
                  <span className="text-primary mx-2">
                    {totalPresaleAmount - overAllOrderedToken > 0
                      ? Math.floor(
                          totalPresaleAmount - overAllOrderedToken
                        ).toLocaleString("en-US")
                      : 0}
                  </span>{" "}
                  remaining
                </p>
              </div>
              <button
                type="button"
                className="flex items-center text-xs sm:text-sm xl:text-base min-h-[34px] xl:min-h-[38px] space-x-3 px-6 xl:px-8 rounded-lg font-semibold w-full justify-center py-4 text-darkGray bg-primary"
                onClick={() => helper.openLink("https://presale.script.tv/")}
              >
                <span className="text-inherit lh-1">Buy Tokens</span>
              </button>
              <h2 className="text-center mt-4 text-lg hover:text-primary hover:underline">
              <Link to="/how-to-buy" className="text-sm" onClick={() => analyticsEventTracker('howtobuy', 'click', window.location.pathname)}>
                How to Buy
              </Link>
              </h2> 
            </div>
          </div> */}
        </div> 
      </div>
    </div>
  );
}

export default Hero;
