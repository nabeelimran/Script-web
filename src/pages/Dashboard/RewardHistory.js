import { Box, Button } from "@mui/material";
import { formatEther } from "ethers/lib/utils";
import useMediaQuery from "hooks/useMediaQuery";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { calculatePayout, claimPayout, getRewardsHistory } from "utils/api";

const RewardHistory = () => {
  const [history, setHistory] = useState([]);
  const [rewards, setRewards] = useState(null);

  const [commonRewards, setCommonRewards] = useState(null);
  const [rareRewards, setRareRewards] = useState(null);
  const [superscriptRewards, setSuperscriptRewards] = useState(null);
  const isAbove768px = useMediaQuery("(min-width: 768px)");

  const { accountAddress } = useSelector((state) => state.metamask_state);

  useEffect(() => {
    if (accountAddress) {
      (async () => {
        const _history = await getRewardsHistory(accountAddress);
        setHistory(_history || []);

        //await claimPayout(accountAddress.toLowerCase(), "RARE");

        setCommonRewards(
          await calculatePayout(accountAddress.toLowerCase(), "COMMON")
        );

        setRareRewards(
          await calculatePayout(accountAddress.toLowerCase(), "RARE")
        );

        setSuperscriptRewards(
          await calculatePayout(accountAddress.toLowerCase(), "SUPERSCRIPT")
        );
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
      <Box width={isAbove768px ? 900 : "100%"} mb={2}>
        <h2 className="text-4xl my-2 font-semibold text-center mb-5">
          Rewards
        </h2>

        {!accountAddress && (
          <Box
            margin="0 auto"
            width={"100%"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <h2 className="text-xl my-2 font-semibold text-center mb-5">
              Connect your wallet to claim rewards
            </h2>
          </Box>
        )}

        {(commonRewards || rareRewards || superscriptRewards) && (
          <>
            <Box
              margin="0 auto"
              width={isAbove768px ? 500 : "100%"}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              mb={5}
            >
              <h2 className="text-xl my-2 text-[#FFD700] font-semibold  mb-3">
                Claimable Rewards
              </h2>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <h2
                  className="text-md  
              
                font-semibold text-center"
                >
                  COMMON GLASS : {commonRewards?.payout.toFixed(2) || 0} SPAY
                </h2>

                <Button
                  variant="contained"
                  color="primary"
                  disabled={!commonRewards?.payout}
                >
                  Claim
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <h2
                  className="text-md  
                
                font-semibold text-center"
                >
                  RARE GLASS : {rareRewards?.payout.toFixed(2) || 0} SPAY
                </h2>

                <Button
                  variant="contained"
                  color="primary"
                  disabled={!rareRewards?.payout}
                >
                  Claim
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <h2 className="text-md  font-semibold text-center">
                  SUPERSCRIPT GLASS :{" "}
                  {superscriptRewards?.payout.toFixed(2) || 0} SPAY
                </h2>

                <Button
                  variant="contained"
                  color="primary"
                  disabled={!superscriptRewards?.payout}
                >
                  Claim
                </Button>
              </Box>
            </Box>
            <Box
              margin="0 auto"
              width={isAbove768px ? 500 : "100%"}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              mb={5}
            >
              <h2 className="text-xl my-2 text-[#FFD700] font-semibold  mb-3">
                Vested Rewards
              </h2>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <h2
                  className="text-md  
              
                font-semibold text-center"
                >
                  COMMON GLASS : {commonRewards?.vested.toFixed(2) || 0} SPAY
                </h2>

                {/* <Button
                  variant="contained"
                  color="primary"
                  disabled={!commonRewards?.vested}
                >
                  Claim
                </Button> */}
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <h2
                  className="text-md  
                
                font-semibold text-center"
                >
                  RARE GLASS : {rareRewards?.vested.toFixed(2) || 0} SPAY
                </h2>

                {/* <Button
                  variant="contained"
                  color="primary"
                  disabled={!rareRewards?.vested}
                >
                  Claim
                </Button> */}
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <h2 className="text-md  font-semibold text-center">
                  SUPERSCRIPT GLASS :{" "}
                  {superscriptRewards?.vested.toFixed(2) || 0} SPAY
                </h2>

                {/* <Button
                  variant="contained"
                  color="primary"
                  disabled={!superscriptRewards?.vested}
                >
                  Claim
                </Button> */}
              </Box>
            </Box>
          </>
        )}
      </Box>
      {true && (
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
      )}
    </Box>
  );
};

export default RewardHistory;
