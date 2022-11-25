import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
  {
    iconImg: "images/partners/poolz.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-10",
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
  {
    iconImg: "images/partners/dwf.svg",
    className: "invert-[100%] brightness-0 h-6 xl:h-14",
  },
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
    iconImg: "images/partners/gameFi-cap.png",
    className: "h-4 xl:h-6 invert-[100%] brightness-0",
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
          <div className="flex justify-center mx-4 lg:mx-8">
            <img
              src={iconImg}
              className={`${className} grayscale-[100%]`}
              alt=""
            />
          </div>
        ))}
        {/* <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/Do.png" className="h-10 xl:h-14" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/C.png" className="h-8 xl:h-12" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/S.png" className="h-6 xl:h-8" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/SY.png" className="h-6 xl:h-8" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/m.png" className="h-10 xl:h-14" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/U.png" className="h-6 xl:h-10" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/G.png" className="h-6 xl:h-10" alt="" />
        </div> */}
      </Marquee>
    </section>
  );
}

export default PartnersSlider;
