import Title from "components/Title";
import TransactionHistoryChart from "components/TransactionHistoryChart";
import React, { useEffect, useState } from "react";
import Api from "services/api";
import LocalServices from "services/LocalServices";

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

  const userId = LocalServices.getServices("user")?.userId || null;
  const [videoWatchDuration, setVideoWatchDuration] = useState(0);
  const [lastVideoHistory, setLastVideoHistory] = useState(null);
  const [analyticData, setAnalyticsData] = useState([])

  const getVideoWatchDuration = (userId) => {
    Api.getVideoWatchDuration(userId, 'watch').then((res) => {
      if(res && res.status === 200) {
        setVideoWatchDuration(res?.data?.data?.totalWatchVideoDuration);
      }
    })
  }

  const getLastShowWatchHistory = (userId) => {
    Api.getLastWatchShowHistory(userId, 'watch').then((res) => {
      if(res && res.status === 200) {
        setLastVideoHistory(res?.data?.data);
      }
    })
  }

  const getVideoWatchAnalytics = (userId) => {
    Api.getVideoWatchAnalytics(userId, 'watch').then((res) => {
      if(res && res.status === 200) {
        setAnalyticsData(res?.data?.data || []);
      }
    })
  }

  useEffect(() => {
    if(userId) {
      getVideoWatchDuration(userId)
      getLastShowWatchHistory(userId)
      getVideoWatchAnalytics(userId)
    }
  }, []);

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
              {videoWatchDuration ? videoWatchDuration : 0} ( Min)
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
                  {lastVideoHistory?.videoTitle}
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-semibold">
                {lastVideoHistory?.videoSize || 'N/A'} - {lastVideoHistory?.duration} (min)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <TransactionHistoryChart analyticData={analyticData} />
    </div>
  );
}

export default Analytics;
