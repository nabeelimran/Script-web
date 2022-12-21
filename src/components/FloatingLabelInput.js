import React from "react";

function FloatingLabelInput({ lable, value, other }) {
  return (
    <div
      className="did-floating-label-content text-sm xl:text-base"
      style={{ "--float-font-size": "13px" }}
    >
      <input
        className="did-floating-input bg-transparent h-[40px] xl:h-[50px] px-4 xl:px-5 border-1px border-[#313131] rounded-lg"
        type="text"
        placeholder=" "
        value={value}
        {...other}
      />
      <label className="did-floating-label left-2 xl:left-3 bg-black">
        {lable}
      </label>
    </div>
  );
}

export default FloatingLabelInput;
