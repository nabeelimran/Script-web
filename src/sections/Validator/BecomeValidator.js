import Button from "components/Button";
import Title from "components/Title";
import ValidatorCard from "components/ValidatorCard";
import React from "react";

function BecomeValidator() {
  return (
    <section>
      <div className="container">
        <div className="mb-16">
          <div className="mb-3">
            <Title>
              Become a <span className="text-primary">Validator</span>
            </Title>
          </div>
          <p className="heading-sub text-center text-white opacity-80 max-w-[40rem] w-full mx-auto">
            Becoming a validator is a big responsibility with important
            preparation steps. Only start the deposit process when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 mb-16">
          <ValidatorCard
            title="Learn About Your Responsibilities"
            desc="The Script upgrades will only be successful if
            validators understand the risks and
            responsibilities."
            linkTitle="Validator FAQ"
            img="images/validator/faq.png"
          />
          <ValidatorCard
            title="Prep Nodes"
            desc="You’ll need to run on Script node to become
            a validator. Take a look at the checklist to
            prepare yourself and your equipment."
            linkTitle="Heardware Checklist"
            img="images/validator/prep.png"
          />

          <ValidatorCard
            title="Practice On A Testnet"
            desc="We recommend you go through the entire
            process on a testnet first to get comfortable."
            linkTitle="Try the testnet"
            img="images/validator/practice.png"
          />
          <ValidatorCard
            title="Avoid Phishing"
            desc="Make sure you're aware of how to avoid
phishing attacks. We've prepared a list of
things to look out for."
            linkTitle="Phishing Guide"
            img="images/validator/avoid.png"
          />
          <ValidatorCard
            title="Wait To Become Active"
            desc="Once set up, your validator won't become
            active straight away. Use this time to
            complete the checklistand get some extra
            practice on a testnet."
            linkTitle="Complete Checklist"
            img="images/validator/wait.png"
          />
          <ValidatorCard
            title="Time To Deposit"
            desc="Once you're comfortable, you'll go through
generating your keys and depositing your
ETH."
            linkTitle="Heardware Checklist"
            img="images/validator/time.png"
          />
        </div>

        <div className="flex justify-center">
          <Button label="Become a lightning node" />
        </div>
      </div>
    </section>
  );
}

export default BecomeValidator;
