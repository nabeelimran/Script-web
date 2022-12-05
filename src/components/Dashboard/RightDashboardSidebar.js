import UpperRoot from "components/UpperRoot";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { Link } from "react-router-dom";

const DividerLine = () => {
  return <div className="w-full h-[1px] bg-[#202020]"></div>;
};

const HeadingSmall = ({ children, className }) => {
  return (
    <p className={`${className} text-sm font-medium opacity-60`}>{children}</p>
  );
};

function RightDashboardSidebar({ width, breakpointMatched, state }) {
  const { getter, setter } = state;
  const sidebarRef = OutsideClickDetector(() => setter && setter(false));

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
                src="images/dashboard/message.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link className="block w-[12px]">
              <img
                src="images/dashboard/notification.svg"
                className="w-full"
                alt=""
              />
            </Link>
            <Link className="block w-[14px]">
              <img
                src="images/dashboard/setting.svg"
                className="w-full"
                alt=""
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-medium text-sm">Peter Parker</p>
            <div className="w-[34px] rounded-full h-[34px] relative">
              <div className="w-[10px] h-[10px] rounded-full bg-[#3FC864] absolute top-0 right-0"></div>
              <img
                src="images/dashboard/user.png"
                className="rounded-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="px-6 space-y-1">
            <p className="fs-16px font-medium">Your Action Items</p>
            <p className="fs-16px font-medium">Your Journey Start Here!</p>
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
            <p className="fs-16px font-bold">5,400 Minutes</p>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall className="mb-2">
              Minutes watched in the last 24 hours
            </HeadingSmall>

            <p className="fs-16px font-bold">24 Minutes</p>
          </div>

          <DividerLine />

          <div className="px-6 flex items-center space-x-6">
            <HeadingSmall>Most watched channel:</HeadingSmall>

            <div className="flex-1">
              <img
                src="images/tv/cultured-one.svg"
                className="w-full min-w-[96px]"
                alt=""
              />
            </div>
          </div>

          <DividerLine />

          <div className="px-6 flex items-center space-x-4 justify-between">
            <div>
              <p className="fs-16px font-medium">#535435</p>
              <HeadingSmall>Favourite Glasses</HeadingSmall>
            </div>

            <img src="images/cool-glasses.png" className="w-[90px]" alt="" />
          </div>
        </div>
      </div>
    </UpperRoot>
  );
}

export default RightDashboardSidebar;
