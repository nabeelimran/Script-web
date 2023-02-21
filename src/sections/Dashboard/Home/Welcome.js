import FillBar from "components/FillBar";
import Title from "components/Title";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api from "services/api";
import LocalServices from "services/LocalServices";

function Welcome({
  profile
}) {
  const user = LocalServices.getServices("user");
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);
  const {updateRewardPointState} = useSelector(state => state.RewardPoint_State);
  const navigate = useNavigate();

  const goToTVSite = () => navigate({
    pathname: '/tv',
  });


  const getTotalRewardPoints = () => {
    if (user && user.userId) {
      Api.getMyRewardPointTotal(user.userId, "reward-management").then(
        (res) => {
          if (res && res.status === 200) {
            setTotalRewardPoints(res.data.data.myRewards);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (updateRewardPointState) {
      getTotalRewardPoints();
    }
  }, [updateRewardPointState]);

  return (
    <div className="dashboard-top-spacing pb-8 lg:pb-12 bg-[#18181A] relative z-10">
      <div className="dashboard-layout">
        <Title variant="20" className="font-semibold text-center mb-3">
          Welcome Back, {profile?.firstName || ''}
        </Title>
        <h1 onClick={goToTVSite} className="text-base lg:text-base xl:text-xl text-center text-primary font-semibold mb-7">Head back to TV</h1>

        <div className="space-y-1 mb-8 lg:mb-12">
          <p className="fs-20px font-medium">
            Welcome to your Script TV dashboard
          </p>
          <p className="text-sm">
            Connect and interact with viewers, and build community around your
            passions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          <div className="py-4 px-5 rounded-lg flex items-center bg-[#5815BA]">
            <div className="flex items-start space-x-3">
              <div className="min-w-[40px] h-[40px] rounded-full bg-white"></div>

              <div className="">
                <p className="fs-16px font-medium mb-1">Nice Work!</p>
                <p className="text-sm">You have earned N/A SPAY this week!</p>
              </div>
            </div>
          </div>

          <div className="py-4 px-5 rounded-lg bg-[#0E0E0F] flex flex-col">
            <div className="flex items-center space-x-3 flex-1 mb-2">
              <div className="w-[24px] h-[24px] rounded-full bg-white"></div>
              <p className="fs-18px font-semibold">N/A SPAY</p>
            </div>

            <p className="text-xs mb-2">Accumulate 10,000 SPAY</p>
            <FillBar barColor="#FF38DC" progress="90%" bgColor="#A6A6A6" />
          </div>

          <div className="py-4 px-5 rounded-lg bg-[#0E0E0F] flex flex-col">
            <div className="flex items-center space-x-3 flex-1 mb-2">
              <div className="w-[24px] h-[24px] rounded-full bg-white"></div>
              <p className="fs-18px font-semibold">N/A SCPT</p>
            </div>

            <p className="text-xs mb-2">Connect on live chat 5x a week</p>
            <FillBar progress="100%" />
          </div>
          <div className="py-4 px-5 rounded-lg bg-[#0E0E0F] flex flex-col">
            <div className="flex items-center space-x-3 flex-1 mb-2">
              <div className="w-[24px] h-[24px] rounded-full bg-white"></div>
              <p className="fs-18px font-semibold">
                { totalRewardPoints ? `${totalRewardPoints} POINTS` : `N/A POINTS` }
              </p>
            </div>

            <p className="text-xs mb-2">Accumulate Script Points</p>
            <FillBar progress="100%" />
          </div>
        </div>
      </div>

      <img
        src="images/dashboard-home-circles.svg"
        className="absolute bottom-0 left-16 -z-10 w-[180px]"
        alt=""
      />

      <img
        src="images/rectangular-boxes.png"
        className="absolute bottom-4 right-6 -z-10 w-[74px]"
        alt=""
      />
    </div>
  );
}

export default Welcome;
