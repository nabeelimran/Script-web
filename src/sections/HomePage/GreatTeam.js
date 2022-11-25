import TeamCard from "components/TeamCard";
import Title from "components/Title";
import React from "react";

const companies = [
  { iconImg: "images/partners/poolz.svg", className: "w-[24vh]" },
  { iconImg: "images/partners/NFTrade.svg" },
  // { iconImg: "images/partners/kommunitas.png" },
  { iconImg: "images/partners/chainlink.svg" },
  { iconImg: "images/partners/dwf.svg", className: "w-[26vh]" },
  { iconImg: "images/partners/arcana-network.svg" },
  { iconImg: "images/partners/yay-games.png", className: "w-[22vh]" },
  { iconImg: "images/partners/gate-io.png" },
  { iconImg: "images/partners/kenzo.png" },
  { iconImg: "images/partners/karus-starter.svg" },
  { iconImg: "images/partners/gameFi-cap.png" },
  // { iconImg: "images/partners/spearad.webp" },
  { iconImg: "images/partners/unruly.svg", className: "w-[26vh]" },
  { iconImg: "images/partners/leomark-studios.png" },
  { iconImg: "images/partners/panony-group.jpg" },
  { iconImg: "images/partners/gotbit.png" },
  // { iconImg: "images/partners/d.png" },
  // { iconImg: "images/partners/Do.png" },
  // { iconImg: "images/partners/C.png" },
  // { iconImg: "images/partners/S.png" },
  // { iconImg: "images/partners/SY.png" },
  // { iconImg: "images/partners/m.png" },
  // { iconImg: "images/partners/U.png" },
  // { iconImg: "images/partners/G.png" },
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
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
          <TeamCard
            title="Abiel Alazar"
            subtitle="Co Founder/Content acq Partnership"
          />
        </div>
      </div>

      <div className="bg-blue-2 ">
        <div className="mt-16 lg:mt-24 container py-10 md:py-16 grid-cols-2 sm:grid-cols-3 grid md:grid-cols-4 items-center gap-x-12 gap-y-6 sm:gap-x-8 sm:gap-y-8">
          {companies.map(({ iconImg, className }, i) => (
            <div className="flex justify-center">
              <img
                key={i}
                src={iconImg}
                className={`${
                  className ? className : "w-[30vh]"
                } grayscale-[100%]`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GreatTeam;
