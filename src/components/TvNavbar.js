import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import DropdownCard from "./DropdownCard";
import NavDropdown from "./NavDropdown";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import LinkScroller from "./LinkScroller";
import UpperRoot from "./UpperRoot";
import ChannelsDropdown from "./ChannelsDropdown";
import HelpDropdown from "./HelpDropdown";

function TvNavbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));
  const location = useLocation();

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSidebarVisible]);

  return (
    <UpperRoot>
      <div className="container py-5 xl:py-7 flex items-center justify-between z-[200] relative">
        {/* <Logo
          to="/tv"
          variant="yellow"
          imgClassName="w-10"
          textClassName="text-sm xl:text-base lh-1"
          title={<>script.tv</>}
        /> */}

        <Link to="/tv">
          <img
            src="images/logo-beta.svg"
            className="w-[100px] xl:w-[120px]"
            alt=""
          />
        </Link>

        <div>
          <button
            className="block lg:hidden text-2xl"
            onClick={() => setSidebarVisibility((val) => !val)}
          >
            <Icon icon="charm:menu-hamburger" />
          </button>

          <div
            ref={sidebarRef}
            className={`p-12 lg:p-0 flex flex-col lg:flex-row lg:items-center lg:space-x-10 xl:space-x-10 fixed lg:static top-0 right-0 w-[300px] lg:w-auto h-full border-l-2 border-primary lg:border-none transition-all duration-300 bg-black lg:bg-transparent z-[110] overflow-y-auto lg:overflow-y-visible ${
              isSidebarVisible
                ? "translate-x-0"
                : "translate-x-[300px] lg:translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between lg:hidden mb-10">
              <img
                src="images/logo.svg"
                className="w-[60%] cursor-pointer block lg:hidden"
                alt=""
              />

              <button
                className="flex text-lg"
                onClick={() => setSidebarVisibility(false)}
              >
                <Icon icon="maki:cross" />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-6 xl:space-x-6">
              <ChannelsDropdown />

              <LinkScroller
                id="homepage-community-section"
                to="/"
                wait={location.pathname === "/" ? 0 : 200}
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
                scrollerOptions={{
                  smooth: true,
                  offset: -50,
                }}
              >
                Watch
              </LinkScroller>

              <HelpDropdown />

              <LinkScroller
                id="tv-community"
                to="/tv"
                wait={location.pathname === "/tv" ? 0 : 200}
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
                scrollerOptions={{
                  smooth: true,
                  offset: -50,
                }}
              >
                Community
              </LinkScroller>

              <Link
                to="/technology"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Wallet
              </Link>
              <Link
                to="/explorer"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Explorer
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
              <Button
                link="/login"
                className="mt-8 lg:mt-0 flex justify-center"
                customizationClassName="space-x-3 px-5 rounded-lg font-semibold"
                buttonHeightClassName="min-h-[30px] xl:min-h-[32px]"
                label={
                  <span className="text-xs xl:text-sm text-black">
                    MarketPlace
                  </span>
                }
              />
              <Button
                link="/login"
                label={
                  <span className="text-xs xl:text-sm text-black">
                    Sign in / Sign up
                  </span>
                }
                className="mt-8 lg:mt-0 flex justify-center text-center"
                customizationClassName="space-x-3 px-5 rounded-lg font-semibold"
                buttonHeightClassName="min-h-[30px] xl:min-h-[32px]"
              />
            </div>
          </div>
        </div>

        <div className={`black-screen ${isSidebarVisible ? "show" : ""}`}></div>
      </div>
    </UpperRoot>
  );
}

export default TvNavbar;
