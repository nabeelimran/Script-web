import BlackScreen from "components/BlackScreen";
import Header from "components/Dashboard/Header";
import LeftDashboardSidebar from "components/Dashboard/LeftDashboardSidebar";
import RightDashboardSidebar from "components/Dashboard/RightDashboardSidebar";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [leftSidebarVisible, setLeftSidebarVisibility] = useState(false);
  const [rightSidebarVisible, setRightSidebarVisibility] = useState(false);

  const isAbove1280px = useMediaQuery("(min-width : 1280px)");
  const leftSidebar_Width = "220px";
  const rightSidebar_Width = "270px";

  useEffect(() => {
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
      />
    </div>
  );
}

export default DashboardLayout;
