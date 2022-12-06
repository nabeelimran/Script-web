import { Icon } from "@iconify/react";
import Title from "components/Title";
import React from "react";

const Card = () => {
  return (
    <div className="bg-shade-grayis rounded-2xl py-5 md:py-7 px-6 md:px-8 flex flex-col relative">
      <div className="xl:flex items-center justify-between mb-4 xl:mb-6">
        <div className="flex items-center space-x-3">
          <img
            src="images/logos/clean-logo.png"
            className="w-[40px] xl:w-[50px]"
            alt=""
          />
          <div>
            <p className="text-sm xl:text-base text-primary font-bold">
              Scripttv
            </p>
            <p className="text-xs xl:text-sm">@scripttv</p>
          </div>
        </div>

        <p className="text-xs xl:text-sm text-primary absolute top-3 right-6 xl:static">
          Nov 8/2022
        </p>
      </div>

      <div className="flex-1 mb-5">
        <p className="text-xs xl:text-sm">
          @Poolz__ @_Crypto_Pirates @MoverseRun @Project _Hive_io @MeMusicNews
          @LegendsElysium @osis_ world @LeagueofEmpires @neptunemutual 📺
        </p>
      </div>

      <div>
        <p className="text-xs xl:text-sm text-center text-primary mb-5">
          Script Network (script_network)
        </p>

        <div className="flex items-center justify-center space-x-6">
          <Icon icon="fa-solid:comment-dots" className="text-sm" />

          <div className="flex items-center space-x-1">
            <img src="images/tv/share-yellow.svg" className="w-[16px]" alt="" />
            <span className="text-base text-primary">0</span>
          </div>

          <div className="flex items-center space-x-1">
            <img src="images/tv/yellow-heart.svg" className="w-[16px]" alt="" />
            <span className="text-base text-primary">1</span>
          </div>

          <Icon icon="material-symbols:upload-rounded" className="text-xl" />
        </div>
      </div>
    </div>
  );
};

function Community() {
  return (
    <section className="container">
      <div className="mb-12 lg:mb-16">
        <Title>
          <span className="text-primary">Script Network</span> Community on
          Twitter
        </Title>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 xl:gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Community;
