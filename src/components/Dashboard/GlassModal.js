import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import {
  Dispatch,
  forwardRef,
  MouseEvent,
  ReactElement,
  Ref,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material/styles";
import { getRechargeHistory } from "utils/api";
import { formatEther } from "ethers/lib/utils";
import moment from "moment";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GlassModal({
  id,
  img,
  open,
  setOpen,
  handleAction,
  gemEligible,
  glass,
  glassTypesWithVouchers,
}) {
  const handleClose = (e) => {
    handleAction(e.currentTarget.textContent, rechargeDiscountPercentage);
    setOpen(false);
  };

  const [history, setHistory] = useState([]);
  const [rechargeDiscountPercentage, setRechargeDiscountPercentage] =
    useState(0);

  useEffect(() => {
    if (id) {
      (async () => {
        const _history = await getRechargeHistory(id);
        setHistory(_history || []);
      })();
    }
  }, [id]);

  useEffect(() => {
    console.log("glassTypesWithVouchers", glassTypesWithVouchers);
    setRechargeDiscountPercentage(0);
    if (glassTypesWithVouchers) {
      if (glass.type === "COMMON") {
        glassTypesWithVouchers[0].map((glassId) => {
          if (glassId === glass.id) {
            setRechargeDiscountPercentage(10);
          }
        });
      } else if (glass.type === "RARE") {
        glassTypesWithVouchers[1].map((glassId) => {
          if (glassId == glass.id) {
            setRechargeDiscountPercentage(20);
          }
        });
      } else if (glass.type === "SUPERSCRIPT") {
        glassTypesWithVouchers[2].map((glassId) => {
          if (glassId === glass.id) {
            setRechargeDiscountPercentage(30);
          }
        });
      }
    }
  }, [glassTypesWithVouchers, glass]);

  return (
    <StyledDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogContent style={{ overflowY: "scroll" }}>
        <GlassBox>
          <img
            style={{ width: "80%", borderRadius: "12px" }}
            src={img}
            alt="glasses"
          />
          <br />
          <PrimaryTypography>#{id}</PrimaryTypography>
        </GlassBox>
        <Box mb={4}>
          <div className="text-xl font-semibold mb-2">Type : {glass.type}</div>
          <div className="text-md font-semibold mb-2">
            Level : {glass.level}
          </div>
          <div className="text-md font-semibold mb-2">
            Total Watch Time : {glass.totalWatchTime}
          </div>
          <div className="text-md font-semibold mb-2">
            Max Earnable Time : {glass.maxEarnableTime}
          </div>
          <div className="text-md font-semibold mb-2">
            Unpaid Watch Time : {glass.unpaidWatchTime}
          </div>
          <div className="text-md font-semibold mb-2">
            Drained : {glass.drained ? "Yes" : "No"}
          </div>
          <div className="text-md font-semibold mb-2">
            Voucher Equipped : {rechargeDiscountPercentage > 0 ? "Yes" : "No"}
          </div>
        </Box>
        {history.length > 0 && (
          <Box>
            <h2 className="text-2xl my-2 font-semibold">Recharge history</h2>

            <table className="stake-nodes-table evenBg text-left rounded-lg w-full">
              <thead>
                <tr>
                  <th className="text-[#ffef00] py-4">Cost</th>
                  <th className="text-[#ffef00] py-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {history.length > 0
                  ? history.map((data, index) => (
                      <tr key={index}>
                        {console.log(data)}
                        <td className="py-4">
                          {`${formatEther(data?.amount)} SPAY` || ""}
                        </td>
                        <td className="py-4">
                          {moment(data?.blockTimestamp * 1000).fromNow() || 0}
                        </td>
                      </tr>
                    ))
                  : null}
                {/* <tr>
                <td className="py-4">0x123456789</td>
                <td className="py-4">100</td>
              </tr> */}
              </tbody>
            </table>
          </Box>
        )}
      </DialogContent>
      <StyledDialogAction>
        <Button sx={buttonStyle} variant="outlined" onClick={handleClose}>
          recharge
        </Button>
        {gemEligible && (
          <Button sx={buttonStyle} variant="outlined" onClick={handleClose}>
            add gem
          </Button>
        )}
        <Button sx={buttonStyle} variant="outlined" onClick={handleClose}>
          sell
        </Button>
      </StyledDialogAction>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: 600,
    background: theme.palette.grey[600],
    margin: 0,
    padding: 24,
    maxHeight: 600,
    // overflow: "scroll",
  },
}));

const GlassBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: 16,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

const PrimaryTypography = styled(Typography)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "inline-block",
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  padding: "9px 20px",
  marginTop: 8,
}));

const StyledDialogAction = styled(DialogActions)(({ theme }) => ({
  justifyContent: "space-between",
  "& > :not(:first-of-type)": {
    margin: 0,
  },
  [theme.breakpoints.down(475)]: {
    flexDirection: "column",
    gap: 8,
  },
}));

const buttonStyle = { maxWidth: 126, width: "100%" };
