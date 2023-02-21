import Button from "components/Button";
import InputRow from "components/InputRow";
import Title from "components/Title";
import CalculatorLayout from "layouts/CalculatorLayout";
import React from "react";
import { helper } from "utils/helper";

function Result({
  result,
  amount,
  marketValues
}) {
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
          value={amount * marketValues.circInPercent}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="Your Total USD Value in SCPT:"
          value={helper.currencyFormat(result.totalInvestment)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="Personal % of All SCPT Staked:"
          value={helper.percentFormat(result.myStakePercentage)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="Your Annual Percentage Rate:"
          value={helper.percentFormat(result._yield * 100)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Day:"
          value={helper.numberFormat(result.myDailyPayout)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Daily Rewards USD Value:"
          value={helper.currencyFormat(result.myDailyPayoutMoney)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Week:"
          value={helper.numberFormat(result.myWeeklyPayout)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Weekly Rewards USD Value:"
          value={helper.currencyFormat(result.myWeeklyPayoutMoney)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Month:"
          value= {helper.numberFormat(result.myMonthlyPayout)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Monthly Rewards USD Value:"
          value={helper.currencyFormat(result.myMonthlyPayoutMoney)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Rewards Per Year:"
          value={helper.numberFormat(result.myAnnualPayout)}
        />
        <InputRow
          readonly={true}
          variant={1}
          label="$SPAY Yearly Rewards USD Year:"
          value={helper.currencyFormat(result.myAnnualPayoutMoney)}
        />

        <div className="grid lg:grid-cols-2">
          <div></div>
          <div>
            <Button label="Clear Form" />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

export default Result;
