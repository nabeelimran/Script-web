import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import Api from "services/api";

function LeaderBoard() {
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = leaderBoardData && leaderBoardData.length > 0 && leaderBoardData.slice(indexOfFirstPost, indexOfLastPost);
  const paginateFront = () => {
    if (currentPage >= totalPages - 1) {
      return;
    }
    setCurrentPage(currentPage + 1);
  } 
  const paginateBack = () => {
    if (currentPage <= 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  } 

  const getLeaderBoardData = () => {
    Api.getLeaderboardData(currentPage, dataPerPage, "reward-management").then(
      (res) => {
        if (res && res.status === 200) {
          setLeaderBoardData(res.data.data.content);
          setTotalData(res.data.data.totalrecords);
          setTotalPages(res.data.data.totalPages);
        }
      }
    );
  };

  useEffect(() => {
    getLeaderBoardData();
  }, [currentPage]);

  useEffect(() => {
    getLeaderBoardData();
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl py-10">LeaderBoard</h2>
      <div className="bg-[#161616] container rounded-xl">
        <table className="stake-nodes-table evenBg text-left rounded-lg w-full">
          {/* <thead>
            <tr>
              <th className="text-[#ffef00] text-xl w-3/4 py-4">
                Top Accounts
              </th>
              <th className="text-[#ffef00] py-4">Total Accounts: {totalData || 0}</th>
            </tr>
          </thead> */}
          <thead>
            <tr>
              <th className="text-[#ffef00] py-4">Address</th>
              <th className="text-[#ffef00] py-4">Reward Point</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoardData && leaderBoardData.length > 0
              ? leaderBoardData.map((data, index) => (
                  <tr key={index}>
                    {console.log(data)}
                    <td className="py-4">{data?.walletAddress || ""}</td>
                    <td className="py-4">{data?.totalReward || 0}</td>
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

export default LeaderBoard;
