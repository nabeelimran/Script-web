import { Button } from "@mui/material";
import React from "react";

const MuiButton = ({
  children,
  disabled,
  variant = "contained",
  color = "primary",
  onClick,
}) => {
  return (
    <Button
      disabled={disabled}
      variant={variant}
      color={color}
      onClick={onClick}
      style={{
        backgroundColor: "#ffef00 !important",

        "&:hover": {
          backgroundColor: "rgb(178, 167, 0) !important",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default MuiButton;
