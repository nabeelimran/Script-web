import Button from "components/Button";
import React from "react";

function FormButton({ label = "Unlock Wallet" }) {
  return (
    <Button
      type="submit"
      label={label}
      customizationClassName="w-full text-center space-x-3 px-6 xl:px-8 rounded-lg font-bold block flex justify-center"
      buttonHeightClassName="h-[40px] xl:h-[50px]"
    />
  );
}

export default FormButton;
