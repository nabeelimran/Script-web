import BackBar from "components/BackBar";
import BlackScreen from "components/BlackScreen";
import MarketPlaceNavbar from "components/Marketplace/MarketPlaceNavbar";
import useMediaQuery from "hooks/useMediaQuery";
import React, { useEffect, useState } from "react";
import NFTDetails from "sections/Details/NFTDetails";

function Details() {
  const isAbove1024px = useMediaQuery("(min-width:1024px)");

  const navbarHeight = isAbove1024px ? "70px" : "60px";
  const sidebarWidth = "234px";

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <MarketPlaceNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isAbove1024px={isAbove1024px}
        navbarHeight={navbarHeight}
        sidebarWidth={sidebarWidth}
      />

      <BlackScreen show={isOpen} zIndex={10000} />

      <div className="pt-4 pb-16" style={{ marginTop: navbarHeight }}>
        <div className="container mb-8">
          <BackBar title="3d ar collection #79745" />
        </div>
        <div className="container-two">
          <NFTDetails />
        </div>
      </div>
    </div>
  );
}

export default Details;
