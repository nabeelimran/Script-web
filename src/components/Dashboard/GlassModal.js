import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Link,
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
import MuiButton from "components/MuiButton";
import { currentChainSupported, parseChainIdHex } from "common/helpers/utils";
import GlassService from "services/GlassService";

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

  const [currentChain, setCurrentChain] = useState(null);

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
          if (glassId == glass.id) {
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
          if (glassId == glass.id) {
            setRechargeDiscountPercentage(30);
          }
        });
      }
    }
  }, [glassTypesWithVouchers, glass]);

  useEffect(() => {
    if (!window?.ethereum) return;

    setCurrentChain(parseChainIdHex(window?.ethereum?.chainId));

    window.ethereum.on("chainChanged", () => {
      setCurrentChain(parseChainIdHex(window?.ethereum?.chainId));
    });
  }, []);

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
          <PrimaryTypography>Token Id #{id}</PrimaryTypography>
        </GlassBox>
        <Box mb={4} mx="auto" width="fit-content">
          <div style={{ color: "#000" }} className="text-xl font-semibold mb-2">
            Type : {glass.type}
          </div>
          <div style={{ color: "#000" }} className="text-md font-semibold mb-2">
            Level : <ValuesTypography>{glass.level}</ValuesTypography>
          </div>
          {glass.gemsRecords.length? <div style={{ color: "#000" }} className="text-md font-semibold mb-2">
            Gem :
            <ValuesTypography>{glass.gemsRecords[0].gemType}</ValuesTypography>
          </div>:<></>}
          <div style={{ color: "#000" }} className="text-md font-semibold mb-2">
            Total Watch Time :
            <ValuesTypography>{glass.totalWatchTime}</ValuesTypography>
          </div>
          {/* <div className="text-md font-semibold mb-2">
            Max Earnable Time : {glass.maxEarnableTime}
          </div>
          <div className="text-md font-semibold mb-2">
            Unpaid Watch Time : {glass.unpaidWatchTime}
          </div> */}
          <div style={{ color: "#000" }} className="text-md font-semibold mb-2">
            Battery:
            <ValuesTypography>
              {((glass.maxEarnableTime /
                GlassService.getMinutesPerDepletion(glass.type, glass.level)) *
                100).toFixed(2)}
              %
            </ValuesTypography>
          </div>
          {/* <div style={{ color: "#000" }} className="text-md font-semibold mb-2">
            Drained :{glass.drained ? "Yes" : "No"}
          </div> */}
          <div style={{ color: "#000" }} className="text-md font-semibold mb-2">
            Voucher Equipped :
            <ValuesTypography>
              {rechargeDiscountPercentage > 0 ? "Yes" : "No"}
            </ValuesTypography>
          </div>
          {/* <Link
            target="_blank"
            href={`https://testnet.bscscan.com/nft/0xf933F3f1d01418ad00271C4e45A218fC8b9396fE/${id}`}
          >
            {" "}
            View on BscScan
          </Link> */}
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

      {currentChain && !currentChainSupported(currentChain) ? (
        <StyledDialogAction>
          <div
            style={{
              width: "100%",
            }}
          >
            <p
              className="text-lg opacity-80 text-center"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#000"
              }}
            >
              Current Chain is not supported. Please switch to BSC Testnet
            </p>
          </div>
        </StyledDialogAction>
      ) : (
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
      )}
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  margin: 'auto 24px',
  "& .MuiPaper-root": {
    maxWidth: 600,
    background: "#fff",
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

const ValuesTypography = styled(Typography)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "inline-block",
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  padding: "5px",

  marginLeft: 8,
  fontWeight: 600,
  minWidth: 30,
  textAlign: "center",
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

const buttonStyle = { maxWidth: 126, width: "100%", backgroundColor: "#000" };
