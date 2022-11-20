import Button from "components/Button";
import InputRow from "components/InputRow";
import Title from "components/Title";
import CalculatorLayout from "layouts/CalculatorLayout";
import React from "react";

function Result() {
  return (
    <CalculatorLayout>
      <div className="mb-8 lg:mb-12">
        <Title>
          <span className="text-primary">Result</span>
        </Title>
      </div>

      <div className="space-y-6 lg:space-y-5">
        <InputRow
          readonly={true}
          variant={1}
          label="Total Staked SCPT Coins:"
          value="0.00"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="Your Total USD Value in SCPT:"
          value="0.10"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="Personal % of All SCPT Staked:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="Your Annual Percentage Rate:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Day:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Daily Rewards USD Value:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Week:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Weekly Rewards USD Value:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Month:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Monthly Rewards USD Value:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Year:"
          value="NaN%"
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Yearly Rewards USD Year:"
          value="NaN%"
        />

        <div className="grid lg:grid-cols-2">
          <div></div>
          <div>
            <Button label="Clear from" />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

export default Result;
