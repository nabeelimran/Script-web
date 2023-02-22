import React from "react";
import PageLink from "components/Wallet/PageLink";

const Wallet = () => {
  return (
    <div className="bg-[#151515] rounded-2xl container pl-5">
      <div className="bg-white py-4 space-y-1">
        <PageLink
          link=""
          label="Wallet"
          img="wallet.svg"
          //   onClick={() => setter(false)}
        />
        <PageLink
          link=""
          label="Send"
          img="send.svg"
          //   onClick={() => setter(false)}
        />
        <PageLink
          link=""
          label="Receive"
          img=""
          //   onClick={() => setter(false)}
        />
        <PageLink
          link=""
          label="Stakes"
          img=""
          //   onClick={() => setter(false)}
        />
        <PageLink
          link=""
          label="Rewards"
          img=""
          //   onClick={() => setter(false)}
        />
        <PageLink
          link=""
          label="Contract"
          img=""
          //   onClick={() => setter(false)}
        />
        <PageLink
          link=""
          label="Settings"
          img=""
          //   onClick={() => setter(false)}
        />
      </div>

      <div></div>
    </div>
  );
};

export default Wallet;
