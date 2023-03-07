import TeamCard from "components/TeamCard";
import Title from "components/Title";
import React from "react";

const companies = [
  {
    iconImg: "images/partners/NFTrade.svg",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/chainlink.svg",
    className: "w-[18vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/newone.png",
    className: "w-[18vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/arcana-network.svg",
    className: "w-[20vh] invert-[100%] brightness-0",
  },

  {
    iconImg: "images/partners/gate-io.png",
    className: "w-[18vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/kenzo.png",
    className: "w-[18vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/karus-starter.svg",
    className: "w-[18vh] invert-[100%] brightness-0",
  },

  {
    iconImg: "images/partners/gamefi-2.png",
    className: "w-[24vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/unruly.svg",
    className: "w-[17vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/leomark-studios.png",
    className: "w-[24vh] grayscale-[100%]",
  },
  {
    iconImg: "images/partners/panony-group.jpg",
    className: "w-[22vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/gotbit.png",
    className: "w-[22vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/yay-games.png",
    className: "w-[14vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/jin.png",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/k.png",
    className: "w-[26vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/magna.png",
    className: "w-[20vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/chainport.png",
    className: "w-[24vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/space-id.png",
    className: "w-[18vh]",
  },
  {
    iconImg: "images/partners/bitcoin-trading.png",
    className: "w-[30vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/infinity-pad.svg",
    className: "w-[30vh] invert-[100%] brightness-0",
  },
  {
    // iconImg: "images/partners/poolz.svg",
    iconImg: "images/partners/push-logo.png",
    className: "w-[9vh] invert-[100%] brightness-0",
  },
  {
    iconImg: "images/partners/bitgret_logo.png",
    className: "w-[8vh] invert-[100%] brightness-0",
  },
];

const team = [
  {
    name: "Abiel Alazar",
    img: "images/team/Abiel-Alazar.png",
    designation: "Co Founder - Content + Operations",
  },
  {
    name: "Akeem Ojuko",
    img: "images/team/Akeem-Ojuko.png",
    designation: "Co Founder/Product+Growth",
  },

  {
    name: "Roomani Bajaj",
    img: "images/team/Roomani-Bajaj.avif",
    designation: "CTO",
  },
  {
    name: "Antoinette Chaela Icabales",
    img: "images/team/Antoinette-Chaela-Icabales-2.JPG",
    designation: "Head of Marketing",
  },
  {
    name: "Lili Hamdan",
    img: "images/team/Lili-Hamdan.png",
    designation: "Marketing Comms",
  },
  {
    name: "Prem Ranjan",
    img: "images/team/prem.jpeg",
    designation: "Engineer",
  },
  {
    name: "Shiv Kumar",
    img: "images/team/Shiv-Kumar.png",
    designation: "Engineer",
  },
  {
    name: "Maxwell Chan",
    img: "images/team/Maxwell-Chan.jpeg",
    designation: "Advisor",
  },

  {
    name: "Andrew Fennell",
    img: "images/team/Andrew-Fennell.png",
    designation: "Advisor",
  },
  {
    name: "Michael Terpin",
    img: "images/team/Michael-Terpin.png",
    designation: "Advisor",
  },

  {
    name: "Yule Caise",
    img: "images/team/Yule-Caise.png",
    designation: "Advisor",
  },
  {
    name: "Pekka Kelkka",
    img: "images/team/Pekka-Kelkka.png",
    designation: "Advisor",
  },
];

function GreatTeam() {
  return (
    <section>
      <div className="container">
        <div className="mb-5">
          <Title>
            Meet <span className="text-primary">Our Team</span>
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
              key={i}
              title={item.name}
              subtitle={item.designation}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <div className="bg-blue-2 mt-16 lg:mt-24 py-10 md:py-16">
        <div className="mb-12 container">
          <Title>
            Our <span className="text-primary">Partners</span> and{" "}
            <span className="text-primary">Investors</span>
          </Title>
        </div>

        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-x-12 gap-y-6 sm:gap-x-8 sm:gap-y-10">
          {companies.map(({ iconImg, className }, i) => (
            <div className="flex justify-center">
              <img
                key={i}
                src={iconImg}
                className={`${className ? className : "w-[20vh]"}`}
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
