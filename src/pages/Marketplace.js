import React from "react";
import MarketPlaceNavbar from "components/Marketplace/MarketPlaceNavbar";
import MarketplaceFilterBar from "components/Marketplace/MarketplaceFilterBar";

function Marketplace() {
  const navbarHeight = "70px";
  const sidebarWidth = "234px";

  return (
    <div>
      <MarketPlaceNavbar
        navbarHeight={navbarHeight}
        sidebarWidth={sidebarWidth}
      />
      <MarketplaceFilterBar
        navbarHeight={navbarHeight}
        sidebarWidth={sidebarWidth}
      />

      <main style={{ marginLeft: sidebarWidth, marginTop: navbarHeight }}>
        {/* <h1>sladjaskld</h1> */}
      </main>
    </div>
  );
}

export default Marketplace;
