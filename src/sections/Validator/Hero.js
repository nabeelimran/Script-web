import Button from "components/Button";
import Title from "components/Title";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="container grid lg:grid-cols-2 gap-20 items-center">
        <div className="hidden lg:block relative z-10">
          <img src="images/validator-banner.png" className="w-full" alt="" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 rounded-full bg-[#600991] blur-[200px] -z-20"></div>
        </div>
        <div className="text-center lg:text-left">
          <p className="heading-sub font-semibold text-primary mb-4">
            Earn continuous rewards for providing a public good to the
            community.
          </p>

          <Title
            className="lh-1_2 font-bold mb-10 max-w-[30rem] lg:max-w-none mx-auto lg:mx-0"
            variant="44"
          >
            {/* Become a validator and help secure the future of Script */}
            Run a lightning node and help secure the future of Script Network
          </Title>

          <div className="block lg:hidden max-w-[24rem] mx-auto w-full mb-8 relative z-10">
            <img src="images/validator-banner.png" className="w-full" alt="" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 rounded-full bg-[#600991] blur-[140px] -z-20"></div>
          </div>

          <div className="grid max-w-[16rem] lg:max-w-none mx-auto lg:mx-0 lg:grid-cols-2 gap-4 lg:gap-6">
            <Button
              label="Run a lightning node"
              className="justify-center"
              buttonProps={{
                onClick: () =>
                  window.open("https://whitepaper.script.tv/nodes", "_blank"),
              }}
            />
            <Button
              variant={1}
              label="How to run a node?"
              className="justify-center"
              buttonProps={{
                onClick: () =>
                  window.open("https://whitepaper.script.tv/nodes", "_blank"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
