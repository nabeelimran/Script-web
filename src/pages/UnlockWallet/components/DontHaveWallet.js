import React from "react";
import { Link } from "react-router-dom";

function DontHaveWallet({
  label = "Don’t Have a wallet?",
  linkLabel = "Create Wallet",
  link = "/",
}) {
  return (
    <p className="text-sm xl:text-base font-semibold">
      {label}{" "}
      <Link to={link} className="text-primary underline">
        {linkLabel}
      </Link>
    </p>
  );
}

export default DontHaveWallet;
