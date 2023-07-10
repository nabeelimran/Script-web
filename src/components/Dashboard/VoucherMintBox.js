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
  approveVoucher,
  balanceOf,
  checkApproval,
  checkVoucherApproval,
  checkVoucherForTvApproval,
  getGlassPassBalance,
  getVoucherBalance,
  mintGlasses,
  mintVoucher,
} from "contract/functions";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {
  fetchEquippedVouchers,
  getVoucherEligibility,
  getVoucherSignature,
} from "utils/api";
import voucherImg from '../../assets/images/voucher-alt.png'

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 240,
  width: "100%",
  height: 40,
  marginBottom: 4,
}));

const VoucherMintBoxStyle = styled(Box)(({ theme }) => ({
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

const VoucherMintBox = ({ accountAddress, onVoucherMintSuccess }) => {
  const voucherPrices = [250, 500, 800];

  const [type, setType] = useState(1);
  const [contractLoading, setContractLoading] = useState(false);

  const [useGlassPass, setUseGlassPass] = useState(false);
  const [isPassApproved, setIsPassApproved] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [passBalance, setPassBalance] = useState(0);

  const [voucherBalance, setVoucherBalance] = useState([0, 0, 0]);

  const [equippedBalance, setEquippedBalance] = useState();

  const [contractResponse, setContractResponse] = useState(null);

  const [glassTypePrice, setGlassTypePrice] = useState(10);

  const [balance, setBalance] = useState(0);

  const [isVoucherApproved, setIsVoucherApproved] = useState(false);

  const [voucherEligible, setVoucherEligible] = useState({
    eligibility: false,
    types: [false, false, false],
  });

  useEffect(() => {
    // setGlassTypePrice(glassesPrice[type]);
    // setUseGlassPass(false);

    (async () => {
      if (!accountAddress) return;

      await handleCheckVoucherApproval();
    })();
  }, [type]);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;
      await checkVoucherEligibility();
      await handleCheckVoucherApproval();
      await getBalance();
    })();
  }, [accountAddress]);

  const getBalance = async () => {
    try {
      if (accountAddress) {
        const balance = await balanceOf(accountAddress);
        setBalance(Number(balance));
      }  
    } catch (error) {
      setBalance(0);
    }
    
  };

  const handleCheckVoucherApproval = async () => {
    try {
      if (accountAddress) {
        let approval = await checkVoucherApproval(accountAddress);
  
        console.log(
          "handleCheckVoucherApproval",
          voucherPrices[type],
  
          ethers.utils
            .parseUnits(voucherPrices[type].toString(), "ether")
            .toString(),
          approval,
          type
        );
  
        if (
          ethers.utils
            .parseUnits(voucherPrices[type].toString(), "ether")
            .toString() <= approval
        )
          setIsVoucherApproved(true);
        else setIsVoucherApproved(false);
      }  
    } catch (error) {
      setIsVoucherApproved(false);
    }
    
  };

  const checkVoucherEligibility = async () => {
    if (accountAddress) {
      let eligibility = await getVoucherEligibility(
        accountAddress.toLowerCase()
      );
      console.log("Eligible >", eligibility);
      setVoucherEligible(eligibility);
    }
  };

  const handleApproveVoucher = async () => {
    if (accountAddress && voucherEligible.eligibility) {
      try {
        setContractLoading("processing");
        await approveVoucher();
        await handleCheckVoucherApproval();

        setContractLoading("approved");
        ToastMessage("Approved", true);
      } catch (error) {
        console.log(error);
        setContractLoading("error");
        ToastMessage("Approval failed");
      }
    }
  };

  const checkIsApproved = async () => {
    try {
      if (accountAddress) {
        const isAllowed = await checkVoucherForTvApproval(accountAddress);
        setIsApproved(isAllowed);
      }  
    } catch (error) {
      setIsApproved(false);
    }
  };

  const handleFetchVouchers = async () => {
    if (accountAddress) {
      const vouchers = await getVoucherBalance(accountAddress);
      console.log("vouchers", vouchers);
      setVoucherBalance(vouchers);
    }
  };

  const handleFetchEquipped = async () => {
    try {
      if (accountAddress) {
        const vouchers = await fetchEquippedVouchers(accountAddress);
        console.log("handleFetchEquipped", vouchers);
        setEquippedBalance(vouchers);
      }  
    } catch (error) {
      console.log(error);
    }
    
  };

  const ResolveIsApproved = () => {
    console.log("useGlassPass VoucherMintBox", useGlassPass);
    if (useGlassPass) {
      return isPassApproved;
    } else {
      return isApproved;
    }
  };

  const handleTypeSelect = (e) => {
    setType(Number(e.target.value));
  };

  const onVoucherMint = async () => {
    try {
      if (isVoucherApproved) {
        setContractLoading("processing");
        const res = await getVoucherSignature(
          accountAddress.toLowerCase(),
          type,
          voucherEligible.types[type]
        );
        console.log("res", res);
        const response = await mintVoucher(
          res.address,
          res.voucherType,
          res.tokenId,
          res.nonce,
          res.signature
        );
        checkVoucherEligibility();

        console.log("response", response);

        if (response.status === 1) {
          setContractLoading("success");
          setContractResponse(response);
          onVoucherMintSuccess();
          ToastMessage("Voucher Minted Successfully", true);
        } else {
          setContractLoading("error");
        }
      }
    } catch (error) {
      console.log("error", error);
      setContractLoading("error");
      ToastMessage("Voucher Minting Failed");
    }
  };

  return (
    <Box mb={4}>
      {" "}
      <Typography variant="h4" color="textSecondary" align="center" mb={1}>
        Mint your vouchers
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', mb:1}}>
        <img src={voucherImg} style={{maxWidth: 120, borderRadius: 12}} alt="glasses" />
      </Box>
      <VoucherMintBoxStyle>
        <Box>
          <Typography
            sx={{ color: "theme.palette.grey[600]", fontSize: "0.8rem" }}
            variant="overline"
          >
            Voucher Mint Price
          </Typography>
          <Typography variant="h4">
            {voucherPrices[type]} <span style={{ fontSize: "1rem" }}>SPAY</span>
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
            voucherEligible.types && voucherEligible.types[type] ? (
              isVoucherApproved ? (
                <MuiButton
                  disabled={contractLoading === "processing"}
                  variant="contained"
                  color="primary"
                  onClick={onVoucherMint}
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
                  onClick={handleApproveVoucher}
                  disabled={contractLoading === "processing"}
                >
                  {contractLoading === "processing" ? "Approving" : "Approve"}
                </MuiButton>
              )
            ) : (
              <MuiButton
                variant="contained"
                color="primary"
                onClick={() => {}}
                disabled
              >
                Not Eligible
              </MuiButton>
            )
          ) : (
            <Typography>Connect your wallet</Typography>
          )}
        </Box>
      </VoucherMintBoxStyle>
      {contractLoading === "success" && (
        <Box display="flex" mt={2}>
          Voucher Successfully Minted,{" "}
          <Box>
            Check your transaction on
            <Link
              target="_blank"
              href={`https://testnet.bscscan.com/tx/${contractResponse?.transactionHash}`}
            >
              {" "}
              BscScan
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VoucherMintBox;
