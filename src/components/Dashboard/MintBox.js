import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import {
  approve,
  approveGlassPass,
  checkApproval,
  getGlassPassBalance,
  mintGlasses,
} from "contract/functions";
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
      setIsApproved(isAllowed);
    }
  };

  const handleTypeSelect = (e) => {
    setType(Number(e.target.value));
  };

  const onMintGlasses = async () => {
    try {
      setContractLoading("processing");
      const response = await mintGlasses(type, useGlassPass);

      if (response.status === 1) {
        setContractLoading("success");
        setContractResponse(response);
      } else {
        setContractLoading("error");
      }
    } catch (error) {
      console.log(error);
      setContractLoading("error");
    }
  };

  const handlePassApprove = async () => {
    if (accountAddress) {
      let receipt = await approveGlassPass();
      setIsPassApproved(!!receipt.status);
    }
  };

  const handleApprove = async () => {
    if (accountAddress) {
      let receipt = await approve();
      setIsApproved(!!receipt.status);
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
              <Button
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
      </MintBoxStyle>
    </Box>
  );
};

export default MintBox;
