import Button from "components/Button";
import Title from "components/Title";
import React from "react";

const SwapBox = ({ children }) => {
  return (
    <div className="h-[70px] bg-primary rounded-lg flex items-center justify-center text-center">
      {children}
    </div>
  );
};

const SwapDivider = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="h-[1px] bg-white opacity-60"></div>
      <img src="/images/swap-icon.svg" className="w-[20px]" alt="" />
      <div className="h-[1px] bg-white opacity-60"></div>
    </div>
  );
};

function TokenMapping() {
  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout min-h-screen flex flex-col">
      <div className="mb-10 space-y-2">
        <Title className="font-semibold" variant="24">
          Token Mapping
        </Title>
        <p className="text-base">Convert your sSPAY to SPAY</p>
      </div>

      <div className="space-y-6 max-w-[500px] mx-auto w-full flex flex-col justify-center">
        <SwapBox>
          <Title
            variant="20"
            className="text-center text-black font-semibold uppercase"
          >
            sSPAY TOKEN
          </Title>
        </SwapBox>
        <SwapDivider />
        <SwapBox>
          <Title
            variant="20"
            className="text-center text-black font-semibold uppercase"
          >
            SPAY TOKEN
          </Title>
        </SwapBox>

        <div className="flex justify-center pt-2">
          <Button label="SWAP" className="justify-center hover:opacity-60" />
        </div>
      </div>
    </div>
  );
}

export default TokenMapping;
