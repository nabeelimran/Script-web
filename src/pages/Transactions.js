import Footer from "components/Footer";
import React, { useState, useEffect } from "react";
import ScriptNodes from "sections/Transactions/ScriptNodes";
import ExplorerNavbar from "components/ExplorerNavbar";
import ExplorerService from "services/explorer";
import { ToastMessage } from "components/ToastMessage";
import ExplorerPagination from "components/explorer/ExplorerPagination";

function Transactions() {
  const [transactionList, setTransactionList] = useState([]);
  const [totaltransactions, setTotaltransactions] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const getTransactionList = () => {
    ExplorerService.getTransactions(activePage, 50).then((res) => {
      if (res && res.body) {
        setTransactionList(res.body);
        setTotaltransactions(res.totalPageNumber * 50)
      } else {
        ToastMessage("No Block Found");
      }
    });
  };

  const handlePageChange = (e) => setActivePage(e);

  useEffect(() => {
    getTransactionList();
  }, [activePage]);

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <main className="flex-1">
        <div className="mb-10 lg:mb-14">
          <ScriptNodes transactionList={transactionList} />
        </div>
        <div className="container mb-10 lg:mb-14">
          <ExplorerPagination 
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCountPerPage={50}
            totalItemsCount={totaltransactions}
            pageRangeDisplayed={10}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Transactions;
