import React from "react";

const VARIANT_DEFAULT = "text-shade-grayis bg-primary placeholder:text-gray";
const VARIANT_2 = "text-primary bg-transparent border-2 border-primary";

const variants = [VARIANT_DEFAULT, VARIANT_2];

const InputRow = ({
  id,
  type = "text",
  label,
  placeholder,
  value,
  name,
  variant = 0,
  readonly = false,
  changeAmount,
}) => {
  return (
    <div className="grid gap-4 lg:gap-0 lg:grid-cols-2 items-center">
      <div>
        <label
          htmlFor={id}
          className="block fs-16px font-semibold text-white cursor-pointer w-fit"
        >
          {label}
        </label>
      </div>
      <div>
        <input
          type={type}
          id={id}
          value={value}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          className={`h-[40px] lg:h-[40px] flex items-center px-4 lg:px-5 fs-16px font-semibold rounded-lg w-full outline-none ${variants[variant]}`}
          onChange={changeAmount}
        />
      </div>
    </div>
  );
};

export default InputRow;
