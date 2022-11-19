import TelevisionCard from "components/TelevisionCard";
import React from "react";

function Television() {
  return (
    <section>
      <div className="container">
        <div className="mb-16">
          <h1 className="text-center text-5xl font-bold text-white mb-4">
            Television <span className="text-primary">Re</span> Imagined
          </h1>
          <p className="text-white opacity-50 text-xl text-center max-w-[50rem] mx-auto">
            Script Network focuses on creating game changing products to improve
            the experience for content owners, studios and users worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <TelevisionCard
            subtitle="Web2"
            title={
              <p className="text-center text-white text-xl font-semibold">
                Current Market
              </p>
            }
          >
            <div className="space-y-3">
              <p className="text-xl text-white font-medium opacity-80">
                Slow Payouts
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                No rewards to users
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                No control over any platform
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                decisions
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                Complex advertising
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                Expensive storage
              </p>
            </div>
          </TelevisionCard>
          <TelevisionCard
            subtitle="Web3"
            title={
              <img
                src="images/logo.svg"
                className="max-w-[130px] mx-auto"
                alt=""
              />
            }
          >
            <div className="space-y-3">
              <p className="text-xl text-white font-medium opacity-80">
                Faster Payments to Content Owners
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                Rewards to Users
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                On-chain content governance
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                On-chain advertising
              </p>
              <p className="text-xl text-white font-medium opacity-80">
                dStorage - cutting costs by up to 85%
              </p>
            </div>
          </TelevisionCard>
        </div>
      </div>
    </section>
  );
}

export default Television;
