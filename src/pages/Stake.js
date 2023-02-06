import ExplorerNavbar from "components/ExplorerNavbar";
import Footer from "components/Footer";
import React, { useState, useEffect } from "react";
import Hero from "sections/Stake/Hero";
import ScriptNodes from "sections/Stake/ScriptNodes";
import ExplorerService from "services/explorer";
import { ToastMessage } from "components/ToastMessage";

function Stake() {
  const [stakingList, setStakingList] = useState([]);

  const getStakingList = () => {
    ExplorerService.getStaking(1, 50).then((res) => {
      if (res && res.body) {
        setStakingList(res.body);
      } else {
        ToastMessage("No Block Found");
      }
    });
  };

  useEffect(() => {
    getStakingList();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <main className="flex-1">
        <div className="mb-10 lg:mb-20">
          <Hero />
        </div>

        <div className="mb-20 lg:mb-24">
          <ScriptNodes stakingList={stakingList} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Stake;
