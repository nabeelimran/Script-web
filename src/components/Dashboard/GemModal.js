import {
  Dispatch,
  forwardRef,
  ReactElement,
  Ref,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material/styles";
import gem from "../../assets/images/gem.png";

import { approve, checkApproval, equipgem } from "contract/functions";
import { useDispatch, useSelector } from "react-redux";
import { getGemPrice, getGemSignature } from "utils/api";
import MuiButton from "components/MuiButton";
import { ethers } from "ethers";
import { ToastMessage } from "components/ToastMessage";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GemModal({
  id,
  img,
  open,
  setOpen,
  setGemEligibleGlasses,
}) {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [claimData, setClaimData] = useState();
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const { balance } = useSelector((state) => state.Profile_State);

  console.log("gem component balance", balance);

  useEffect(() => {
    if (accountAddress) {
      fetchPrice();
      checkIsApproved();
    }
  }, [id, accountAddress]);

  const fetchPrice = async () => {
    try {
      if (accountAddress) {
        let price = await getGemPrice(id);
        console.log("price", { price, id });
        setPrice(price);
      }
    } catch (error) {
    }
  };

  const handleEquipGem = async () => {
    try {
      if (accountAddress) {
        let res;
        // await checkIsApproved();
        if (isApproved) {
          if (claimData?.signature) {
            res = claimData;
          } else {
            res = await getGemSignature(id);
            setClaimData(res);
          }
          await equipgem(res.tokenId, res.gemType, res.nonce, res.signature);
          handleClose();
          setGemEligibleGlasses([]);
        } else {
          await handleApprove();
          // ToastMessage("Insufficient Approval");
        }
      }
    } catch (error) {
    }
  };

  const checkIsApproved = async () => {
    try {
      if (accountAddress) {
        const isAllowed = await checkApproval(accountAddress);
        if (
          ethers.utils
            .parseUnits(price.toString(), "ether")
            .toString() <= isAllowed
        ) {
          setIsApproved(true);
        } else {
          setIsApproved(false);
          // checkIsApproved()
        }
      } 
    } catch (error) {
      setIsApproved(false);
    }
  };

  const handleApprove = async () => {
    try {
      if (accountAddress) {
        try {
          let receipt = await approve();
          setIsApproved(true);
        } catch (error) {
          console.log(error);
          setIsApproved(false)
          // setContractLoading("error");
          // ToastMessage("Approval failed");
        }
      }
    } catch (error) {
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <GemBox mb={3}>
        <img src={gem} alt="" />
        <Box>
          <Typography variant="h1">GEM</Typography>
          <Typography variant="body2">TIER_{price / 10}</Typography>
        </Box>
      </GemBox>
      <DialogContent sx={{ p: 0 }}>
        <GlassBox>
          <Typography variant="h1" textAlign="center" color="primary">
            Add Gem
          </Typography>
          <img
            style={{
              width: "50%",
              display: "block",
              margin: "12px auto 0px auto",
            }}
            src={img}
            alt="glasses"
          />
          {/* <Typography textAlign="center" variant="subtitle2" mb={1.5}>Level 10</Typography>
            <Typography variant="subtitle2" color="primary">Level up to lvl 11</Typography> */}
          <RowBox mt={4} mb={1.5}>
            <Typography variant="subtitle2">Cost</Typography>
            <Typography variant="subtitle2">{price} SPAY</Typography>
          </RowBox>
          {/* <RowBox mb={4}>
              <Typography variant="subtitle2">Time</Typography>
              <Typography variant="subtitle2">{time} Mins</Typography>
            </RowBox> */}
          <MuiButton
            variant="contained"
            disabled={balance <= price}
            onClick={handleEquipGem}
          >
            {isApproved? "Add Gem": "Approve"}
          </MuiButton>
        </GlassBox>
      </DialogContent>
      {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions> */}
    </StyledDialog>
  );
}

const GlassBox = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[600],
  borderRadius: theme.shape.borderRadius,
  padding: "28px 32px",
  textAlign: "center",
  width: 466,
  [theme.breakpoints.down(631)]: {
    width: "100%",
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  margin: 24,
  "& .MuiPaper-root": {
    padding: "28px 50px",
    background: theme.palette.background.default,
    margin: 0,
    height: '100%'
  },
}));

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: 10,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.default,
}));

const GemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 160,
  width: "100%",
}));
