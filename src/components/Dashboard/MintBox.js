import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import MuiButton from "components/MuiButton";
import { ToastMessage } from "components/ToastMessage";
import {
  approve,
  approveGlassPass,
  checkApproval,
  getGlassPassBalance,
  mintGlasses,
} from "contract/functions";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 240,
  width: "100%",
  height: 40,
  marginBottom: 4,
}));

const MintBoxStyle = styled(Box)(({ theme }) => ({
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

const MintBox = ({ accountAddress, balance }) => {
  const glassesPrice = [10, 20, 30];

  const [type, setType] = useState(1);
  const [contractLoading, setContractLoading] = useState(false);

  const [useGlassPass, setUseGlassPass] = useState(false);
  const [isPassApproved, setIsPassApproved] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [passBalance, setPassBalance] = useState(0);

  const [contractResponse, setContractResponse] = useState(null);

  const [glassTypePrice, setGlassTypePrice] = useState(10);

  useEffect(() => {
    setGlassTypePrice(glassesPrice[type]);
    setUseGlassPass(false);
  }, [type]);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;

      getPassBalance();
      checkIsApproved();
    })();
  }, [accountAddress]);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;

      checkIsApproved();
    })();
  }, [type]);

  const getPassBalance = async () => {
    if (accountAddress) {
      const balance = await getGlassPassBalance(accountAddress);
      console.log("balance", balance);
      setPassBalance(Number(balance));
    }
  };

  const handleSwitch = (event) => {
    setUseGlassPass(event.target.checked);
  };

  const ResolveIsApproved = () => {
    console.log("useGlassPass MintBox", useGlassPass);
    if (useGlassPass) {
      return isPassApproved;
    } else {
      return isApproved;
    }
  };

  const checkIsApproved = async () => {
    if (accountAddress) {
      const isAllowed = await checkApproval(accountAddress);
      console.log(
        "isAllowed",
        glassesPrice[type],
        Number(ethers.utils.formatEther(isAllowed.toString())),
        type
      );
      if (
        glassesPrice[type] <=
        Number(ethers.utils.formatEther(isAllowed.toString()))
      ) {
        setIsApproved(true);
      } else {
        setIsApproved(false);
      }
    }
  };

  const handleTypeSelect = (e) => {
    setType(Number(e.target.value));
  };

  const onMintGlasses = async () => {
    try {
      setContractLoading("processing");
      const response = await mintGlasses(type, useGlassPass);

      console.log("response", response);

      if (response.status === 1) {
        setContractLoading("success");
        setContractResponse(response);
        ToastMessage("Glass minted successfully", true);
      } else {
        setContractLoading("error");
      }
    } catch (error) {
      console.log(error);
      setContractLoading("error");
      ToastMessage("Glass minting failed");
    }
  };

  const handlePassApprove = async () => {
    if (accountAddress) {
      try {
        setContractLoading("processing");

        let receipt = await approveGlassPass();
        setContractLoading("approved");

        ToastMessage("Approved", true);
        await checkIsApproved();
      } catch (error) {
        console.log(error);
        setContractLoading("error");
        ToastMessage("Approval failed");
      }
    }
  };

  const handleApprove = async () => {
    if (accountAddress) {
      try {
        setContractLoading("processing");

        let receipt = await approve();
        setContractLoading("approved");

        ToastMessage("Approved", true);
        await checkIsApproved();
      } catch (error) {
        console.log(error);
        setContractLoading("error");
        ToastMessage("Approval failed");
      }
    }
  };

  return (
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
      <MintBoxStyle>
        <Box>
          <Typography
            sx={{ color: "theme.palette.grey[600]", fontSize: "0.8rem" }}
            variant="overline"
          >
            MINT PRICE
          </Typography>
          <Typography variant="h4">
            {type === 2 && passBalance && useGlassPass ? 0 : glassTypePrice}{" "}
            SPAY
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
              <MuiButton
                disabled={contractLoading === "processing"}
                variant="contained"
                color="primary"
                onClick={onMintGlasses}
              >
                {contractLoading === "processing"
                  ? "Minting..."
                  : balance > glassTypePrice || useGlassPass
                  ? "Mint"
                  : "Low balance"}
              </MuiButton>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={useGlassPass ? handlePassApprove : handleApprove}
                disabled={contractLoading === "processing"}
              >
                {contractLoading === "processing" ? "Approving..." : "Approve"}
              </Button>
            )
          ) : (
            <Typography>Connect your wallet</Typography>
          )}
        </Box>
      </MintBoxStyle>
      {contractLoading === "success" && (
        <Box display="flex" mt={2}>
          Glass Successfully Minted,
          <Box>
            Check you transaction on
            <Link
              target="_blank"
              href={`https://goerli.etherscan.io/tx/${contractResponse?.transactionHash}`}
            >
              {" "}
              Etherscan
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MintBox;
