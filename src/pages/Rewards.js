import Footer from "components/Footer";
import { ToastMessage } from "components/ToastMessage";
import TvNavbar from "components/TvNavbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRewardPoint } from "redux/reducers/RewardPoint_State";
import Tip from "sections/Dashboard/Home/Tip";
import Collect from "sections/Rewards/Collect";
import DailyTasks from "sections/Rewards/DailyTasks";
import Hero from "sections/Rewards/Hero";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { addLog } from "services/logs/FbLogs";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";

function Rewards() {
  const dispatch = useDispatch();
  const user = LocalServices.getServices("user");
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {totalRewardPoint} = useSelector(state => state.RewardPoint_State)
  
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

  const getLatestDayReward = async () => {
    if (user && user.userId) {
      return await Api.getLatestDayReward(
        user.userId,
        "reward-management"
      ).then((res) => res.data);
    }
  };

  const handleCollectReward = async () => {
    setIsLoading(true);
    const latestDayReward = await getLatestDayReward();
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
        try {
          await addLog({
            latestDayReward: JSON.stringify(latestDayReward),
            type: 'check-user-reward',
            attempt: 'fail'
          })  
        } catch (error) {
          
        }
        
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
    Api.collectDailyReward(req, "reward-management").then(async (res) => {
      if(res && res.status === 200) {
        helper.trackByMixpanel("Collect Reward Button Clicked",{
          "day": new Date().getDay() + 1,
          "email" : user.email,
          "amount" : 10
        })
        dispatch(updateRewardPoint(true))
        getTotalRewardPoints();
        ToastMessage('Reward collected successfully', true);
        setIsLoading(false);
      } else {
        ToastMessage('Error while collecting reward');
        await addLog({
          error: JSON.stringify(res),
          type: 'collection-reward',
          attempt: 'fail'
        })
        setIsLoading(false);
      }
    }).catch(async(err) => {
      setIsLoading(false);
      await addLog({
        error: JSON.stringify(err),
        type: 'collection-reward',
        attempt: 'fail'
      })
    })
  }

  useEffect(() => {
    MixPanelService.init();
    helper.trackByMixpanel("Reward Page View", {});
   // getTotalRewardPoints();
  }, []);

  return (
    <div>
      {/* <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div> */}

      <div className="mb-16 lg:mb-20 mt-5">
        <Hero
          handleCollectReward={handleCollectReward}
          totalRewardPoints={totalRewardPoint ? totalRewardPoint : totalRewardPoints}
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
