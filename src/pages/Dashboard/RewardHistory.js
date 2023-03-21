import { Box } from "@mui/material";
import { formatEther } from "ethers/lib/utils";
import useMediaQuery from "hooks/useMediaQuery";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRewardsHistory } from "utils/api";

const RewardHistory = () => {
  const [history, setHistory] = useState([]);
  const isAbove768px = useMediaQuery("(min-width: 768px)");

  const { accountAddress } = useSelector((state) => state.metamask_state);

  useEffect(() => {
    if (accountAddress) {
      (async () => {
        const _history = await getRewardsHistory(accountAddress);
        setHistory(_history || []);
      })();
    }
  }, [accountAddress]);

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={isAbove768px ? 900 : "100%"}>
        <h2 className="text-3xl my-2 font-semibold text-center mb-5">
          Rewards history
        </h2>

        {history.length > 0 ? (
          <table className="stake-nodes-table evenBg text-left rounded-lg w-full">
            <thead>
              <tr>
                <th className="text-[#ffef00] py-4">Reward Type</th>
                <th className="text-[#ffef00] py-4">Reward Point</th>
                <th className="text-[#ffef00] py-4">Earned At</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0
                ? history.map((data, index) => (
                    <tr key={index}>
                      {console.log(data)}
                      <td className="py-4">Daily Reward</td>
                      <td className="py-4">
                        {`${formatEther(data?.amount)} SPAY` || ""}
                      </td>
                      <td className="py-4">
                        {moment(data?.blockTimestamp * 1000).fromNow() || 0}
                      </td>
                    </tr>
                  ))
                : null}
              {/* <tr>
                <td className="py-4">0x123456789</td>
                <td className="py-4">100</td>
              </tr> */}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <h2
              className="text-md my-2 text-center mb-5
            text-[#818589]
            "
            >
              No rewards history found
            </h2>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default RewardHistory;
