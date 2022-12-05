import FillBar from "components/FillBar";
import Logo from "components/Logo";
import Title from "components/Title";
import React from "react";

const SupplyCard = () => {
  return (
    <div className="py-4 px-5 bg-blue-1 rounded-xl">
      <p className="font-medium text-sm opacity-60 mb-3">Circulating Supply</p>

      <div className="flex flex-wrap items-center mb-4 -mx-1">
        <p className="mx-1 text-xs xl:text-sm font-semibold">1,000,216</p>
        <img
          src="images/tv/coin.png"
          className="mx-1 w-[18px] xl:w-[24px]"
          alt=""
        />
        <p className="mx-1 text-xs xl:text-sm font-semibold">1,000,000,000</p>
      </div>

      <div className="mb-4">
        <FillBar bgColor="black" />
      </div>

      <p className="fs-16px font-bold">0.10%</p>
    </div>
  );
};

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0 xl:space-x-20">
          <div className="flex flex-col xl:flex-row items-center text-center xl:text-left space-y-5 xl:space-y-0 xl:space-x-8">
            <div className="w-[100px] lg:w-[130px] xl:w-[140px] h-[100px] lg:h-[130px] xl:h-[140px] rounded-full bg-primary flex items-center justify-center">
              <Logo
                className="flex flex-col items-center space-y-2"
                imgClassName="w-[30%]"
                textClassName="text-[10px] lg:text-sm"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm xl:text-base text-white opacity-60 font-semibold">
                Introduching Script Network
              </p>
              <Title
                className="font-semibold text-center xl:text-left"
                variant="30"
              >
                Welcome To <span className="text-primary">Script Network</span>{" "}
                <br />
                Governance & Staking
              </Title>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-9 flex-1 w-full">
            <SupplyCard />
            <SupplyCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
