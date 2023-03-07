import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
  {
    // iconImg: "images/partners/poolz.svg",
    iconImg: "images/partners/push-logo.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-20",
  },
  {
    iconImg: "images/partners/bitgret_logo.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-14",
  },
  {
    iconImg: "images/partners/NFTrade.svg",
    className: "invert-[100%] brightness-0 h-10 xl:h-16",
  },
  // { iconImg: "images/partners/kommunitas.png" , className : "invert-[100%] brightness-0"},
  {
    iconImg: "images/partners/chainlink.svg",
    className: "invert-[100%] brightness-0 h-8 xl:h-12",
  },
  // {
  //   iconImg: "images/partners/dwf.svg",
  //   className: "invert-[100%] brightness-0 h-6 xl:h-14",
  // },
  {
    iconImg: "images/partners/arcana-network.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/yay-games.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
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
  // { iconImg: "images/partners/spearad.webp" },
  {
    iconImg: "images/partners/unruly.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/leomark-studios.png",
    className: "h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/panony-group.jpg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/gotbit.png",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
  },
  {
    iconImg: "images/partners/k.png",
    className: "h-6 xl:h-10 invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/magna.png",
    className: "h-5 xl:h-8 invert-[100%] brightness-0",
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
