import { Box, Button, Typography } from "@mui/material";
import { earningPayout, glassesOfOwnerServer } from "contract/functions";
import { formatEther } from "ethers/lib/utils";
import useMediaQuery from "hooks/useMediaQuery";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculatePayout,
  claimPayout,
  getNonClaimedTransactions,
  getRewardsHistory,
} from "utils/api";
import LoaderGif from "../../assets/Loading_icon.gif";
import { ToastMessage } from "components/ToastMessage";
import { setGlasses } from "redux/reducers/Profile_State";
import MuiButton from "components/MuiButton";
import LocalServices from "services/LocalServices";

const RewardHistory = () => {
  const [history, setHistory] = useState([]);
  const [rewards, setRewards] = useState(null);
  const dispatch = useDispatch();

  const [commonRewards, setCommonRewards] = useState(null);
  const [rareRewards, setRareRewards] = useState(null);
  const [superscriptRewards, setSuperscriptRewards] = useState(null);
  const isAbove768px = useMediaQuery("(min-width: 768px)");
  const [loading, setLoading] = useState({
    common: false,
    rare: false,
    superscript: false,
  });
  let userId = LocalServices.getServices("user")?.userId || null;

  const { accountAddress } = useSelector((state) => state.metamask_state);

  useEffect(() => {
    if (accountAddress) {
      (async () => {
        if (userId) await getNonClaimedTransactions(userId);
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

  const onGlassUpdate = async () => {
    const response = await glassesOfOwnerServer(accountAddress);

    dispatch(setGlasses(response));
  };

  const onClaimUpdate = async (type) => {
    if (type === "COMMON") {
      setCommonRewards(
        await calculatePayout(accountAddress.toLowerCase(), "COMMON")
      );
    } else if (type === "RARE") {
      setRareRewards(
        await calculatePayout(accountAddress.toLowerCase(), "RARE")
      );
    } else if (type === "SUPERSCRIPT") {
      setSuperscriptRewards(
        await calculatePayout(accountAddress.toLowerCase(), "SUPERSCRIPT")
      );
    }

    const _history = await getRewardsHistory(accountAddress);
    setHistory(_history || []);

    setLoading({ ...loading, [type.toLowerCase()]: false });
  };

  const onClaimClick = async (type) => {
    try {
      setLoading({ ...loading, [type.toLowerCase()]: true });
      const apiResponse = await claimPayout(accountAddress.toLowerCase(), type);

      if (apiResponse.signature) {
        const contractResponse = await earningPayout(
          apiResponse.amount,
          apiResponse.nonce,
          apiResponse.signature,
          apiResponse.type
        );
        console.log("contractResponse ", contractResponse);

        if (contractResponse.blockHash) {
          ToastMessage("Reward has been cashed out successfully", true);
          onClaimUpdate(type);
        } else {
          ToastMessage("Something went wrong", false);
          setLoading({ ...loading, [type.toLowerCase()]: false });
        }
      }
    } catch (error) {
      ToastMessage("Something went wrong", false);
      setLoading({ ...loading, [type.toLowerCase()]: false });
    }
  };

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

        {commonRewards || rareRewards || superscriptRewards ? (
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

                <MuiButton
                  variant="contained"
                  color="primary"
                  disabled={!commonRewards?.payout}
                  onClick={() => onClaimClick("COMMON")}
                  sx={{
                    width: 80,
                    height: 35,
                  }}
                >
                  {loading.common ? (
                    <img
                      src={LoaderGif}
                      alt="loader"
                      style={{ height: "20px" }}
                    />
                  ) : (
                    <>Claim</>
                  )}
                </MuiButton>
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

                <MuiButton
                  variant="contained"
                  color="primary"
                  disabled={!rareRewards?.payout}
                  onClick={() => onClaimClick("RARE")}
                  sx={{
                    width: 80,
                    height: 35,
                  }}
                >
                  {loading.rare ? (
                    <img
                      src={LoaderGif}
                      alt="loader"
                      style={{ height: "20px" }}
                    />
                  ) : (
                    <>Claim</>
                  )}
                </MuiButton>
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

                <MuiButton
                  variant="contained"
                  color="primary"
                  disabled={!superscriptRewards?.payout}
                  onClick={() => onClaimClick("SUPERSCRIPT")}
                  sx={{
                    width: 80,
                    height: 35,
                  }}
                >
                  {loading.superscript ? (
                    <img
                      src={LoaderGif}
                      alt="loader"
                      style={{ height: "20px" }}
                    />
                  ) : (
                    <>Claim</>
                  )}
                </MuiButton>
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

                {/* <MuiButton
                  variant="contained"
                  color="primary"
                  disabled={!commonRewards?.vested}
                >
                  Claim
                </MuiButton> */}
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

                {/* <MuiButton
                  variant="contained"
                  color="primary"
                  disabled={!rareRewards?.vested}
                >
                  Claim
                </MuiButton> */}
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
        ) : (
          accountAddress && (
            <Box display="flex" justifyContent="center" width="100%">
              <img src={LoaderGif} alt="loader" style={{ height: "30px" }} />
            </Box>
          )
        )}
      </Box>
      {(commonRewards || rareRewards || superscriptRewards) &&
        accountAddress && (
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
