import TeamCard from "components/TeamCard";
import Title from "components/Title";
import React from "react";

const companies = [
  {
    iconImg: "images/partners/poolz.svg",
    className: "w-[18vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/NFTrade.svg",
    className: "w-[22vh] invert-[100%] brightness-0",
  },
  // { iconImg: "images/partners/kommunitas.png" },
  {
    iconImg: "images/partners/chainlink.svg",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/dwf.svg",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/arcana-network.svg",
    className: "w-[22vh] invert-[100%] brightness-0",
  },

  {
    iconImg: "images/partners/gate-io.png",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/kenzo.png",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/karus-starter.svg",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/gameFi-cap.png",
    className: "w-[28vh] invert-[100%] brightness-0",
  },
  // { iconImg: "images/partners/spearad.webp" },
  {
    iconImg: "images/partners/unruly.svg",
    className: "w-[19vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/leomark-studios.png",
    className: "w-[26vh] grayscale-[100%]",
  },
  {
    iconImg: "images/partners/panony-group.jpg",
    className: "w-[24vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/gotbit.png",
    className: "w-[24vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/yay-games.png",
    className: "w-[16vh] invert-[100%] brightness-0",
  },
  // { iconImg: "images/partners/d.png" },
  // { iconImg: "images/partners/Do.png" },
  // { iconImg: "images/partners/C.png" },
  // { iconImg: "images/partners/S.png" },
  // { iconImg: "images/partners/SY.png" },
  // { iconImg: "images/partners/m.png" },
  // { iconImg: "images/partners/U.png" },
  // { iconImg: "images/partners/G.png" },
];

const team = [
  {
    name: "Abiel Alazar",
    img: "images/team/Abiel-Alazar.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Akeem Ojuko",
    img: "images/team/Akeem-Ojuko.png",
    designation: "Co Founder/Content acq Partnership",
  },

  {
    name: "Andrew Fennell",
    img: "images/team/Andrew-Fennell.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Antoinette Chaela Icabales",
    img: "images/team/Antoinette-Chaela-Icabales.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Lili Hamdan",
    img: "images/team/Lili-Hamdan.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Maxwell Chan",
    img: "images/team/Maxwell-Chan.jpeg",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Michael Terpin",
    img: "images/team/Michael-Terpin.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Pekka Kelkka",
    img: "images/team/Pekka-Kelkka.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Roomani Bajaj",
    img: "images/team/Roomani-Bajaj.avif",
    designation: "Co Founder/Content acq Partnership",
  },

  {
    name: "Shiv Kumar",
    img: "images/team/Shiv-Kumar.png",
    designation: "Co Founder/Content acq Partnership",
  },
  {
    name: "Yule Caise",
    img: "images/team/Yule-Caise.png",
    designation: "Co Founder/Content acq Partnership",
  },
];

function GreatTeam() {
  return (
    <section>
      <div className="container">
        <div className="mb-5">
          <Title>
            Meet Our <span className="text-primary">Great Team</span>
          </Title>
        </div>

        <p className="heading-sub text-white text-center font-medium mx-auto max-w-[50rem]">
          Introducing our team – made up of entrepreneurs, product managers,
          strategists, operators, engineers and evangelists all focused on the
          common goal.
        </p>

        <div className="pb-2 xl:pb-6 pt-6 flex items-center justify-center flex-wrap border-b-1px mb-10 md:mb-14">
          <img
            src="images/nike.png"
            alt=""
            className="w-[11vh] xl:w-auto m-3 md:m-4"
          />
          <img
            src="images/spotify.png"
            alt=""
            className="w-[11vh] xl:w-auto m-3 md:m-4"
          />
          <img
            src="images/ea.png"
            alt=""
            className="w-[11vh] xl:w-auto m-3 md:m-4"
          />
          <img
            src="images/sony.png"
            alt=""
            className="w-[11vh] xl:w-auto m-3 md:m-4"
          />
          <img
            src="images/bars.png"
            alt=""
            className="w-[11vh] xl:w-auto m-3 md:m-4"
          />
          <img
            src="images/paypal.png"
            alt=""
            className="w-[11vh] xl:w-auto m-3 md:m-4"
          />
          <img
            src="images/hbo.png"
            alt=""
            className="w-[9vh] xl:w-auto m-3 md:m-4"
          />
        </div>

        <div className="grid w-fit mx-auto md:w-full md:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-y-10 gap-x-8">
          {team.map((item, i) => (
            <TeamCard
              title={item.name}
              subtitle={item.designation}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <div className="bg-blue-2 ">
        <div className="mt-16 lg:mt-24 container py-10 md:py-16 grid-cols-2 sm:grid-cols-3 grid md:grid-cols-4 items-center gap-x-12 gap-y-6 sm:gap-x-8 sm:gap-y-10">
          {companies.map(({ iconImg, className }, i) => (
            <div className="flex justify-center">
              <img
                key={i}
                src={iconImg}
                className={`${className ? className : "w-[30vh]"}`}
                alt=""
              />
              {/* grayscale-[100%] */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GreatTeam;
