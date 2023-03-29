import React from "react";

const featuredImages = [
  {
    iconImg: "images/features/BI_dark_background_white_vertical.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4"
  },
  {
    iconImg: "images/features/coinspeaker-logo-vector.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/cryptomode-logo-darkblue.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 cryptomode-feature-icon"
  },
  {
    iconImg: "images/features/cryptonews9929.jpg",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4"
  },
  {
    iconImg: "images/features/gulf-news-logo.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/logo.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/logo_800x149_transp-11.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/Logo-1@2x-min-1.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4"
  },
  {
    iconImg: "images/features/Outlook-Logo.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/PANews_Multicolor_Primary.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/Sinalogo1.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/sohu_com_logo.jpg",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/tencent-to-invest-70bn-in-fintech-1590569834.jpg",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/tGzNhICKOt0f.gif",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
  {
    iconImg: "images/features/newsbtc.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4"
  },
  {
    iconImg: "images/features/Yahoo!_Finance_logo_2021.png",
    class: "md:w-[11vh] xl:w-[12%] m-3 md:m-4 feature-icon"
  },
]

const FeaturedIn = () => {
  return (
    <div className="container text-center">
      <div>
        <h2 className="font-semibold text-4xl mb-4">
          FEATURED IN
        </h2>
      </div>
      <div className="pb-2 xl:pb-6 pt-6 flex items-center justify-center flex-wrap mb-10 md:mb-14">
        {
          featuredImages && featuredImages.map((feature, index) => 
            <img
              src={feature.iconImg}
              alt=""
              className={feature.class}
            />
          )
        }
      </div>
    </div>
  );
};

export default FeaturedIn;
