import TelevisionCard from "components/TelevisionCard";
import Title from "components/Title";
import React from "react";

function Television() {
  return (
    <section>
      <div className="container">
        <div className="mb-10 lg:mb-16">
          <div className="mb-4">
            <Title>
              Television <span className="text-primary">Re</span> Imagined
            </Title>
          </div>
          <p className="heading-sub text-white opacity-50 text-center max-w-[40rem] mx-auto">
            Script Network focuses on creating game changing products to improve
            the experience for content owners, studios and users worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <TelevisionCard
            subtitle="Web2"
            title={
              <p className="text-center text-white fs-24px font-semibold">
                Current Market
              </p>
            }
          >
            <div className="space-y-3 text-center">
              <p className="fs-16px text-white font-medium opacity-80">
                Slow Payouts
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                No rewards to users
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                No control on platforms
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                Complex advertising
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                Expensive storage
              </p>
            </div>
          </TelevisionCard>
          <TelevisionCard
            subtitle="Web3"
            title={
              <img
                src="images/logos/logo-black.png"
                className="max-w-[40px] mx-auto invert"
                alt=""
              />
            }
          >
            <div className="space-y-3 text-center">
              <p className="fs-16px text-white font-medium opacity-80">
                Faster Payments to Content Owners
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                Rewards to Users
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                On-chain content governance
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
                On-chain advertising
              </p>
              <p className="fs-16px text-white font-medium opacity-80">
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
