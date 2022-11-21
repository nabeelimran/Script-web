import AboutCard from "components/AboutCard";
import Button from "components/Button";
import Title from "components/Title";
import React from "react";
import TokenTable from "sections/TokenTable";

function About() {
  return (
    <div>
      <div className="container-two">
        <div className="mb-12 md:mb-16">
          <Title
            className="text-primary text-center mb-4 font-bold"
            variant="48"
          >
            About
          </Title>

          <p className="heading-sub font-medium text-center max-w-[40rem] mx-auto">
            Introducing our team – made up of entrepreneurs, product managers,
            strategists, operators, engineers and evangelists all focused on the
            common goal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <AboutCard
            title="$SCPT"
            desc="Beyond beign a token of goverance for producing and validating blocks, SCPT acts as a direct incentive for users to not only watch and dicover great new content but also to share their bandwidth and memory for the videos, which in effect, will improve the stream quality."
          />
          <AboutCard
            title="$SPAY"
            desc="SPAY however, has a different usecase. it is the operational token of the script network blockchain, as is for rewards for guardians & edge nodes, gas nft trading, off chain rewards offline."
          />
        </div>

        <p className="text-center fs-16px font-semibold leading-1_7 mb-14">
          The Protocol Is Built On Our Own, Script Blockchain. Although Both{" "}
          <br />
          Tokens Have Limited Supply, Script Network Is Focused To Deliver{" "}
          <br />
          Significant Scale Across The Platform And Future Applications For Our
          Users, Investors And Partners.
        </p>

        <div className="flex justify-center mb-10">
          <Button label="Join the conversation on discord" />
        </div>
      </div>

      <div className="bg-shade-dark-blue sm:bg-transparent">
        <div className="container-two">
          <TokenTable />
        </div>
      </div>
    </div>
  );
}

export default About;
