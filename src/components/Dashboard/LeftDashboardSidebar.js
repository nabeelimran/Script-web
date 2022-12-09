import Logo from "components/Logo";
import UpperRoot from "components/UpperRoot";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import PageLink from "./PageLink";

function LeftDashboardSidebar({ width, breakpointMatched, state }) {
  const { getter, setter } = state;
  const sidebarRef = OutsideClickDetector(() => setter && setter(false));

  return (
    <UpperRoot>
      <div
        ref={sidebarRef}
        className="dashboard-top-spacing dashboard-bottom-spacing h-screen overflow-y-auto bg-[#0E0E0F] fixed top-0 left-0 flex flex-col transition-all duration-300 z-[200]"
        style={{
          width: width,
          transform: breakpointMatched
            ? null
            : `${getter ? "translateX(0)" : `translateX(-${width})`}`,
        }}
      >
        <div className="mb-8 px-7">
          <Logo
            variant="yellow"
            imgClassName="w-7 xl:w-9"
            textClassName="text-xs lg:text-sm"
          />
        </div>

        <div className="space-y-3 mb-8 px-5 flex-1">
          <PageLink
            link=""
            label="Home"
            img="home.svg"
            onClick={() => setter(false)}
          />
          <PageLink
            link="edit-profile"
            label="Edit Profile"
            img="edit.svg"
            onClick={() => setter(false)}
          />
          <PageLink
            link="share-referral"
            label="Share Referral"
            img="share.svg"
            onClick={() => setter(false)}
          />
          <PageLink
            link="analytics"
            label="Analytics"
            img="analytics.svg"
            onClick={() => setter(false)}
          />
          <PageLink
            link="change-password"
            label="Change password"
            img="change.svg"
            onClick={() => setter(false)}
          />
          <PageLink
            link="token-mapping"
            label="Token Mapping"
            img="token.svg"
            onClick={() => setter(false)}
          />
        </div>

        <div className="px-5">
          <PageLink label="Log Out" img="logout.svg" />
        </div>
      </div>
    </UpperRoot>
  );
}

export default LeftDashboardSidebar;