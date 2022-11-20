import Button from "components/Button";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-20">
        <div>
          <img src="images/validator-banner.png" className="w-full" alt="" />
        </div>
        <div>
          <p className="heading-sub font-semibold text-primary mb-4">
            Earn continuous rewards for providing a public good to the
            community.
          </p>

          <h1 className="text-6xl lh-1_2 text-left text-white font-bold mb-10">
            Become a validator and help secure the future of Script
          </h1>

          <div className="grid grid-cols-2 gap-6">
            <Button
              label="Become a lightning node"
              className="justify-center"
            />
            <Button
              variant={1}
              label="Thinking about staking?"
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
