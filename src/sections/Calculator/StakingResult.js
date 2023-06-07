import Button from "components/Button";
import InputRow from "components/InputRow";
import Title from "components/Title";
import CalculatorLayout from "layouts/CalculatorLayout";
import React from "react";
import { helper } from "utils/helper";

function StakingResult({
  stakingCalcResult,
  clearForm
}) {
  return (
    <CalculatorLayout>
      <div className="mb-8 lg:mb-12">
        <Title>
          <span className="text-primary">Results</span>
        </Title>
      </div>
      <div className="space-y-6 lg:space-y-5">
        
        <div className="bg-primary space-y-6 lg:space-y-5 p-5 rounded">
          <p className="flex justify-between">
            <span className="text-black">
              Ending balance
            </span>
            <span className="text-black">
              {stakingCalcResult?.amount}
            </span>
          </p>
          <hr className="text-black" />
          <p className="flex justify-between">
            <span className="text-black">
              of which is reward
            </span>
            <span className="text-black">
              {stakingCalcResult?.interest}
            </span>
          </p>
        </div>
        <div>
          {
            stakingCalcResult.stakingInterval && stakingCalcResult.stakingInterval.length > 0 ? 
              <table className="stake-nodes-table evenBg text-left rounded-lg w-full">
                <thead>
                  <tr>
                    <th className="text-[#ffef00] py-4">Year</th>
                    <th className="text-[#ffef00] py-4">Reward (SCRIPT NETWORK)</th>
                    <th className="text-[#ffef00] py-4">Balance (SCRIPT NETWORK)</th>
                  </tr>
                </thead>
                <tbody>
                  {stakingCalcResult.stakingInterval && stakingCalcResult.stakingInterval.length > 0
                    ? stakingCalcResult.stakingInterval.map((data, index) => (
                        <tr key={index}>
                          <td className="py-4">
                            {index+1}
                          </td>
                          <td className="py-4">
                            {data.interest}
                          </td>
                          <td className="py-4">
                            {data.amount}
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            : null
          }
          
        </div>

        {/* <div className="grid lg:grid-cols-2">
          <div></div>
          <div>
            <Button label="Clear Form" buttonProps={{onClick:()=>{clearForm()}}}/>
          </div>
        </div> */}
      </div>
    </CalculatorLayout>
  );
}

export default StakingResult;
