import Button from "components/Button";
import LabelAndInput from "components/LabelAndInput";
import React from "react";
import { Link } from "react-router-dom";
import DontHaveWallet from "./components/DontHaveWallet";
import FormButton from "./components/FormButton";

function PrivateKey() {
  return (
    <form className="space-y-6">
      <LabelAndInput
        label="Please enter your 12 word phrase"
        id="word"
        errorText="*Please separate each Mnemonic Phrase with a space."
      />

      <LabelAndInput
        id="session"
        errorClassName="text-xs text-[#ff5858] mt-2"
        inputClassName="placeholder:opacity-60"
        errorText="Before you enter your mnemonic phrase, we recommend you disconnect
      your device from the internet. You will be able to reconnect once your
      wallet is unlocked."
        placeholder="Enter your tempoary session password"
      />

      <FormButton />

      <DontHaveWallet />
    </form>
  );
}

export default PrivateKey;
