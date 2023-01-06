import { Icon } from "@iconify/react";
import Button from "components/Button";
import Title from "components/Title";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleHistoryModalVisibility } from "redux/reducers/connectWalletModal_State";

function Hero({ handleCollectReward, totalRewardPoints }) {
  const dispatch = useDispatch();
  return (
    // <section className="container grid lg:grid-cols-2 gap-10 lg:gap-20">
    <section className="dashboard-layout grid lg:grid-cols-2 gap-10 lg:gap-20">
      <div className="">
        <Title className="font-semibold text-primary mb-4">My Rewards</Title>

        <p className="fs-16px mb-8">
          Collect Script TV rewards and redeem them for exclusive rewards and
          special offers.
        </p>

        <div className="flex items-center space-x-4">
          <Button
            label="Collect Reward"
            buttonProps={{
              onClick: () => {
                handleCollectReward();
              },
            }}
          />
          <Button
            label="History"
            variant={3}
            buttonProps={{
              onClick: () => {
                handleCollectReward();
                dispatch(toggleHistoryModalVisibility(true));
              },
            }}
          />
        </div>
      </div>

      <div className="bg-[#161616] py-5 sm:py-8 px-6 sm:px-10 grid sm:grid-cols-[1fr_.5fr] gap-8 rounded-lg">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <Title className="font-semibold text-primary" variant={24}>
              My Rewards
            </Title>
            <button>
              <Icon icon="oi:reload" />
            </button>
          </div>

          <Title className="font-semibold">{totalRewardPoints}</Title>
        </div>
        <div className="flex items-end">
          <img src="../images/reward-coins.png" className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
