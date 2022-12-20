import DividerLine from "components/DividerLine";
import HeadingSmall from "components/HeadingSmall";
import UpperRoot from "components/UpperRoot";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { Link } from "react-router-dom";
import LocalServices from "services/LocalServices";

function RightDashboardSidebar({
  width,
  breakpointMatched,
  state,
  profile,
  videoWatchDuration,
  lastDayWatchVideoDuration,
  lastVideoHistory }) {
  const { getter, setter } = state;
  const sidebarRef = OutsideClickDetector(() => setter && setter(false));
  const token = LocalServices.getServices("token");

  return (
    <UpperRoot>
      <div
        ref={sidebarRef}
        className="h-screen overflow-y-auto bg-[#0E0E0F] fixed top-0 right-0 dashboard-top-spacing dashboard-bottom-spacing transition-all duration-300 z-[200]"
        style={{
          width: width,
          transform: breakpointMatched
            ? null
            : `${getter ? "translateX(0)" : `translateX(${width})`}`,
        }}
      >
        <div className="px-6 flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Link className="block w-[14px]">
              <img
                src="/images/dashboard/message.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link className="block w-[12px]">
              <img
                src="/images/dashboard/notification.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link className="block w-[14px]">
              <img
                src="/images/dashboard/setting.svg"
                className="w-full"
                alt=""
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-medium text-sm">
              {profile?.firstName ? profile?.firstName : ''}
            </p>
            <div className="w-[34px] rounded-full h-[34px] relative">
              <div className="w-[10px] h-[10px] rounded-full bg-[#3FC864] absolute top-0 right-0"></div>
              <img
                src={profile?.profile?.urlProfileImage ? profile?.profile?.urlProfileImage : "/images/dashboard/user.png"} 
                className="rounded-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="px-6 space-y-1">
            <p className="text-sm xl:text-base font-medium">
              Your Action Items
            </p>
            <p className="text-sm xl:text-base font-medium">
              Your Journey Start Here!
            </p>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall> Streaming now on IRL:</HeadingSmall>

            <div className="h-[30px]"></div>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall className="mb-2">
              Minutes watched in total
            </HeadingSmall>
            <p className="text-sm xl:text-base font-bold">
              { token ? `${videoWatchDuration ? videoWatchDuration : 0} Minutes` : `N/A` }
            </p>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall className="mb-2">
              Minutes watched in the last 24 hours
            </HeadingSmall>

            <p className="text-sm xl:text-base font-bold">
            { token ? `${lastDayWatchVideoDuration ? lastDayWatchVideoDuration : 0} Minutes` : `N/A` }
            </p>
          </div>

          <DividerLine />

          <div className="px-6 flex items-center space-x-6">
            <HeadingSmall>Most watched channel:</HeadingSmall>

            <div className="flex-1">
            {token && lastVideoHistory?.channelImageLink ? (
                <img
                  src={lastVideoHistory?.channelImageLink}
                  className="w-[90px]"
                  alt={lastVideoHistory?.channelName ? lastVideoHistory?.channelName : 'default'}
                />
              ) : 'N/A'}
            </div>
          </div>

          <DividerLine />

          <div className="px-6 flex items-center space-x-4 justify-between">
            <div>
              <p className="text-sm xl:text-base font-medium">N/A</p>
              <HeadingSmall>Favourite Glasses</HeadingSmall>
            </div>

            <img
              src="/images/cool-glasses.png"
              className="w-[60px] xl:w-[90px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </UpperRoot>
  );
}

export default RightDashboardSidebar;
