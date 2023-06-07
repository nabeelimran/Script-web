import Button from "components/Button";
import InputGroup from "components/InputGroup";
import InputRow from "components/InputRow";
import SelectGroup from "components/SelectGroup";
import Title from "components/Title";
import CalculatorLayout from "layouts/CalculatorLayout";
import React from "react";

function StakingCalculator({
  suppyData,
  marketValues,
  calculateReward,
  changeFrequency,
  checkAmount,
  checkRate,
  checkYear,
  amount,
}) {
  return (
    <CalculatorLayout>
      <div className="mb-12 lg:mb-16">
        <div className="mb-4">
          <Title>
            <span className="text-primary">Script (SCPT) staking calculator</span>
          </Title>
        </div>

        <h4 className="heading-sub text-center text-white">
            Calculate your Script staking rewards
        </h4>
      </div>

      <div className="space-y-6 lg:space-y-4">
        <div className="grid gap-4 lg:gap-4 lg:grid-cols-2 items-center mb-5">
            <InputGroup
                label="Staking Amount"
                placeholder={0}
                id="amount"
                changeAmount={checkAmount}
                value={amount}
                type="number"
            />
            <SelectGroup
                label="Reward frequency"
                id="frequency"
                changeFrequency={changeFrequency}
            />
            <InputGroup
                label="Reward rate (%)"
                type="number"
                id="rate"
                changeAmount={checkRate}
            />
            <InputGroup
                label="Years to calculate"
                type="number"
                id="year"
                changeAmount={checkYear}
            />
        </div>

        <div className="grid lg:grid-cols-1">
          <div></div>
          <div className="flex justify-center mt-8">
            <Button
              label="Calculate earnings"
              buttonProps={{
                onClick: () => {
                  calculateReward()
                },
              }}
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

export default StakingCalculator;
