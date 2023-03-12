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

import { equipgem } from "contract/functions";
import { useDispatch, useSelector } from "react-redux";
import { getGemPrice, getGemSignature } from "utils/api";

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
  const [claimData, setClaimData] = useState();
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const { balance } = useSelector((state) => state.Profile_State);

  console.log("gem component balance", balance);

  useEffect(() => {
    if (accountAddress) {
      fetchPrice();
    }
  }, [id, accountAddress]);

  const fetchPrice = async () => {
    if (accountAddress) {
      let price = await getGemPrice(id);
      console.log("price", { price, id });
      setPrice(price);
    }
  };

  const handleEquipGem = async () => {
    if (accountAddress) {
      let res;
      if (claimData?.signature) {
        res = claimData;
      } else {
        res = await getGemSignature(id);
        setClaimData(res);
      }
      handleClose();
      await equipgem(res.tokenId, res.gemType, res.nonce, res.signature);
      setGemEligibleGlasses([]);
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
          <Button
            variant="contained"
            disabled={balance <= price}
            onClick={handleEquipGem}
          >
            Add Gem
          </Button>
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
  "& .MuiPaper-root": {
    padding: "28px 50px",
    background: theme.palette.background.default,
    margin: 0,
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
