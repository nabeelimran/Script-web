import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LoaderGif from "../../assets/Loading_icon.gif";
import MuiButton from "components/MuiButton";

export default function VoucherCard({
  equipped = false,
  glassId = 0,
  eligibleGlasses = [],
  disabled,
  clickHandler = (tokenId) => {},
  loading = false,
  equippedLoading = false,
  index,
  type,
  isApproved,
}) {
  const [tokenId, setTokenId] = useState();

  // console.log("VoucherCard", {
  //   equipped,
  //   glassId,
  //   eligibleGlasses,
  //   disabled,
  //   clickHandler,
  //   loading,
  //   index,
  // });

  const handleTypeSelect = (e, child) => {
    setTokenId(Number(e.target.value));
  };

  return (
    <StyledBox>
      {equipped ? (
        <>
          <RowBox>
            <Typography>Equipped In:</Typography>
            <Typography>{glassId}</Typography>
          </RowBox>
          <MuiButton
            disabled={disabled || loading}
            variant="contained"
            onClick={() => {
              glassId && clickHandler(glassId, index, type);
            }}
          >
            {loading ? (
              <img src={LoaderGif} alt="loader" style={{ height: "20px" }} />
            ) : (
              <>UnEquip</>
            )}
          </MuiButton>
        </>
      ) : (
        <>
          <FormControl fullWidth>
            <InputLabel>Select Glass</InputLabel>
            {eligibleGlasses.length > 0 && (
              <Select
                value={tokenId ? tokenId.toString() : ""}
                label="select-glass"
                onChange={handleTypeSelect}
              >
                {eligibleGlasses.map((glassId) => (
                  <MenuItem key={glassId} value={glassId}>
                    {glassId}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
          <MuiButton
            disabled={disabled || loading}
            variant="contained"
            onClick={() => {
              tokenId && clickHandler(tokenId, index);
            }}
          >
            {loading ? (
              <img src={LoaderGif} alt="loader" style={{ height: "20px" }} />
            ) : (
              <>{isApproved ? "Equip" : "Approve"}</>
            )}
          </MuiButton>
        </>
      )}
    </StyledBox>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #707070",
  padding: 24,
  width: 200,
  height: 200,
}));

const RowBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  justifyContent: "space-between",
  padding: 8,
  border: "0.5px solid #505050",
}));
