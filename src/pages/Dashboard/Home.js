import React from "react";
import Gems from "sections/Dashboard/Home/Gems";
import InventoryTrade from "sections/Dashboard/Home/InventoryTrade";
import Tip from "sections/Dashboard/Home/Tip";
import Welcome from "sections/Dashboard/Home/Welcome";

function Home() {
  return (
    <div className="min-h-screen pb-14">
      <div className="mb-8">
        <Welcome />
      </div>

      <div className="mb-12">
        <InventoryTrade />
      </div>

      <div className="mb-12">
        <Gems />
      </div>

      <Tip />
    </div>
  );
}

export default Home;
