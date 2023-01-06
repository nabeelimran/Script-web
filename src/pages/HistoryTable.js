import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import Api from "services/api";
import LocalServices from "services/LocalServices";

function HistoryTable() {
  const user = LocalServices.getServices("user");
  const [rewardHistory, setRewardHistory] = useState([]);

  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = rewardHistory.slice(indexOfFirstPost, indexOfLastPost);
  const paginateFront = () => {
    if (currentPage >= totalPages - 1) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    if (currentPage <= 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const getRewardHistoryList = () => {
    if (user && user.walletAddress) {
      Api.getAllUserRewardsData(
        user.walletAddress,
        currentPage,
        dataPerPage,
        "reward-management"
      ).then((res) => {
        if (res && res.status === 200) {
          setRewardHistory(res.data.data.content);
          setTotalData(res.data.data.totalrecords);
          setTotalPages(res.data.data.totalPages);
        }
      });
    }
  };

  useEffect(() => {
    getRewardHistoryList();
  }, [currentPage]);

  useEffect(() => {
    getRewardHistoryList();
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl py-10">My Reward History</h2>
      <div className="bg-[#161616] container rounded-xl">
        <table className="stake-nodes-table evenBg text-left rounded-lg w-full">
          <thead>
            <tr>
              <th className="text-[#ffef00] py-4">Username</th>
              <th className="text-[#ffef00] py-4">Address</th>
              <th className="text-[#ffef00] py-4">Reward Point</th>
            </tr>
          </thead>
          <tbody>
            {rewardHistory && rewardHistory.length > 0
              ? rewardHistory.map((data, index) => (
                  <tr key={index}>
                    <td className="py-4">{data?.username || ""}</td>
                    <td className="py-4">{data?.walletAddress || ""}</td>
                    <td className="py-4">{data?.rewardPoint || 0}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>

      <div className="container py-10">
        <Pagination
          dataPerPage={dataPerPage}
          totalData={totalData}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}

export default HistoryTable;
