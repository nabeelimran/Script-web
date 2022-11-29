import React from "react";

function Checkbox({
  className = "flex items-center space-x-2",
  inputClassName,
  name,
  id,
  title,
  defaultChecked = false,
  other,
}) {
  return (
    <div className={`checkbox ${className}`}>
      <input
        type={"checkbox"}
        name={name}
        id={id}
        className={`min-w-[16px] h-4 outline-none rounded transition-all duration-200 bg-transparent checked:bg-primary  ${inputClassName} border-1px border-primary`}
        defaultChecked={defaultChecked}
        {...other}
      />
      {title && (
        <label
          htmlFor={id}
          className="text-sm lg:text-base cursor-pointer text-primary"
        >
          {title && title}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
