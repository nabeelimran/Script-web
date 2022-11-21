import Button from "components/Button";
import InputRow from "components/InputRow";
import Title from "components/Title";
import CalculatorLayout from "layouts/CalculatorLayout";
import React from "react";

function StakingInformation() {
  return (
    <CalculatorLayout>
      <div className="mb-12 lg:mb-16">
        <div className="mb-4">
          <Title>
            <span className="text-primary">Staking Information</span>
          </Title>
        </div>

        <h4 className="heading-sub text-center text-white">
          Current Circulating Supply: 1000216.0000
        </h4>
      </div>

      <div className="space-y-6 lg:space-y-4">
        <InputRow label="Enter Your SCPT Amount:" placeholder="0" id="amount" />
        <InputRow
          label="% Staked of Total Circulating Supply:"
          placeholder="0.10"
          id="staked"
        />
        <InputRow
          label="Enter Your SCPT Amount:"
          placeholder="0.025"
          id="scpt"
        />
        <InputRow
          label="Enter Your SCPT Amount:"
          placeholder="0.01"
          id="your"
        />

        <div className="grid lg:grid-cols-2">
          <div></div>
          <div>
            <Button label="Calculate earnings" />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

export default StakingInformation;
