import Button from "components/Button";
import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
  {
    iconImg: "images/partners/push-logo.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-20",
  },
  {
    iconImg: "images/partners/bitgret_logo.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-14",
  },
  {
    iconImg: "images/partners/blockApex.png",
    className: "w-[24vh]",
  },
  {
    iconImg: "images/partners/xord.jpg",
    className: "w-[18vh] mt-4",
  },
  {
    iconImg: "images/partners/NFTrade.svg",
    className: "invert-[100%] brightness-0 h-10 xl:h-16",
  },
  {
    iconImg: "images/partners/chainlink.svg",
    className: "invert-[100%] brightness-0 h-8 xl:h-12 mt-2",
  },
  {
    iconImg: "images/partners/arcana-network.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  },
  {
    iconImg: "images/partners/yay-games.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  },
  {
    iconImg: "images/partners/gate-io.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/kenzo.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/karus-starter.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/gamefi-2.png",
    className: "h-6 xl:h-12 invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/unruly.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  },
  {
    iconImg: "images/partners/leomark-studios.png",
    className: "h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/panony-group.jpg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-2",
  },
  {
    iconImg: "images/partners/gotbit.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-10 mt-1",
  },
  {
    iconImg: "images/partners/okx.svg",
    className: "h-6 invert-[100%] brightness-0 mt-3",
  },
  {
    iconImg: "images/partners/magna.png",
    className: "h-5 xl:h-8 invert-[100%] brightness-0 mt-3",
  },
  {
    iconImg: "images/partners/chainport.png",
    className: "h-6 xl:h-10 invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/jin.png",
    className: "h-6 xl:h-12 invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/infinity-pad.svg",
    className: "h-6 xl:h-12 invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/be-in-crypto.png",
    className: "h-6 xl:h-10 invert-[100%] brightness-0 mt-2",
  },
  {
    iconImg: "images/partners/bitcoinist.png",
    className: "h-6 xl:h-8 mt-4",
  },
  {
    iconImg: "images/partners/gulf-news.png",
    className: "h-6 xl:h-10 mt-2",
  },
  {
    iconImg: "images/partners/news-btc.png",
    className: "h-6 xl:h-16",
  },
  {
    iconImg: "images/partners/yahoo-finance.png",
    className: "h-6 xl:h-16",
  },
  {
    iconImg: "images/partners/coinspeaker.png",
    className: "h-6 xl:h-24 feature-icon",
  },
  // { iconImg: "images/partners/d.png" ,className : "invert-[100%] brightness-0"},
  // { iconImg: "images/partners/Do.png" },
  // { iconImg: "images/partners/C.png" },
  // { iconImg: "images/partners/S.png" },
  // { iconImg: "images/partners/SY.png" },
  // { iconImg: "images/partners/m.png" },
  // { iconImg: "images/partners/U.png" },
  // { iconImg: "images/partners/G.png" },
];

function PartnersSlider() {
  return (
    <section>
      <h2 className="font-semibold  text-center mb-5 w-[400px] py-3 bg-[#feef01] text-black rounded-md mx-auto">
        Featured In
      </h2>
      <Marquee
        gradient={false}
        className="flex items-center"
        speed={50}
        direction="left"
      >
        {companies.map(({ iconImg, className = "h-6 xl:h-10" }, i) => (
          <div className="flex justify-center mx-4 lg:mx-8" key={i}>
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
