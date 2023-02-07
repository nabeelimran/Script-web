import Footer from "components/Footer";
import React, { useState, useEffect } from "react";
import ScriptNodes from "sections/Blocks/ScriptNodes";
import ExplorerNavbar from "components/ExplorerNavbar";
import ExplorerService from "services/explorer";
import { ToastMessage } from "components/ToastMessage";

function Blocks() {
  const [topBlockList, setTopBlockList] = useState([]);

  const getTopBlockList = () => {
    ExplorerService.getTopBlocks(1, 50).then((res) => {
      if (res && res.body) {
        setTopBlockList(res.body);
      } else {
        ToastMessage("No Block Found");
      }
    });
  };

  useEffect(() => {
    getTopBlockList();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <main className="flex-1">
        <div className="mb-20 lg:mb-24">
          <ScriptNodes topBlockList={topBlockList} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blocks;