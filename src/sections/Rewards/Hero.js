import { Icon } from "@iconify/react";
import Button from "components/Button";
import Title from "components/Title";
import { ToastMessage } from "components/ToastMessage";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleHistoryModalVisibility } from "redux/reducers/connectWalletModal_State";
import Card from "components/Dashboard/Card";
import { useNavigate } from "react-router-dom";

function Hero({
  handleCollectReward,
  totalRewardPoints,
  isLoading,
  getTotalRewardPoints,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePaidMint = async () => {
    navigate("/dashboard/mint");
  };
  return (
    // <section className="container grid lg:grid-cols-2 gap-10 lg:gap-20">
    <>
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
              loader={isLoading}
              disable={isLoading === true ? true : false}
            />
            <Button
              label="History"
              variant={3}
              buttonProps={{
                onClick: () => {
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
              <button
                onClick={() => {
                  getTotalRewardPoints();
                  setTimeout(() => {
                    ToastMessage("Reward updated!", true);
                  }, 1000);
                }}
              >
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

      <section className="dashboard-layout grid lg:grid-cols-1 gap-10 lg:gap-20 mt-3 h-[150px]">
        {/* <div></div> */}
        <Card
          color="#5815BA"
          title="Mint Glasses!"
          description="Mint glasses to start earning SPAY"
          clickHandler={handlePaidMint}
        />
      </section>
    </>
  );
}

export default Hero;
