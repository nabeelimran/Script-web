import TeamCard from "components/TeamCard";
import Title from "components/Title";
import React from "react";

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
          <div className="flex justify-center">
            <img src="images/partners/d.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/Do.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/C.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/S.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/SY.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/m.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/U.png" className="w-[30vh]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/G.png" className="w-[30vh]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreatTeam;
