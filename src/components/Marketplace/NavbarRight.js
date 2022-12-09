import { Icon } from "@iconify/react";
import BlackScreen from "components/BlackScreen";
import UpperRoot from "components/UpperRoot";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { forwardRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Content = forwardRef(({ isAbove1024px, open, setOpen }, ref) => {
  return (
    <div
      ref={ref}
      className={`fixed lg:static top-0 right-0  lg:translate-x-0 transition-all duration-300 w-[260px] lg:w-auto h-screen lg:h-auto bg-black lg:bg-transparent z-[10000] p-8 lg:p-0 ${
        open ? "translate-x-[0]" : "translate-x-[260px]"
      }`}
    >
      <div className="lg:px-6 flex flex-col lg:flex-row lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {!isAbove1024px && (
          <div className="flex lg:hidden">
            <button onClick={() => setOpen(false)}>
              <Icon icon="maki:cross" />
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 flex-1">
          {isAbove1024px && (
            <div className="min-h-[40px] lg:h-[40px] w-full rounded-md border-1px border-[#1F1F1F] overflow-hidden relative flex-1 max-w-[320px]">
              <Icon
                icon="material-symbols:search-rounded"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none"
              />

              <input
                type="text"
                placeholder="Search items, collectibles, accounts"
                className="absolute top-0 left-0 w-full h-full bg-transparent pl-12 pr-6 outline-none text-sm"
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-5">
            <Link
              to="/explorer"
              className="nav-link text-sm font-medium cursor-pointer"
            >
              Explore
            </Link>
            <Link
              to="/explorer"
              className="nav-link text-sm font-medium cursor-pointer"
            >
              Stats
            </Link>
            <Link
              to="/explorer"
              className="nav-link text-sm font-medium cursor-pointer"
            >
              Resources
            </Link>
            <Link
              to="/explorer"
              className="nav-link text-sm font-medium cursor-pointer"
            >
              Create
            </Link>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-0">
          {!isAbove1024px && (
            <div className="min-h-[40px] lg:h-[40px] w-full rounded-md border-1px border-[#1F1F1F] overflow-hidden relative flex-1 max-w-[320px]">
              <Icon
                icon="material-symbols:search-rounded"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none"
              />

              <input
                type="text"
                placeholder="Search items, collectibles, accounts"
                className="absolute top-0 left-0 w-full h-full bg-transparent pl-12 pr-6 outline-none text-sm"
              />
            </div>
          )}

          <div className="bg-[#1F1F1F] py-2 px-3 rounded-md flex items-center justify-between space-x-3">
            <p className="text-sm font-medium">0.005ETH</p>
            <img
              src="images/marketplace-user.png"
              className="w-[26px] h-[26px] rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
});

function NavbarRight({ isAbove1024px, isOpen, setIsOpen }) {
  const sidebarRef = OutsideClickDetector(() => setIsOpen(false));

  return isAbove1024px ? (
    <Content isAbove1024px={isAbove1024px} />
  ) : (
    <div className="flex-1 flex justify-end items-center">
      <button className="flex text-2xl" onClick={() => setIsOpen(true)}>
        <Icon icon="material-symbols:menu-rounded" />
      </button>

      <BlackScreen show={isOpen} />

      <UpperRoot>
        <Content
          ref={sidebarRef}
          isAbove1024px={isAbove1024px}
          open={isOpen}
          setOpen={setIsOpen}
        />
      </UpperRoot>
    </div>
  );
}

export default NavbarRight;