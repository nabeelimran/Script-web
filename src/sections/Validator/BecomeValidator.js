import Button from "components/Button";
import Title from "components/Title";
import ValidatorCard from "components/ValidatorCard";
import React from "react";

function BecomeValidator() {
  return (
    <section>
      <div className="container">
        <div className="mb-10 lg:mb-16">
          <div className="mb-3">
            <Title>
              Run a <span className="text-primary">Validator Node</span>
            </Title>
          </div>
          <p className="heading-sub text-center text-white opacity-80 max-w-[40rem] w-full mx-auto">
            Becoming a validator is a big responsibility with important
            preparation steps. Only start the deposit process when you're ready.
          </p>
        </div>

        <div className="validator-grid">
          <ValidatorCard
            title="Learn about the requirements."
            desc="Script Network requires validators and lightning nodes to understand the ecosystem, reward mechanism and the risks. "
            linkTitle="Validator Information"
            img="images/validator/faq.png"
          />
          <ValidatorCard
            title="Run a Node."
            desc="To run a node you'll need to have a system beyond the minimum requirements, amongst a few other things. View more information on there, here"
            linkTitle="Hardware Checklist"
            img="images/validator/prep.png"
          />

          <ValidatorCard
            title="Head to Testnet"
            desc="Head to our Testnet and take part in buying, selling and trading tokens before our launch, alongside running a node. "
            linkTitle="Try the testnet"
            img="images/validator/practice.png"
          />
          {/* <ValidatorCard
            title="Avoid Phishing"
            desc="Make sure you're aware of how to avoid
phishing attacks. We've prepared a list of
things to look out for."
            linkTitle="Phishing Guide"
            img="images/validator/avoid.png"
          /> */}
          {/* <ValidatorCard
            title="Wait To Become Active"
            desc="Once set up, your validator won't become
            active straight away. Use this time to
            complete the checklistand get some extra
            practice on a testnet."
            linkTitle="Complete Checklist"
            img="images/validator/wait.png"
          /> */}
          <ValidatorCard
            title="Deposit SCPT."
            desc="Once you're all set up, deposit tokens to stake to begin running a validator or lightning node. "
            linkTitle="Hardware Checklist"
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
