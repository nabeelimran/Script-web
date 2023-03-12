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
import MintBox from "components/Dashboard/MintBox";
import FreeMintBox from "components/Dashboard/FreeMintBox";
import GemMintBox from "components/Dashboard/GemMintBox";

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

export default function Glass() {
  const [balance, setBalance] = useState(0);

  const { accountAddress } = useSelector((state) => state.metamask_state);

  console.log("accountAddress", accountAddress);

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;

      getBalance();
    })();
  }, [accountAddress]);

  const getBalance = async () => {
    if (accountAddress) {
      const balance = await balanceOf(accountAddress);
      setBalance(Number(balance));
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 20 }} id="mint">
      <MintBox accountAddress={accountAddress} balance={balance} />

      <FreeMintBox accountAddress={accountAddress} balance={balance} />
      <GemMintBox accountAddress={accountAddress} balance={balance} />

      {/* {contractLoading === "success" && (
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
      )} */}
    </Container>
  );
}
