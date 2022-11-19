import TeamCard from "components/TeamCard";
import React from "react";

function GreatTeam() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center text-5xl font-bold text-white mb-5">
          Meet Our <span className="text-primary">Great Team</span>
        </h1>

        <p className="text-white text-center text-xl font-medium mx-auto max-w-[50rem]">
          Introducing our team – made up of entrepreneurs, product managers,
          strategists, operators, engineers and evangelists all focused on the
          common goal.
        </p>

        <div className="py-6 flex items-center justify-center flex-wrap border-b-1px mb-14">
          <img src="images/nike.png" alt="" className="m-4" />
          <img src="images/spotify.png" alt="" className="m-4" />
          <img src="images/ea.png" alt="" className="m-4" />
          <img src="images/sony.png" alt="" className="m-4" />
          <img src="images/bars.png" alt="" className="m-4" />
          <img src="images/paypal.png" alt="" className="m-4" />
          <img src="images/hbo.png" alt="" className="m-4" />
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-y-10 gap-x-8">
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
        <div className="mt-24 container py-16 grid grid-cols-4 items-center gap-8">
          <div className="flex justify-center">
            <img src="images/partners/d.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/Do.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/C.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/S.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/SY.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/m.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/U.png" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="images/partners/G.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreatTeam;
