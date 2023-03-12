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
  isFreeClaimed,
  mintFreeGlasses,
  mintGlasses,
} from "contract/functions";
import React, { useEffect, useState } from "react";
import {
  claimGlasses,
  getFreeGlassTxn,
  getGemsEligibility,
  getPoints,
} from "utils/api";

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 240,
  width: "100%",
  height: 40,
  marginBottom: 4,
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 1,
}));

const GemMintBoxStyle = styled(Box)(({ theme }) => ({
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

const GemMintBox = ({ accountAddress, balance }) => {
  const [contractLoading, setContractLoading] = useState(false);

  const [isPassApproved, setIsPassApproved] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [freeMintEligible, setFreeMintEligible] = useState(false);

  const [points, setPoints] = useState(0);

  const [contractResponse, setContractResponse] = useState(null);

  const [gemEligibleGlasses, setGemEligibleGlasses] = useState([]);

  const [freeMintData, setFreeMintData] = useState();

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;
      await fetchPoints();

      checkIsApproved();
      getGemEligibleGlasses();
    })();
  }, [accountAddress]);

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

  const getGemEligibleGlasses = async () => {
    if (accountAddress) {
      let glasses = await getGemsEligibility(accountAddress);
      console.log("glasses", glasses);
      setGemEligibleGlasses(glasses);
    }
  };

  const ResolveIsApproved = () => {
    return isApproved;
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

  if (freeMintEligible) return null;

  return (
    <Box mb={4} position="relative">
      <Typography
        variant="h4"
        color={
          !gemEligibleGlasses.length
            ? "rgb(179 179 179 / 50%)"
            : "textSecondary"
        }
        align="center"
        mb={4}
      >
        Gem Mint
      </Typography>
      <GemMintBoxStyle position="relative">
        {!gemEligibleGlasses.length && <Overlay />}
        <Typography variant="h5" color="textSecondary" align="center">
          You are eligible to mint GEM
        </Typography>
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
                onClick={() => {}}
              >
                {contractLoading === "processing"
                  ? "Minting..."
                  : balance > 0
                  ? "Mint"
                  : "Low balance"}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleApprove}
              >
                Approve
              </Button>
            )
          ) : (
            <Typography>Connect your wallet</Typography>
          )}
        </Box>
      </GemMintBoxStyle>
    </Box>
  );
};

export default GemMintBox;
