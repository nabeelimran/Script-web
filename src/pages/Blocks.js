import Footer from "components/Footer";
import React, { useState, useEffect } from "react";
import ScriptNodes from "sections/Blocks/ScriptNodes";
import ExplorerNavbar from "components/ExplorerNavbar";
import ExplorerService from "services/explorer";
import { ToastMessage } from "components/ToastMessage";
import ExplorerPagination from "components/explorer/ExplorerPagination";

function Blocks() {
  const [topBlockList, setTopBlockList] = useState([]);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const getTopBlockList = () => {
    ExplorerService.getTopBlocks(activePage, 50).then((res) => {
      if (res && res.body) {
        setTopBlockList(res.body);
        setTotalBlocks(res.totalPageNumber * 50);
      } else {
        ToastMessage("No Block Found");
      }
    });
  };

  const handlePageChange = (e) => {
    console.log(e)
    // setActivePage(pageNumber);
  }

  useEffect(() => {
    getTopBlockList();
  }, [activePage]);

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <main className="flex-1">
        <div className="mb-10 lg:mb-14">
          <ScriptNodes topBlockList={topBlockList} />
        </div>
        <div className="container mb-10 lg:mb-14">
          <ExplorerPagination 
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCountPerPage={50}
            totalItemsCount={totalBlocks}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blocks;
