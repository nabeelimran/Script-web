import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import DropdownCard from "./DropdownCard";
import NavDropdown from "./NavDropdown";

function Navbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSidebarVisible]);

  return (
    <div className="container py-5 xl:py-7 flex items-center justify-between">
      <img
        src="images/logo.svg"
        className="w-24 md:w-28 xl:w-32 cursor-pointer"
        alt=""
      />

      <div>
        <button
          className="block lg:hidden text-2xl"
          onClick={() => setSidebarVisibility((val) => !val)}
        >
          <Icon icon="charm:menu-hamburger" />
        </button>

        <div
          ref={sidebarRef}
          className={`p-12 lg:p-0 flex flex-col lg:flex-row lg:items-center lg:space-x-10 xl:space-x-16 fixed lg:static top-0 right-0 w-[300px] lg:w-auto h-full border-l-2 border-primary lg:border-none transition-all duration-300 bg-black lg:bg-transparent z-[110] overflow-y-auto lg:overflow-y-visible ${
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
                title="Script TV"
                subtitle="our user first watch to earn television platform."
              />
              <DropdownCard
                title="Marketplace"
                subtitle="Our native marketplace for buying, selling and renting ScriptGLASS ."
              />
              <DropdownCard
                title="Script Blockchain"
                subtitle="our user first watch to The blockchain developed to onboard the next 1 billion content watchers to web3."
              />
              <DropdownCard
                title="ScriptGLASS"
                subtitle="Our upgradeable NFT collection"
              />
              <DropdownCard
                title="dStorage"
                subtitle="Save 70%+ on transcoding, transferring and storage costs from web2."
              />
              <DropdownCard
                title="sADs"
                subtitle="The video advertising layer built on Script Blockchain."
              />
            </NavDropdown>
            <NavDropdown
              title="How It Work"
              showDropdown={true}
              twoColumns={true}
            >
              <DropdownCard
                title="ScriptGLASS explained"
                subtitle="our user first watch to earn television platform."
              />
              <DropdownCard
                title="ScriptTV - how to earn"
                subtitle="Our native marketplace for buying, selling and renting ScriptGLASS ."
              />
            </NavDropdown>
            <p className="nav-link text-sm xl:text-base font-medium cursor-pointer">
              Community
            </p>
            <p className="nav-link text-sm xl:text-base font-medium cursor-pointer">
              Explorer
            </p>
            <p className="nav-link text-sm xl:text-base font-medium cursor-pointer">
              Wallet
            </p>
            <p className="nav-link text-sm xl:text-base font-medium cursor-pointer">
              Docs
            </p>
          </div>

          <Button label="Sing In" className="mt-8 lg:mt-0" />
        </div>
      </div>

      <div className={`black-screen ${isSidebarVisible ? "show" : ""}`}></div>
    </div>
  );
}

export default Navbar;
