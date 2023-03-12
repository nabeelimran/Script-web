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
} from "react";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material/styles";

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
}) {
  const handleClose = (e) => {
    handleAction(e.currentTarget.textContent);
    setOpen(false);
  };

  return (
    <StyledDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogContent style={{ overflow: "hidden" }}>
        <GlassBox>
          <img
            style={{ width: "80%", borderRadius: "12px" }}
            src={img}
            alt="glasses"
          />
          <br />
          <PrimaryTypography>#{id}</PrimaryTypography>
        </GlassBox>
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
