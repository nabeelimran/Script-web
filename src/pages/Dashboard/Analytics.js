import Title from "components/Title";
import TransactionHistoryChart from "components/TransactionHistoryChart";
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-[#0E0E0F] py-3 lg:py-5 px-4 lg:px-6 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

function Analytics() {
  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout">
      <div className="mb-12 lg:mb-20">
        <Title variant="24" className="text-primary font-semibold mb-8">
          Analytics
        </Title>

        <div className="grid grid-cols-2 gap-4 sm:gap-0 sm:flex sm:space-x-6">
          <Card>
            <p className="text-center text-xs sm:text-sm xl:text-base font-semibold mb-1">
              Watch Time
            </p>
            <p className="text-center text-xs sm:text-sm xl:text-base font-semibold">
              11 ( Min)
            </p>
          </Card>
          <Card>
            <p className="text-center text-xs sm:text-sm xl:text-base font-semibold mb-1">
              Total Earn
            </p>
            <p className="text-center text-xs sm:text-sm xl:text-base font-semibold">
              0.00$sSPAY
            </p>
          </Card>
          <Card className="col-span-2 sm:col-span-1">
            <div className="flex items-center space-x-5">
              <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-lg bg-[#171717]"></div>
              <div>
                <p className="text-xs sm:text-sm xl:text-base font-semibold mb-1">
                  M.C Escher
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-semibold">
                  01:04:15 - 48 (min)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <TransactionHistoryChart />
    </div>
  );
}

export default Analytics;
