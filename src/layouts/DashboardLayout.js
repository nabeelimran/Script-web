import BlackScreen from "components/BlackScreen";
import Header from "components/Dashboard/Header";
import LeftDashboardSidebar from "components/Dashboard/LeftDashboardSidebar";
import RightDashboardSidebar from "components/Dashboard/RightDashboardSidebar";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";

function DashboardLayout() {
  const [leftSidebarVisible, setLeftSidebarVisibility] = useState(false);
  const [rightSidebarVisible, setRightSidebarVisibility] = useState(false);
  const [profile, setProfile] = useState(null);
  const [videoWatchDuration, setVideoWatchDuration] = useState(0);
  const [lastDayWatchVideoDuration, setLastDayWatchVideoDuration] = useState(0);
  const [lastVideoHistory, setLastVideoHistory] = useState(null);

  const isAbove1280px = useMediaQuery("(min-width : 1280px)");
  const leftSidebar_Width = "220px";
  const rightSidebar_Width = "270px";

  const userId = LocalServices.getServices("user")?.userId || null;
  const {updateProfileState} = useSelector(state => state.Profile_State);

  const viewUserProfile = (userId) => {
    Api.viewUserProfile(userId, 'dashboard').then((res) => {
      if(res && res.status === 200) {
        setProfile(res.data.data);
      }
    })
  }

  const getVideoWatchDuration = (userId) => {
    Api.getVideoWatchDuration(userId, 'watch').then((res) => {
      if(res && res.status === 200) {
        setVideoWatchDuration(res.data.data.totalWatchVideoDuration);
        setLastDayWatchVideoDuration(res.data.data.lastDayWatchVideoDuration);
      }
    })
  }

  const getLastShowWatchHistory = (userId) => {
    Api.getLastWatchShowHistory(userId, 'watch').then((res) => {
      if(res && res.status === 200) {
        setLastVideoHistory(res.data.data);
      }
    })
  }

  useEffect(() => {
    if(userId) {
      viewUserProfile(userId)
    }
  }, [updateProfileState])
  

  useEffect(() => {
    MixPanelService.init();
    if(userId) {
      viewUserProfile(userId)
      getVideoWatchDuration(userId)
      getLastShowWatchHistory(userId)
    }
    if (leftSidebarVisible || rightSidebarVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [leftSidebarVisible, rightSidebarVisible]);

  return (
    <div className="min-h-screen">
      {!isAbove1280px && (
        <>
          <BlackScreen
            show={leftSidebarVisible || rightSidebarVisible ? true : false}
          />
          <Header
            setLeftSidebarVisibility={setLeftSidebarVisibility}
            setRightSidebarVisibility={setRightSidebarVisibility}
            profile = {profile}
          />
        </>
      )}

      <LeftDashboardSidebar
        width={leftSidebar_Width}
        breakpointMatched={isAbove1280px}
        state={{
          getter: leftSidebarVisible,
          setter: setLeftSidebarVisibility,
        }}
      />

      <div
        style={{
          marginLeft: isAbove1280px ? leftSidebar_Width : 0,
          marginRight: isAbove1280px ? rightSidebar_Width : 0,
        }}
      >
        <Outlet />
      </div>

      <RightDashboardSidebar
        width={rightSidebar_Width}
        breakpointMatched={isAbove1280px}
        state={{
          getter: rightSidebarVisible,
          setter: setRightSidebarVisibility,
        }}
        profile={profile}
        videoWatchDuration={videoWatchDuration}
        lastDayWatchVideoDuration={lastDayWatchVideoDuration}
        lastVideoHistory={lastVideoHistory}
      />
    </div>
  );
}

export default DashboardLayout;
