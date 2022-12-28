import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import React, { useEffect } from "react";
import Tip from "sections/Dashboard/Home/Tip";
import Collect from "sections/Rewards/Collect";
import DailyTasks from "sections/Rewards/DailyTasks";
import Hero from "sections/Rewards/Hero";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";

function Rewards() {

  const user = LocalServices.getServices('user');

  const getLatestDayReward = async () => {
    if(user && user.walletAddress) {
      return await Api.getLatestDayReward(user.walletAddress, 'reward-management').then(res => res.data);
    }
    
  }

  const handleCollectReward = async () => {
    // const latestDayReward = await getLatestDayReward();
    // console.log(latestDayReward, '==>>');
    // if(latestDayReward && latestDayReward.isSuccess) {

    // } else {

    // }
    // helper.trackByMixpanel("Collect Reward Button Clicked",{
    //   "day": DAY_NUMBER,
    //   "email" : EMAIL,
    //   "amount" : REWARD_AMOUNT
    //   })
  }

  useEffect(() => {
    MixPanelService.init();
    helper.trackByMixpanel('Reward Page View', {});
  }, [])
  
  return (
    <div>
      {/* <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div> */}

      <div className="mb-16 lg:mb-20 mt-5">
        <Hero handleCollectReward={handleCollectReward} />
      </div>

      {/* <div className="mb-14">
        <Collect />
      </div> */}

      <div className="mb-16 lg:mb-20">
        <DailyTasks />
      </div>

      <div className="mb-16 lg:mb-20">
        <Tip />
      </div>

      <Footer />
    </div>
  );
}

export default Rewards;
