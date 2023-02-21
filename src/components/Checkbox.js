import React from "react";

function Checkbox({
  className = "flex items-center space-x-2",
  inputClassName,
  name,
  id,
  title,
  defaultChecked = false,
  other,
  labelClassName = "text-sm lg:text-base cursor-pointer text-primary",
  checkboxClassName = "min-w-[16px] h-4 outline-none rounded transition-all duration-200 bg-transparent checked:bg-primary border-1px border-primary ",
  tickColor = "black",
}) {
  return (
    <div
      className={`checkbox ${className}`}
      style={{ "--tick-color": tickColor }}
    >
      <input
        type={"checkbox"}
        name={name}
        id={id}
        className={`show-tick ${checkboxClassName} ${inputClassName} `}
        defaultChecked={defaultChecked}
        {...other}
      />
      {title && (
        <label htmlFor={id} className={labelClassName}>
          {title && title}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
