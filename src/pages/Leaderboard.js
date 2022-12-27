import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import Api from "services/api";

function LeaderBoard() {

  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalData, setTotalData] = useState(0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = leaderBoardData.slice(indexOfFirstPost, indexOfLastPost);

  const getLeaderBoardData = () => {
    Api.getLeaderboardData(currentPage, dataPerPage, 'reward-management').then((res) => {
      if(res && res.status === 200) {
        setLeaderBoardData(res.data.data.content);
        setTotalData(res.data.data.totalrecords);
      }
    })
  }

  useEffect(() => {
    getLeaderBoardData();
  }, [currentPage])

  useEffect(() => {
    getLeaderBoardData();
  }, [])

  return (
    <>
      <h2 className="text-center text-4xl py-10">LeaderBoard</h2>
      <div className="bg-[#161616] container rounded-xl py-8 px-8">
        <table className="text-left w-full">
          <thead>
            <tr className="border-b border-t">
              <th className="text-[#ffef00] text-xl w-3/4 py-4">
                Top Accounts
              </th>
              <th className="text-[#ffef00] py-4">Total Accounts: 93</th>
            </tr>
          </thead>
          <thead>
            <tr className="border-b">
              <th className="text-[#ffef00] py-4">Address</th>
              <th className="text-[#ffef00] py-4">Reward Point</th>
            </tr>
          </thead>
          <tbody>
            {
              leaderBoardData && leaderBoardData.length > 0 ? leaderBoardData.map((data, index) => 
                <tr className="border-b" key={index}>
                  {console.log(data)}
                  <td className="py-4">
                    {data?.walletAddress || ''}
                  </td>
                  <td className="py-4">
                    {data?.totalReward || 0}
                  </td>
                </tr>
              ) : null
            }
          </tbody>
        </table>
      </div>
      <div className="container rounded-xl py-8 px-8">
        <Pagination dataPerPage={dataPerPage}
        totalData={totalData}
        paginate={paginate}
        currentPage={currentPage}/>
      </div>
    </>
  );
}

export default LeaderBoard;
