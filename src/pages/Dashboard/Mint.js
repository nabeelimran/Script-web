import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import {
//   useAccount,
//   useContractWrite,
//   usePrepareContractWrite,
//   useWaitForTransaction,
// } from "wagmi";

// import { ScriptTV__factory } from "../../contract/abi";

import { scriptTvAddress } from "utils/constants";
import {
  approve,
  approveGlassPass,
  balanceOf,
  checkApproval,
  checkGlassPassApproval,
  getGlassPassBalance,
  mintGlasses,
  isFreeClaimed,
  mintFreeGlasses,
} from "contract/functions";
import { useSelector } from "react-redux";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import {
  claimGlasses,
  getFreeGlassTxn,
  getGemsEligibility,
  getPoints,
} from "utils/api";

const MintBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: "12px",
  backgroundColor: "#000",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "300px",
    textAlign: "center",
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
}));

export default function Glass() {
  const [type, setType] = useState(1);
  const [price, setPrice] = useState(10);
  const [balance, setBalance] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [useGlassPass, setUseGlassPass] = useState(false);
  const [passBalance, setPassBalance] = useState(0);
  const [isPassApproved, setIsPassApproved] = useState(false);

  const { accountAddress } = useSelector((state) => state.metamask_state);

  const [contractLoading, setContractLoading] = useState(false);
  const [contractResponse, setContractResponse] = useState(null);

  const [freeMintEligible, setFreeMintEligible] = useState(false);
  const [freeMintData, setFreeMintData] = useState();
  const [points, setPoints] = useState(0);
  const [gemEligibleGlasses, setGemEligibleGlasses] = useState();

  console.log("accountAddress", accountAddress);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;
      await fetchPoints();
      checkFreeMint();
      checkIsApproved();
      getBalance();
      getPassBalance();
      checkPassIsApproved();
      getGemEligibleGlasses();
    })();
  }, [accountAddress]);

  useEffect(() => {
    setPrice(glassesPrice[type]);
    setUseGlassPass(false);
  }, [type]);

  const glassesPrice = [10, 20, 30];

  const handleTypeSelect = (e) => {
    setType(Number(e.target.value));
  };

  const handleSwitch = (event) => {
    setUseGlassPass(event.target.checked);
  };

  // const checkFreemiumAvailablity = async () => {
  //   if (accountAddress) {
  //     const points = await getPoints(accountAddress);
  //     console.log("points", points);

  //     const balance = await getGlassPassBalance(accountAddress);
  //     console.log("balance", balance);

  //     if (points >= 2000 && balance >= 1) {
  //       setFreeMium(true);
  //     }
  //   }
  // };

  const fetchPoints = async () => {
    if (accountAddress) {
      try {
        const points = await getPoints(accountAddress.toLowerCase());
        setPoints(points);
      } catch (error) {
        setPoints(0);
      }
    }
  };

  const checkFreeMint = async () => {
    if (accountAddress) {
      let freeclaimed = await isFreeClaimed(accountAddress.toLowerCase());
      if (freeclaimed) {
        setFreeMintEligible(false);
        return;
      }

      let passBalance = await getGlassPassBalance(accountAddress);
      console.log(
        "passBalance",
        passBalance,
        "points",
        points,
        "accountAddress"
      );

      let mintTx = await getFreeGlassTxn(accountAddress.toLowerCase());
      console.log("mintTx", mintTx);
      if (
        mintTx?.signature &&
        !mintTx?.executed &&
        mintTx.type === "FREE_MINT"
      ) {
        setFreeMintData(mintTx);
        setFreeMintEligible(true);
        return;
      }
      if (passBalance || points >= 2000) {
        setFreeMintEligible(true);
      } else {
        setFreeMintEligible(false);
      }
    }
  };

  const getGemEligibleGlasses = async () => {
    if (accountAddress) {
      let glasses = await getGemsEligibility(accountAddress);
      console.log("glasses", glasses);
    }
  };

  const getBalance = async () => {
    if (accountAddress) {
      const balance = await balanceOf(accountAddress);
      setBalance(Number(balance));
    }
  };

  const checkIsApproved = async () => {
    if (accountAddress) {
      const isAllowed = await checkApproval(accountAddress);
      setIsApproved(isAllowed);
    }
  };

  const handleApprove = async () => {
    if (accountAddress) {
      let receipt = await approve();
      setIsApproved(!!receipt.status);
    }
  };

  const getPassBalance = async () => {
    if (accountAddress) {
      const balance = await getGlassPassBalance(accountAddress);
      console.log("balance", balance);
      setPassBalance(Number(balance));
    }
  };

  const checkPassIsApproved = async () => {
    if (accountAddress) {
      const isAllowed = await checkGlassPassApproval(accountAddress);
      setIsPassApproved(isAllowed);
    }
  };

  const handlePassApprove = async () => {
    if (accountAddress) {
      let receipt = await approveGlassPass();
      setIsPassApproved(!!receipt.status);
    }
  };

  const ResolveIsApproved = () => {
    if (useGlassPass) {
      return isPassApproved;
    } else {
      return isApproved;
    }
  };

  const onMintGlasses = async () => {
    setContractLoading("processing");
    const response = await mintGlasses(type, useGlassPass);

    if (response.status === 1) {
      setContractLoading("success");
      setContractResponse(response);
    } else {
      setContractLoading("error");
    }
  };

  const handleFreeMint = async () => {
    if (accountAddress) {
      let res;
      if (freeMintData?.signature) {
        res = freeMintData;
      } else {
        res = await claimGlasses(accountAddress.toLowerCase());
      }

      console.log(res);
      await mintFreeGlasses(
        accountAddress.toLowerCase(),
        res.nonce ?? res.id,
        res.signature
      );
      setFreeMintEligible(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 20 }} id="mint">
      {/* <Button
        variant="contained"
        color="primary"
        onClick={checkFreemiumAvailablity}
      >
        check points
      </Button> */}
      <Box mb={4}>
        {" "}
        <Typography variant="h4" color="textSecondary" align="center" mb={4}>
          Mint your glasses
        </Typography>
        <RowBox>
          {type === 2 && passBalance ? (
            <>
              <Typography>Mint using glass pass</Typography>
              <Switch
                checked={useGlassPass}
                // disabled={level<20}
                onChange={handleSwitch}
                inputProps={{ "aria-label": "Glass Pass" }}
              />
            </>
          ) : (
            <></>
          )}
        </RowBox>
        <MintBox>
          <Box>
            <Typography
              sx={{ color: "theme.palette.grey[600]", fontSize: "0.8rem" }}
              variant="overline"
            >
              MINT PRICE
            </Typography>
            <Typography variant="h4">
              {type === 2 && passBalance && useGlassPass ? 0 : price} SPAY
            </Typography>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={type.toString()}
                label="Type"
                onChange={handleTypeSelect}
              >
                <MenuItem value={0}>Common</MenuItem>
                <MenuItem value={1}>Rare</MenuItem>
                <MenuItem value={2}>Superscript</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            {accountAddress ? (
              ResolveIsApproved() ? (
                <Button
                  disabled={contractLoading === "processing"}
                  variant="contained"
                  color="primary"
                  onClick={onMintGlasses}
                >
                  {contractLoading === "processing"
                    ? "Minting..."
                    : balance > price || useGlassPass
                    ? "Mint"
                    : "Low balance"}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={useGlassPass ? handlePassApprove : handleApprove}
                >
                  Approve
                </Button>
              )
            ) : (
              <Typography>Connect your wallet</Typography>
            )}
          </Box>
        </MintBox>
      </Box>

      {!freeMintEligible && (
        <Box mb={4}>
          <Typography variant="h4" color="textSecondary" align="center" mb={4}>
            Freemium glasses
          </Typography>
          <MintBox>
            <Typography variant="h5" color="textSecondary" align="center">
              You are eligible to mint your first glasses for free!{" "}
            </Typography>
            {/* <Box>
              <Typography
                sx={{ color: "theme.palette.grey[600]", fontSize: "0.8rem" }}
                variant="overline"
              >
                MINT PRICE
              </Typography>
              <Typography variant="h4">
                {type === 2 && passBalance && useGlassPass ? 0 : price} SPAY
              </Typography>
            </Box> */}
            {/* <Box>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={type.toString()}
                  label="Type"
                  onChange={handleTypeSelect}
                >
                  <MenuItem value={0}>Common</MenuItem>
                  <MenuItem value={1}>Rare</MenuItem>
                  <MenuItem value={2}>Superscript</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            <Box>
              {accountAddress ? (
                ResolveIsApproved() ? (
                  <Button
                    disabled={contractLoading === "processing"}
                    variant="contained"
                    color="primary"
                    onClick={handleFreeMint}
                  >
                    {contractLoading === "processing"
                      ? "Minting..."
                      : balance > price || useGlassPass
                      ? "Mint"
                      : "Low balance"}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={useGlassPass ? handlePassApprove : handleApprove}
                  >
                    Approve
                  </Button>
                )
              ) : (
                <Typography>Connect your wallet</Typography>
              )}
            </Box>
          </MintBox>
        </Box>
      )}

      {/* {true && (
        <Box mb={4} bgcolor="gray" position="relative">
          <Overlay />
          <Typography variant="h4" color="textSecondary" align="center" mb={4}>
            Gem Mint
          </Typography>
          <MintBox>
            <Box>
              <Typography
                sx={{ color: "theme.palette.grey[600]", fontSize: "0.8rem" }}
                variant="overline"
              >
                MINT PRICE
              </Typography>
              <Typography variant="h4">
                {type === 2 && passBalance && useGlassPass ? 0 : price} SPAY
              </Typography>
            </Box>
            <Box>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={type.toString()}
                  label="Type"
                  onChange={handleTypeSelect}
                >
                  <MenuItem value={0}>Common</MenuItem>
                  <MenuItem value={1}>Rare</MenuItem>
                  <MenuItem value={2}>Superscript</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              {accountAddress ? (
                ResolveIsApproved() ? (
                  <Button
                    disabled={contractLoading === "processing"}
                    variant="contained"
                    color="primary"
                    onClick={onMintGlasses}
                  >
                    {contractLoading === "processing"
                      ? "Minting..."
                      : balance > price || useGlassPass
                      ? "Mint"
                      : "Low balance"}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={useGlassPass ? handlePassApprove : handleApprove}
                  >
                    Approve
                  </Button>
                )
              ) : (
                <Typography>Connect your wallet</Typography>
              )}
            </Box>
          </MintBox>
        </Box>
      )} */}
      {contractLoading === "success" && (
        <div>
          Successfully minted your NFT!
          <div>
            check you transaction on
            <a
              href={`https://goerli.etherscan.io/tx/${contractResponse?.transactionHash}`}
            >
              {" "}
              Etherscan
            </a>
          </div>
        </div>
      )}
    </Container>
  );
}

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 240,
  width: "100%",
  height: 40,
  marginBottom: 4,
}));
