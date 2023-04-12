import Button from "components/Button";
import DividerLine from "components/DividerLine";
import HeadingSmall from "components/HeadingSmall";
import { ToastMessage } from "components/ToastMessage";
import UpperRoot from "components/UpperRoot";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleNotificationBell } from "redux/reducers/Notification_State";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import LocalServices from "services/LocalServices";
import { isBnbUser } from "utils/helper";

function RightDashboardSidebar({
  width,
  breakpointMatched,
  state,
  profile,
  videoWatchDuration,
  lastDayWatchVideoDuration,
  lastVideoHistory,
}) {
  const { getter, setter } = state;
  const sidebarRef = OutsideClickDetector(() => setter && setter(false));
  const token = LocalServices.getServices("token");

  const { accountAddress } = useSelector((state) => state.metamask_state);
  const { isBellShown } = useSelector((state) => state.Notification_State)
  const dispatch = useDispatch();

  const handleBellIcon = () => {
    dispatch(toggleNotificationBell(false));
  }

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
            <Link className="block w-[12px]" to={"/dashboard/notifications"} onClick={handleBellIcon}>
              {
                isBellShown ?
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9944 7.87543C12.6765 7.95676 12.3433 8 12 8C11.9965 8 11.993 8 11.9894 7.99999V8.21674C11.9894 9.12596 12.133 10.0352 12.4321 10.9085L12.803 12.0211H3.17241V12.0091L3.54328 10.8965C3.8304 10.0232 3.98593 9.114 3.98593 8.20478V6.00351C3.98593 5.44123 4.10556 4.89092 4.33287 4.38845C4.56017 3.87403 4.88318 3.41942 5.3019 3.04855C5.72062 2.66572 6.21112 2.3786 6.73751 2.21111C7.27587 2.03166 7.83815 1.97184 8.38846 2.03166C8.42817 2.03686 8.46777 2.04264 8.50725 2.04899C8.69007 1.7224 8.91737 1.42408 9.18095 1.16222C8.95341 1.10142 8.7207 1.05602 8.48417 1.02673C7.79029 0.954953 7.08445 1.02673 6.4145 1.25404C5.74455 1.46938 5.13441 1.82828 4.61999 2.30682C4.10556 2.77339 3.68684 3.34764 3.41168 3.9817C3.13652 4.61576 2.981 5.29767 2.981 6.00351V8.20478C2.981 9.00633 2.8494 9.80788 2.59817 10.5735L2 12.3441L2.47854 13.0021H5.98382C5.98382 13.5285 6.19916 14.0429 6.57002 14.4138C6.94089 14.7847 7.45532 15 7.98171 15C8.5081 15 9.02252 14.7847 9.39339 14.4138C9.76426 14.0429 9.9796 13.5285 9.9796 13.0021H13.4849L13.9634 12.3441L13.3772 10.5735C13.126 9.80788 12.9944 9.00633 12.9944 8.19282V7.87543ZM7.98171 14.019C8.2449 14.019 8.49613 13.9113 8.68755 13.7199C8.87896 13.5285 8.98663 13.2773 8.97467 13.0141H6.97678C6.97678 13.2773 7.08445 13.5285 7.27587 13.7199C7.46728 13.9113 7.71851 14.019 7.98171 14.019Z"></path><path d="M12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7Z" style={{color: "red"}}></path></svg> :
                  <img src="/images/dashboard/notification.svg"
                  className="w-full"
                    alt=""
                  />
              }
              
            </Link>
            <Link className="block w-[14px]">
              <img
                src="/images/dashboard/setting.svg"
                className="w-full"
                alt=""
              />
            </Link>
          </div>

          {accountAddress && (
            <div className="flex items-center space-x-4">
              <p className="font-medium text-sm">
                {
                  profile && profile?.walletAddress ? `${profile?.walletAddress.substring(0, 6)}....${profile?.walletAddress.substring(profile?.walletAddress.length - 4, profile?.walletAddress.length)}` : profile?.userName
                }
                {/* {profile?.firstName ? profile?.firstName : profile?.userName} */}
              </p>
              <div className="w-[34px] rounded-full h-[34px] relative">
                <div className="w-[10px] h-[10px] rounded-full bg-[#3FC864] absolute top-0 right-0 "></div>
                <img
                  src={
                    isBnbUser()
                      ? "/images/bnb-default-avatar.png"
                      : profile?.profile?.urlProfileImage
                      ? profile?.profile?.urlProfileImage
                      : "/images/yellow-dot.png"
                  }
                  className="rounded-full w-full h-1.8 w-1.8 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          )}

          {!accountAddress && (
            <Button
              variant={4}
              buttonHeightClassName="min-h-[28px] lg:min-h-[32px]"
              customizationClassName="border-2 border-white px-3 lg:px-4 rounded-md"
              label={
                <span className="text-xs lg:text-sm text-white">
                  Connect Wallet
                </span>
              }
              buttonProps={{
                onClick: () => dispatch(toggleModalVisibility(true)),
              }}
            />
          )}
        </div>
        <div className="space-y-4">
          <div className="px-6 space-y-1">
            <p className="text-sm xl:text-base font-medium">
              Your action items
            </p>
            <p className="text-sm xl:text-base font-medium">
              Your journey start here!
            </p>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall> Streaming now on IRL:</HeadingSmall>

            <div className="h-[30px]">N/A</div>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall className="mb-2">
              Minutes watched in total (as of yesterday)
            </HeadingSmall>
            <p className="text-sm xl:text-base font-bold">
              {token
                ? `${videoWatchDuration ? videoWatchDuration : 0} Minutes`
                : `N/A`}
            </p>
          </div>

          <DividerLine />

          <div className="px-6">
            <HeadingSmall className="mb-2">
              Minutes watched yesterday
            </HeadingSmall>

            <p className="text-sm xl:text-base font-bold">
              {token
                ? `${
                    lastDayWatchVideoDuration ? lastDayWatchVideoDuration : 0
                  } Minutes`
                : `N/A`}
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
                  alt={
                    lastVideoHistory?.channelName
                      ? lastVideoHistory?.channelName
                      : "default"
                  }
                />
              ) : (
                "N/A"
              )}
            </div>
          </div>

          <DividerLine />

          <div className="px-6 flex items-center space-x-4 justify-between">
            <div>
              <p className="text-sm xl:text-base font-medium">N/A</p>
              <HeadingSmall>Favourite Glasses</HeadingSmall>
            </div>

            <img
              src="/images/green-glasses.png"
              className="w-[60px] xl:w-[60px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </UpperRoot>
  );
}

export default RightDashboardSidebar;
