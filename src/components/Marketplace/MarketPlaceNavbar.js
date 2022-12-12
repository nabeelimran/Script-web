import Logo from "components/Logo";
import React from "react";
import { Link } from "react-router-dom";
import NavbarRight from "./NavbarRight";

const NavbarLeft = () => {
  return (
    <div className="lg:px-6">
      {/* <Logo
        variant="yellow"
        imgClassName="w-8"
        textClassName="text-sm"
        title={<>Script Network</>}
      /> */}
      <Link to="/tv">
        <img
          src="images/logo-beta.svg"
          className="w-[100px] xl:w-[160px]"
          alt=""
        />
      </Link>
    </div>
  );
};

function MarketPlaceNavbar({
  navbarHeight,
  sidebarWidth,
  isAbove1024px,
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      <div
        className="flex items-center bg-[#131313] fixed top-0 left-0 w-full z-[1000] px-6 lg:px-0"
        style={{ height: navbarHeight }}
      >
        <div
          className="flex justify-between lg:grid w-full items-center"
          style={{
            gridTemplateColumns: isAbove1024px ? `${sidebarWidth} 1fr` : "auto",
          }}
        >
          <NavbarLeft />

          <NavbarRight
            isAbove1024px={isAbove1024px}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </>
  );
}

export default MarketPlaceNavbar;
