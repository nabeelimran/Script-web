import { Icon } from "@iconify/react";
import Logo from "components/Logo";
import React from "react";
import { Link } from "react-router-dom";

const NavbarRight = () => {
  return (
    <div className="px-6 flex items-center space-x-8">
      <div className="flex items-center space-x-8 flex-1">
        <div className="h-[40px] w-full rounded-md border-1px border-[#1F1F1F] overflow-hidden relative flex-1 max-w-[320px]">
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

        <div className="flex items-center space-x-5">
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

      <div>
        <div className="bg-[#1F1F1F] py-2 px-3 rounded-md flex items-center space-x-3">
          <p className="text-sm font-medium">0.005ETH</p>
          <img
            src="images/marketplace-user.png"
            className="w-[26px] h-[26px] rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const NavbarLeft = () => {
  return (
    <div className="px-6">
      <Logo
        variant="yellow"
        imgClassName="w-8"
        textClassName="text-sm"
        title={<>Script Network</>}
      />
    </div>
  );
};

function MarketPlaceNavbar({ navbarHeight, sidebarWidth }) {
  return (
    <div
      className="flex items-center bg-[#131313] fixed top-0 left-0 w-full"
      style={{ height: navbarHeight }}
    >
      <div
        className="grid w-full items-center"
        style={{ gridTemplateColumns: `${sidebarWidth} 1fr` }}
      >
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
}

export default MarketPlaceNavbar;
