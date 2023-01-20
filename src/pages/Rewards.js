import Footer from "components/Footer";
import { ToastMessage } from "components/ToastMessage";
import TvNavbar from "components/TvNavbar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateRewardPoint } from "redux/reducers/RewardPoint_State";
import Tip from "sections/Dashboard/Home/Tip";
import Collect from "sections/Rewards/Collect";
import DailyTasks from "sections/Rewards/DailyTasks";
import Hero from "sections/Rewards/Hero";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";

function Rewards() {
  const dispatch = useDispatch();
  const user = LocalServices.getServices("user");
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);
  const [rewardHistory, setRewardHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

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
    const latestDayReward = await getLatestDayReward();
    setIsLoading(true);
    if(latestDayReward && latestDayReward.isSuccess) {
      if (latestDayReward.data) {
        const rewardCollectTimestamp = latestDayReward.data.createdAt;
        const currentTimestamp = new Date().getTime();
        if((rewardCollectTimestamp - currentTimestamp) / 3600000 > 24) {
          collectLoginReward()
        } else {
          ToastMessage('Reward is already collected. Please try again after 24 hours.');  
          setIsLoading(false);
        }
      } else {
        ToastMessage('Unable to fetch user rewards');
        setIsLoading(false);
      }
    } else {
      collectLoginReward()
    }
  };

  const collectLoginReward = () => {
    if(!user) {
      ToastMessage('User not found');
      setIsLoading(false);
      return;
    }
    const req = {
      "dayType": null,
      "rewardCollected": true,
      "rewardPoint": 10,
      "rewardType": "DAILY_SIGN_IN",
      "userId": user.userId,
      "username": user.userName,
      "walletAddress": user.walletAddress,
    };
    Api.collectDailyReward(req, "reward-management").then((res) => {
      if(res && res.status === 200) {
        setIsLoading(false);
        helper.trackByMixpanel("Collect Reward Button Clicked",{
          "day": new Date().getDay() + 1,
          "email" : user.email,
          "amount" : 10
        })
        dispatch(updateRewardPoint(true))
        getTotalRewardPoints();
        ToastMessage('Reward collected successfully', true);
      } else {
        ToastMessage('Error while collecting reward');
        setIsLoading(false);
      }
    }).catch((err) => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    MixPanelService.init();
    helper.trackByMixpanel("Reward Page View", {});
    getTotalRewardPoints();
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
          isLoading={isLoading}
          getTotalRewardPoints={getTotalRewardPoints}
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
