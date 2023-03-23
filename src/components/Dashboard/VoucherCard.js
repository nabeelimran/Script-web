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

export default function VoucherCard({
  equipped = false,
  glassId = 0,
  eligibleGlasses = [],
  disabled,
  clickHandler = (tokenId) => {},
}) {
  const [tokenId, setTokenId] = useState();

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
          <Button
            disabled={disabled}
            variant="contained"
            onClick={() => {
              glassId && clickHandler(glassId);
            }}
          >
            UnEquip
          </Button>
        </>
      ) : (
        <>
          <FormControl fullWidth>
            <InputLabel>Select Glass</InputLabel>
            {eligibleGlasses.length && (
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
          <Button
            disabled={disabled}
            variant="contained"
            onClick={() => {
              tokenId && clickHandler(tokenId);
            }}
          >
            Equip
          </Button>
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
