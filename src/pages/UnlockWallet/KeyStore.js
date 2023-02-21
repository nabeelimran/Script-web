import Button from "components/Button";
import LabelAndInput from "components/LabelAndInput";
import React from "react";
import DontHaveWallet from "./components/DontHaveWallet";
import FormButton from "./components/FormButton";

function KeyStore() {
  return (
    <form className="space-y-6 xl:space-y-8">
      <LabelAndInput
        id="keystore"
        label="Enter your wallet password"
        inputCutomizationClassName="border-1px border-dashed bg-transparent outline-none"
      />

      <LabelAndInput
        id="wallet"
        type="password"
        label="Enter your wallet password"
      />

      <FormButton />

      <DontHaveWallet />
    </form>
  );
}

export default KeyStore;
