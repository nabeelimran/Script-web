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
import { useDispatch } from "react-redux";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";

function Navbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));
  const location = useLocation();
  const dispatch = useDispatch();

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
          variant="yellow"
          imgClassName="w-10"
          textClassName="text-sm xl:text-base"
        /> */}
        <Link to="/tv">
          <img
            src="images/logo-beta.svg"
            className="w-[100px] xl:w-[160px]"
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
            className={`p-12 lg:p-0 flex flex-col lg:flex-row lg:items-center lg:space-x-10 xl:space-x-12 fixed lg:static top-0 right-0 w-[300px] lg:w-auto h-full border-l-2 border-primary lg:border-none transition-all duration-300 bg-black lg:bg-transparent z-[110] overflow-y-auto lg:overflow-y-visible ${
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

            <div className="flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-6 xl:space-x-9">
              <NavDropdown title="Products" showDropdown={true}>
                <DropdownCard
                  teller="BETA"
                  tellerClassName="text-primary"
                  title="Script TV"
                  subtitle="our user first watch to earn television platform."
                />
                <DropdownCard
                  title="Marketplace"
                  teller="COMING SOON"
                  subtitle="Our native marketplace for buying, selling and renting ScriptGLASS ."
                />
                <DropdownCard
                  teller="TESTNET"
                  tellerClassName="text-primary"
                  title="Script Blockchain"
                  subtitle="our user first watch to The blockchain developed to onboard the next 1 billion content watchers to web3."
                  anchor={true}
                  others={{
                    href: "https://faucet.script.tv/",
                    target: "_blank",
                  }}
                />
                <DropdownCard
                  to="/research"
                  title="ScriptGLASS"
                  subtitle="Our upgradeable NFT collection"
                />
                <DropdownCard
                  teller="COMING SOON"
                  title="dStorage"
                  subtitle="Save 70%+ on transcoding, transferring and storage costs from web2."
                />
                <DropdownCard
                  teller="COMING SOON"
                  title="sADs"
                  subtitle="The video advertising layer built on Script Blockchain."
                />
              </NavDropdown>
              <NavDropdown
                title="How it works"
                showDropdown={true}
                twoColumns={true}
              >
                <DropdownCard
                  to="/research"
                  title="ScriptGLASS explained"
                  subtitle="Our user first watch to earn television platform."
                />
                <DropdownCard
                  to="/token"
                  title="Script Tokens"
                  subtitle="Learn about SCPT and SPAY tokens"
                />
                <DropdownCard
                  to="/calculator"
                  title="Calculator"
                  subtitle="Calculate your earnings through staking and rewards"
                />
                <DropdownCard
                  to="/calculator"
                  title="Run a Node"
                  subtitle="Help secure and grow the ecosystem - and get rewarded"
                />
              </NavDropdown>
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
                Community
              </LinkScroller>
              <Link
                to="/technology"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Technology
              </Link>
              <Link
                to="/explorer"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Explorer
              </Link>

              <a
                href="https://whitepaper.script.tv"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Docs
              </a>
            </div>

            <Button
              className="mt-8 lg:mt-0 flex justify-center text-center"
              customizationClassName="space-x-3 px-5 rounded-lg font-semibold"
              buttonHeightClassName="min-h-[30px] xl:min-h-[32px]"
              label={
                <span className="text-xs xl:text-sm text-black">
                  Sign in / Sign in
                </span>
              }
              buttonProps={{
                onClick: () => {
                  setSidebarVisibility(false);
                  dispatch(toggleModalVisibility(true));
                },
              }}
            />
          </div>
        </div>

        <div className={`black-screen ${isSidebarVisible ? "show" : ""}`}></div>
      </div>
    </UpperRoot>
  );
}

export default Navbar;
