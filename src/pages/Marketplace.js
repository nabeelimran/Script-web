import MarketPlaceNavbar from "components/Marketplace/MarketPlaceNavbar";
import MarketplaceFilterBar from "components/Marketplace/MarketplaceFilterBar";
import Content from "components/Marketplace/Content";
import useMediaQuery from "hooks/useMediaQuery";
import { useState, useEffect } from "react";

function Marketplace() {
  const isAbove1024px = useMediaQuery("(min-width:1024px)");

  const navbarHeight = isAbove1024px ? "70px" : "60px";
  const sidebarWidth = "234px";

  const [isFilterBarVisible, setFilterVisibility] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isFilterBarVisible || isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isFilterBarVisible, isOpen]);

  return (
    <div>
      <MarketPlaceNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isAbove1024px={isAbove1024px}
        navbarHeight={navbarHeight}
        sidebarWidth={sidebarWidth}
      />
      <MarketplaceFilterBar
        open={isFilterBarVisible}
        setOpen={setFilterVisibility}
        isAbove1024px={isAbove1024px}
        navbarHeight={navbarHeight}
        sidebarWidth={sidebarWidth}
      />

      <main
        className="py-5 px-6 md:px-8"
        style={{
          marginLeft: isAbove1024px ? sidebarWidth : 0,
          marginTop: navbarHeight,
        }}
      >
        <Content
          isAbove1024px={isAbove1024px}
          setFilterVisibility={setFilterVisibility}
        />
      </main>
    </div>
  );
}

export default Marketplace;
