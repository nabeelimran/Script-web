import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import React, { useEffect, useState } from "react";
import Tip from "sections/Dashboard/Home/Tip";
import Collect from "sections/Rewards/Collect";
import DailyTasks from "sections/Rewards/DailyTasks";
import Hero from "sections/Rewards/Hero";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";

function Rewards() {
  const user = LocalServices.getServices("user");
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);
  const [rewardHistory, setRewardHistory] = useState([]);

  const getRewardHistoryList = () => {
    if (user && user.walletAddress) {
      Api.getAllUserRewardsData(
        user.walletAddress,
        0,
        10,
        "reward-management"
      ).then((res) => {
        if (res && res.status === 200) {
          setRewardHistory(res.data.data.content);
        }
      });
    }
  };

  const getTotalRewardPoints = () => {
    if (user && user.walletAddress) {
      Api.getMyRewardPointTotal(user.walletAddress, "reward-management").then(
        (res) => {
          if (res && res.status === 200) {
            setTotalRewardPoints(res.data.data.myRewards);
          }
        }
      );
    }
  };

  const getLatestDayReward = async () => {
    if (user && user.walletAddress) {
      return await Api.getLatestDayReward(
        user.walletAddress,
        "reward-management"
      ).then((res) => res.data);
    }
  };

  const handleCollectReward = async () => {
    // const latestDayReward = await getLatestDayReward();
    // console.log(latestDayReward, '==>>');
    // if(latestDayReward && latestDayReward.isSuccess) {
    //   if (latestDayReward.data) {
    //   } else {
    //   }
    // } else {
    // }
    // helper.trackByMixpanel("Collect Reward Button Clicked",{
    //   "day": DAY_NUMBER,
    //   "email" : EMAIL,
    //   "amount" : REWARD_AMOUNT
    //   })
  };

  useEffect(() => {
    MixPanelService.init();
    helper.trackByMixpanel("Reward Page View", {});
    getTotalRewardPoints();
    getRewardHistoryList();
  }, []);

  return (
    <div>
      {/* <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div> */}

      <div className="mb-16 lg:mb-20 mt-5">
        <Hero
          handleCollectReward={handleCollectReward}
          totalRewardPoints={totalRewardPoints}
        />
      </div>

      {/* <div className="mb-14">
        <Collect />
      </div> */}

      <div className="mb-16 lg:mb-20">
        <DailyTasks />
      </div>

      <Footer />
    </div>
  );
}

export default Rewards;
