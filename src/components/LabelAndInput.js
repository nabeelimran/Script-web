import React from "react";

function LabelAndInput({
  label,
  type = "text",
  id,
  placeholder,
  inputCutomizationClassName = "border-1px border-grey-2 bg-grey-3 outline-none",
  inputClassName,
  errorText,
  errorClassName = "text-xs xl:text-sm opacity-50 mt-2",
}) {
  return (
    <div className="space-y-3 xl:space-y-4">
      {label && (
        <label
          htmlFor={id}
          className="text-sm xl:text-base font-medium cursor-pointer"
        >
          {label}
        </label>
      )}
      <div>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`h-[40px] xl:h-[50px] w-full block rounded px-4 fs-16px ${inputClassName} ${inputCutomizationClassName}`}
        />

        <p className={errorClassName}>{errorText}</p>
      </div>
    </div>
  );
}

export default LabelAndInput;
