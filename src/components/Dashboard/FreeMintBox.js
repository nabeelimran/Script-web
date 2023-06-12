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
import MuiButton from "components/MuiButton";
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
import { claimGlasses, getFreeGlassTxn, getPoints } from "utils/api";

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 240,
  width: "100%",
  height: 40,
  marginBottom: 4,
}));

const FreeMintBoxStyle = styled(Box)(({ theme }) => ({
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

const FreeMintBox = ({ accountAddress, balance }) => {
  const [contractLoading, setContractLoading] = useState(false);

  const [isPassApproved, setIsPassApproved] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [freeMintEligible, setFreeMintEligible] = useState(false);

  const [points, setPoints] = useState(0);

  const [contractResponse, setContractResponse] = useState(null);

  const [freeMintData, setFreeMintData] = useState();

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;
      await fetchPoints();
      checkFreeMint();
      checkIsApproved();
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

  const checkFreeMint = async () => {
    try {
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
    } catch (error) {
      setFreeMintEligible(false);
    }
    
  };

  const ResolveIsApproved = () => {
    return isApproved;
  };

  const checkIsApproved = async () => {
    try {
      if (accountAddress) {
        const isAllowed = await checkApproval(accountAddress);
        setIsApproved(isAllowed);
      } else {
        setIsApproved(false);
      }  
    } catch (error) {
      setIsApproved(false);
    }
    
  };

  const handleApprove = async () => {
    if (accountAddress) {
      let receipt = await approve();
      setIsApproved(!!receipt.status);
    }
  };

  const handleFreeMint = async () => {
    try {
      if (accountAddress) {
        setContractLoading("processing");

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
        setContractLoading("success");
      }
    } catch (error) {
      console.log(error);
      setContractLoading("error");
    }
  };

  return (
    <Box mb={4}>
      <Typography variant="h4" color="textSecondary" align="center" mb={4}>
        Freemium glasses
      </Typography>
      <FreeMintBoxStyle>
        <Typography
          variant="h5"
          color={freeMintEligible ? "textSecondary" : "GrayText"}
          align="center"
        >
          {freeMintEligible
            ? "You are eligible to mint your first glasses for free!"
            : "You are not eligible for free mint!"}
        </Typography>

        <Box>
          {accountAddress ? (
            ResolveIsApproved() ? (
              <MuiButton
                disabled={contractLoading === "processing" || !freeMintEligible}
                variant="contained"
                color="primary"
                onClick={handleFreeMint}
              >
                {contractLoading === "processing"
                  ? "Minting..."
                  : balance > 0
                  ? "Mint"
                  : "Low balance"}
              </MuiButton>
            ) : (
              <MuiButton
                variant="contained"
                color="primary"
                onClick={handleApprove}
              >
                Approve
              </MuiButton>
            )
          ) : (
            <Typography>Connect your wallet</Typography>
          )}
        </Box>
      </FreeMintBoxStyle>
    </Box>
  );
};

export default FreeMintBox;
