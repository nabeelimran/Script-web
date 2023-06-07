import React, { useState } from "react";

const VARIANT_DEFAULT = "text-shade-grayis bg-primary placeholder:text-gray";
const VARIANT_2 = "text-primary bg-transparent border-2 border-primary";

const variants = [VARIANT_DEFAULT, VARIANT_2];

const options = [
  { value: "daily", title: "Daily" },
  { value: "weekly", title: "Weekly" },
  { value: "monthly", title: "Monthly" },
  { value: "yearly", title: "Annually" },
];

const SelectGroup = ({
  id,
  label,
  placeholder,
  variant = 0,
  readonly = false,
  other,
  valueSelected = "daily",
  changeFrequency
}) => {
  const [value, setvalue] = useState("");

  const changeFruit = (newFruit) => {
    setvalue(newFruit);
  };
  return (
    <div className="grid gap-4 lg:gap-0 lg:grid-cols-1 items-center">
      <div>
        <label
          htmlFor={id}
          className="block fs-16px font-semibold text-white cursor-pointer w-fit"
        >
          {label}
        </label>
      </div>
      <div>
        <select
          id={id}
          onChange={(event) => changeFrequency(event.target.value)}
          className={`h-[40px] lg:h-[40px] flex items-center px-4 lg:px-5 fs-16px font-semibold rounded-lg w-full outline-none ${variants[variant]}`}
          {...other}
        >
          {options &&
            options.map((item, i) => (
              <option className="text-black" key={i} value={item?.id || item?.value} selected={item?.id === valueSelected}>
                {item?.countryName || item?.title}
              </option>
          ))}
      </select>
      </div>
    </div>
  );
};

export default SelectGroup;
