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
import { approve, checkApproval, getNextImg, mintGlasses } from "contract/functions";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

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
  const [nextImg, setNextImg] = useState('');
  const [contractLoading, setContractLoading] = useState(false);

  const [isApproved, setIsApproved] = useState(false);

  const [contractResponse, setContractResponse] = useState(null);

  const [glassTypePrice, setGlassTypePrice] = useState(10);

  useEffect(() => {
    fetchNextImg();
  }, []);

  useEffect(() => {
    setGlassTypePrice(glassesPrice[type]);
  }, [type]);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;

      checkIsApproved();
    })();
  }, [accountAddress, type]);

  const ResolveIsApproved = () => {
    return isApproved;
  };

  const checkIsApproved = async () => {
    try {
      if (accountAddress) {
        const isAllowed = await checkApproval(accountAddress);
        if (
          ethers.utils
            .parseUnits(glassesPrice[type].toString(), "ether")
            .toString() <= isAllowed
        ) {
          setIsApproved(true);
        } else {
          setIsApproved(false);
        }
      } 
    } catch (error) {
      setIsApproved(false);
    }
  };

  const handleTypeSelect = (e) => {
    setType(Number(e.target.value));
  };

  const onMintGlasses = async () => {
    try {
      setContractLoading("processing");
      const response = await mintGlasses(type);

      if (response.status === 1) {
        setContractLoading("success");
        setContractResponse(response);

        await checkIsApproved();
        fetchNextImg();
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

  const handleApprove = async () => {
    if (accountAddress) {
      try {
        setContractLoading("processing");

        let receipt = await approve();
        setContractLoading("approved");

        await checkIsApproved();
        ToastMessage("Approved", true);
      } catch (error) {
        console.log(error);
        setContractLoading("error");
        ToastMessage("Approval failed");
      }
    }
  };
  const fetchNextImg = async () => {
    if (accountAddress) {
      try {
        let nextImg = await getNextImg();
        setNextImg(nextImg);
        // console.log(nextImg);
      } catch (error) {
      }
    }
  };



  return (
    <Box mb={6}>
      {" "}
      <Typography variant="h4" color="textSecondary" align="center" mb={3}>
        Mint your glass
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', mb:1}}>
        <img src={nextImg} style={{maxWidth: 120, borderRadius: 12}} alt="glasses" />
      </Box>
      <MintBoxStyle>
        <Box>
          <Typography
            sx={{ color: "theme.palette.grey[600]", fontSize: "0.8rem" }}
            variant="overline"
          >
            MINT PRICE
          </Typography>
          <Typography variant="h4">{glassTypePrice} SPAY</Typography>
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
                  : balance > glassTypePrice
                  ? "Mint"
                  : "Low balance"}
              </MuiButton>
            ) : (
              <MuiButton
                variant="contained"
                color="primary"
                onClick={handleApprove}
                disabled={contractLoading === "processing"}
              >
                {contractLoading === "processing" ? "Approving..." : "Approve"}
              </MuiButton>
            )
          ) : (
            <Typography>Connect your wallet</Typography>
          )}
        </Box>
      </MintBoxStyle>
      {contractLoading === "success" && (
        <Box display="flex" mt={2}>
          Glass Successfully Minted,{" "}
          <Box>
            Check your transaction on
            <Link
              target="_blank"
              href={`https://testnet.bscscan.com/tx/${contractResponse?.transactionHash}`}
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
