import React from "react";
import { helper } from "utils/helper";

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
  link = false
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
      {title && !link && (
        <label htmlFor={id} className={labelClassName}>
          {title}
        </label>
      )}
      {
        link && (
          <p 
          className={labelClassName}
          onClick={ () => {
            helper.openLink(link)
          }}
          >{title}</p>
        )
      }
    </div>
  );
}

export default Checkbox;
