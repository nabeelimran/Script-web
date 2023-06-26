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
import { ToastMessage } from "components/ToastMessage";
import {
  approveGlassPass,
  checkGlassPassApproval,
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

const GlassPassBoxStyle = styled(Box)(({ theme }) => ({
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

const GlassPassBox = ({ accountAddress, balance }) => {
  const [contractLoading, setContractLoading] = useState(false);

  const [isPassApproved, setIsPassApproved] = useState(false);

  const [contractResponse, setContractResponse] = useState(null);
  const [passBalance, setPassBalance] = useState(0);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;
      getPassBalance();
      checkPassIsApproved();
    })();
  }, [accountAddress]);

  const ResolveIsApproved = () => {
    return isPassApproved;
  };

  const checkPassIsApproved = async () => {
    if (accountAddress) {
      const isAllowed = await checkGlassPassApproval(accountAddress);
      setIsPassApproved(isAllowed);
    }
  };

  const handlePassApprove = async () => {
    if (accountAddress) {
      try {
        setContractLoading("processing");

        let receipt = await approveGlassPass();

        setContractLoading("approved");

        ToastMessage("Approved", true);
        await checkPassIsApproved();
      } catch (error) {
        console.log(error);
        setContractLoading("error");
        ToastMessage("Approval failed");
      }
    }
  };

  const getPassBalance = async () => {
    if (accountAddress) {
      const balance = await getGlassPassBalance(accountAddress);
      setPassBalance(Number(balance));
    }
  };

  const onMintGlassPass = async () => {
    try {
      setContractLoading("processing");
      const response = await mintGlasses(2, true);

      if (response.status === 1) {
        setContractLoading("success");
        setContractResponse(response);
        getPassBalance();
        await checkPassIsApproved();
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

  if (passBalance == 0) return <></>;

  return (
    <Box mb={4}>
      <Typography variant="h4" color="textSecondary" align="center" mb={3}>
        Exchange Glass Pass for SuperScript
      </Typography>
      <GlassPassBoxStyle>
        <Typography
          variant="h5"
          //color={freeMintEligible ? "textSecondary" : "GrayText"}
          align="center"
        >
          Mint your SuperScript Glass
        </Typography>

        <Box>
          {accountAddress ? (
            ResolveIsApproved() ? (
              <MuiButton
                disabled={contractLoading === "processing"}
                variant="contained"
                color="primary"
                onClick={onMintGlassPass}
              >
                {contractLoading === "processing" ? "Minting..." : "Mint"}
              </MuiButton>
            ) : (
              <MuiButton
                variant="contained"
                color="primary"
                onClick={handlePassApprove}
                disabled={contractLoading === "processing"}
              >
                {contractLoading === "processing" ? "Approving..." : "Approve"}
              </MuiButton>
            )
          ) : (
            <Typography>Connect your wallet</Typography>
          )}
        </Box>
      </GlassPassBoxStyle>
    </Box>
  );
};

export default GlassPassBox;
