import { Icon } from "@iconify/react";
import React, { useState } from "react";

function FloatingLabelSelect({ label }) {
  const [value, setvalue] = useState("");

  const changeFruit = (newFruit) => {
    setvalue(newFruit);
  };

  return (
    <div className="did-floating-label-content relative">
      <select
        value={value}
        onChange={(event) => changeFruit(event.target.value)}
        className={`${
          value !== "" ? "up" : ""
        } did-floating-select bg-black px-4 xl:px-5 border-1px border-[#313131] rounded-lg text-white`}
      >
        <option value=""></option>
        <option value="1">Alabama</option>
        <option value="2">Boston</option>
        <option value="3">Ohaio</option>
        <option value="4">New York</option>
        <option value="5">Washington</option>
      </select>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 text-2xl z-50 pointer-events-none">
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
      </div>
      <label className="did-floating-label left-2 xl:left-3 bg-black">
        {label}
      </label>
    </div>
  );
}

export default FloatingLabelSelect;
