import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
  // {
  //   iconImg: "images/partners/push-logo.png",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-20",
  // },
  // {
  //   iconImg: "images/partners/bitgret_logo.png",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-14",
  // },
  // {
  //   iconImg: "images/partners/blockApex.png",
  //   className: "w-[24vh]",
  // },
  // {
  //   iconImg: "images/partners/xord.jpg",
  //   className: "w-[18vh] mt-4",
  // },
  // {
  //   iconImg: "images/partners/NFTrade.svg",
  //   className: "invert-[100%] brightness-0 h-10 xl:h-16",
  // },
  // {
  //   iconImg: "images/partners/chainlink.svg",
  //   className: "invert-[100%] brightness-0 h-8 xl:h-12 mt-2",
  // },
  // {
  //   iconImg: "images/partners/arcana-network.svg",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  // },
  // {
  //   iconImg: "images/partners/yay-games.png",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  // },
  // {
  //   iconImg: "images/partners/gate-io.png",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10",
  // },
  // {
  //   iconImg: "images/partners/kenzo.png",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10",
  // },
  // {
  //   iconImg: "images/partners/karus-starter.svg",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10",
  // },
  // {
  //   iconImg: "images/partners/gamefi-2.png",
  //   className: "h-6 xl:h-12 invert-[100%] brightness-0",
  // },
  // {
  //   iconImg: "images/partners/unruly.svg",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  // },
  // {
  //   iconImg: "images/partners/leomark-studios.png",
  //   className: "h-6 xl:h-10",
  // },
  // {
  //   iconImg: "images/partners/panony-group.jpg",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  // },
  // {
  //   iconImg: "images/partners/gotbit.png",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-1",
  // },
  // {
  //   iconImg: "images/partners/okx.svg",
  //   className: "h-6 invert-[100%] brightness-0 mt-3",
  // },
  // {
  //   iconImg: "images/partners/magna.png",
  //   className: "h-5 xl:h-8 invert-[100%] brightness-0 mt-3",
  // },
  // {
  //   iconImg: "images/partners/chainport.png",
  //   className: "h-6 xl:h-10 invert-[100%] brightness-0",
  // },
  // {
  //   iconImg: "images/partners/jin.png",
  //   className: "h-6 xl:h-12 invert-[100%] brightness-0",
  // },
  // {
  //   iconImg: "images/partners/infinity-pad.svg",
  //   className: "h-6 xl:h-12 invert-[100%] brightness-0",
  // },
  // {
  //   iconImg: "images/partners/be-in-crypto.png",
  //   className: "h-6 xl:h-10 invert-[100%] brightness-0 mt-2",
  // },
  // {
  //   iconImg: "images/partners/bitcoinist.png",
  //   className: "h-6 xl:h-8 mt-4",
  // },
  // {
  //   iconImg: "images/partners/gulf-news.png",
  //   className: "h-6 xl:h-10 mt-2",
  // },
  // {
  //   iconImg: "images/partners/news-btc.png",
  //   className: "h-6 xl:h-16",
  // },
  // {
  //   iconImg: "images/partners/yahoo-finance.png",
  //   className: "h-6 xl:h-16",
  // },
  // {
  //   iconImg: "images/partners/coinspeaker.png",
  //   className: "h-6 xl:h-24 feature-icon",
  // },
  // { iconImg: "images/partners/d.png" ,className : "invert-[100%] brightness-0"},
  // { iconImg: "images/partners/Do.png" },
  // { iconImg: "images/partners/C.png" },
  // { iconImg: "images/partners/S.png" },
  // { iconImg: "images/partners/SY.png" },
  // { iconImg: "images/partners/m.png" },
  // { iconImg: "images/partners/U.png" },
  // { iconImg: "images/partners/G.png" },
  {
    iconImg: "images/features/BI_dark_background_white_vertical.png",
    className: "max-w-[175px] max-h-[100px]",
  },
  {
    iconImg: "images/features/logo.png",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/logo_800x149_transp-11.png",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/Outlook-Logo.png",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/PANews_Multicolor_Primary.png",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/Sinalogo1.png",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/sohu_com_logo.jpg",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/tencent-to-invest-70bn-in-fintech-1590569834.jpg",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/tGzNhICKOt0f.gif",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/be-in-crypto.png",
    className: "max-w-[175px] max-h-[100px]",
  },
  {
    iconImg: "images/features/gulf-news.png",
    className: "max-w-[175px] max-h-[100px]",
  },
  {
    iconImg: "images/features/news-btc.png",
    className: "max-w-[175px] max-h-[100px]",
  },
  {
    iconImg: "images/features/yahoo-finance.png",
    className: "max-w-[175px] max-h-[100px]",
  },
  {
    iconImg: "images/features/coinspeaker-logo-vector.png",
    className: "max-w-[175px] max-h-[100px] feature-icon",
  },
  {
    iconImg: "images/features/bitcoinist.png",
    className: "max-w-[175px] max-h-[100px]",
  },
];

function PartnersSlider() {
  return (
    <section>
      <h2 className="font-semibold  text-center mb-5 w-[250px] md:w-[400px] py-3 bg-[#feef01] text-black rounded-md mx-auto">
        Featured In
      </h2>
      <Marquee
        gradient={false}
        className="flex items-center"
        speed={50}
        direction="left"
      >
        {companies.map(({ iconImg, className }, i) => (
          <div
            className="flex justify-center items-center h-[100px] mx-4 lg:mx-6"
            key={i}
          >
            <img
              src={iconImg}
              className={`${className} grayscale-[100%]`}
              alt=""
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default PartnersSlider;
