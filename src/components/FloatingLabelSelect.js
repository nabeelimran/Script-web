import { Icon } from "@iconify/react";
import React, { useState } from "react";

const dummyOptions = [
  { value: "", title: "" },
  { value: "1", title: "Alabama" },
  { value: "2", title: "Boston" },
  { value: "3", title: "Ohaio" },
  { value: "4", title: "New York" },
  { value: "5", title: "Washington" },
];

function FloatingLabelSelect({
  label,
  className = "text-sm xl:text-base",
  arrowClassName = "right-4 text-2xl",
  selectClassName = "bg-black h-[40px] xl:h-[50px] px-4 xl:px-5 border-1px border-[#313131] rounded-lg text-white",
  floatingFontSize = "13px",
  options,
  other
}) {
  const [value, setvalue] = useState("");

  const changeFruit = (newFruit) => {
    setvalue(newFruit);
  };

  return (
    <div
      className={`did-floating-label-content relative ${className}`}
      style={{ "--float-font-size": floatingFontSize }}
    >
      <select
        onChange={(event) => changeFruit(event.target.value)}
        className={`${
          value !== "" ? "up" : ""
        } did-floating-select ${selectClassName}`}
        {...other}
      >
        {options &&
          options.map((item, i) => (
            <option key={i} value={item?.id || item?.value}>
              {item?.countryName || item?.title}
            </option>
          ))}
        {!options &&
          dummyOptions.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
      </select>

      <div
        className={`absolute top-1/2 -translate-y-1/2 z-50 pointer-events-none ${arrowClassName}`}
      >
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
      </div>
      <label className="did-floating-label left-2 xl:left-3 bg-black">
        {label}
      </label>
    </div>
  );
}

export default FloatingLabelSelect;
