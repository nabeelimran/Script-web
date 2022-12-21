import { Icon } from "@iconify/react";
import React, { useState } from "react";

function PassowrdInput({ id, placeholder, other }) {
  const [showPassword, setSowPassword] = useState(false);

  return (
    <div className="h-[34px] md:h-[40px] w-full rounded-lg border-1px border-[#313131] relative overflow-hidden">
      <input
        id={id}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        className="absolute top-0 left-0 w-full h-full z-10 bg-transparent px-4 text-xs md:text-sm"
        {...other}
      />

      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-5 flex opacity-60 z-20 text-base md:text-xl"
        onClick={() => setSowPassword((val) => !val)}
      >
        {!showPassword ? <Icon icon="ion:eye-off" /> : <Icon icon="ion:eye" />}
      </button>
    </div>
  );
}

export default PassowrdInput;
