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
import { styled } from "@mui/material/styles";

import { rechargeGlasees } from "contract/functions";
import { getRechargeCost, getRechargeSignature } from "utils/api";
import { useSelector } from "react-redux";
import { ToastMessage } from "components/ToastMessage";
import LoaderGif from "../../assets/Loading_icon.gif";
import MuiButton from "components/MuiButton";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RechargeModal({
  glass,
  open,
  setOpen,
  rechargeDiscountPercentage,
  onGlassUpdate,
}) {
  const [cost, setCost] = useState(0);
  const [rechargeData, setRechargeData] = useState();
  const { accountAddress } = useSelector((state) => state.metamask_state);

  const [rechargeStatus, setRechargeStatus] = useState({
    loading: false,
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  useEffect(() => {
    if (glass.drained) {
      handleGetRechargeCost();
    }
  }, [accountAddress, glass, open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleGetRechargeCost = async () => {
    let cost = await getRechargeCost(glass?.id);
    console.log("rechargeCost ", cost);
    setCost(cost);
  };

  const handleGetRechargeSignature = async () => {
    let data = await getRechargeSignature(glass?.id);
    setRechargeData(data);
    return data;
  };

  const handleRechargeGLasses = async () => {
    if (accountAddress) {
      setRechargeStatus({ loading: true });
      try {
        let data;
        if (rechargeData) {
          data = rechargeData;
        } else {
          data = await handleGetRechargeSignature();
        }
        await rechargeGlasees(
          data.amount,
          data.nonce,
          data.signature,
          data.glassId
        );
        setRechargeStatus({ loading: false });
        ToastMessage("Recharge Successful", true);
        onGlassUpdate();
        handleClose();
      } catch (error) {
        console.log(error);
        setRechargeStatus({ loading: false });
        ToastMessage("Recharge Failed", false);
        handleClose();
      }
    }
  };

  console.log("rechargeDiscountPercentage", rechargeDiscountPercentage);

  return (
    <StyledDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <GemBox mb={3}>
        <Typography variant="h1">ID # {glass?.id}</Typography>
      </GemBox>
      <DialogContent sx={{ p: 0, overflow: "hidden" }}>
        <GlassBox>
          <Typography variant="h1" textAlign="center" color="primary">
            Recharge
          </Typography>
          <img
            style={{
              width: "50%",
              display: "block",
              margin: "12px auto 0px auto",
            }}
            src={glass.img}
            alt="glasses"
          />
          <Typography textAlign="center" variant="subtitle2" mb={1.5}>
            Level {glass.level}
          </Typography>
          <Typography textAlign="center" variant="subtitle2" color="primary">
            Recharge your glasses
          </Typography>
          <RowBox mt={4} mb={4}>
            <Typography variant="subtitle2">Cost</Typography>
            <Typography variant="subtitle2">{cost.toFixed(4)} SPAY</Typography>
          </RowBox>
          {rechargeDiscountPercentage > 0 && glass.drained && (
            <RowBox mt={-2} mb={4}>
              <Typography variant="subtitle2">Cost after Discount</Typography>
              <Typography variant="subtitle2">
                {((cost * (100 - rechargeDiscountPercentage)) / 100).toFixed(4)}
                {" SPAY"}
              </Typography>
            </RowBox>
          )}
          <Button
            variant="contained"
            disabled={!glass.drained}
            onClick={handleRechargeGLasses}
          >
            {rechargeStatus.loading ? (
              <img src={LoaderGif} alt="loader" style={{ height: "30px" }} />
            ) : (
              <>Recharge</>
            )}
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
  width: "100%",
}));
