import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { helper } from "utils/helper";

function HistoryTable({
  isHistoryTableModal
}) {
  const user = LocalServices.getServices("user");
  const [rewardHistory, setRewardHistory] = useState([]);

  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // const [show, setShow] = useState(false);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = rewardHistory && rewardHistory.length > 0 && rewardHistory.slice(indexOfFirstPost, indexOfLastPost);
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
      if (user && user.userId) {
        Api.getAllUserRewardsData(
          user.userId,
          currentPage,
          dataPerPage,
          "reward-management"
        ).then((res) => {
          if (res && res.status === 200) {
            // if(show) {
              // console.log("Res Data Data ",res.data.data.totalPages);
              setRewardHistory(res.data.data.content);
              setTotalData(res.data.data.totalrecords);
              setTotalPages(res.data.data.totalPages);
            // }
          }
        });
      }
  };

  const transfromRewardType = (rewardType) => {
    // console.log("RewardType ",rewardType);
    switch (rewardType) {
      case 'DAILY_SIGN_IN':
        return 'Daily Sign In';
      case 'VIDEO_WATCH': 
        return 'Video Watch'
      case 'REFERRAL': 
        return 'Referral'
      case 'OTHER_REFERRAL': 
        return 'Referral'
      case 'CHAT': 
        return 'Chat'
      default:
        return rewardType;
    }
  }

  useEffect(() => {
    if(isHistoryTableModal) {
      getRewardHistoryList();
    }
  }, [currentPage, isHistoryTableModal]);


  return (
    <>
      <h2 className="text-center text-4xl py-10">My Reward History</h2>
      <div className="bg-[#161616] container rounded-xl">
        <table className="stake-nodes-table evenBg text-left rounded-lg w-full">
          <thead>
            <tr>
              <th className="text-[#ffef00] py-4">Reward Type</th>
              <th className="text-[#ffef00] py-4">Reward Point</th>
              <th className="text-[#ffef00] py-4">Earned At</th>
            </tr>
          </thead>
          <tbody>
            {rewardHistory && rewardHistory.length > 0
              ? rewardHistory.map((data, index) => (
                  <tr key={index}>
                    <td className="py-4">{transfromRewardType(data?.rewardType)}</td>
                    <td className="py-4">{data?.rewardPoint || 0}</td>
                    <td className="py-4">{helper.formatDate(data?.createdAt, 'MMM D/YYYY')}</td>
                    
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
