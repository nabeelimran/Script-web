import React from "react";

function Radio({ id }) {
  return (
    <div className="relative">
      <input type="radio" id={id} name="radio-group" className="custom-radio" />
      <label
        htmlFor={id}
        className="w-[17px] h-[17px] before:bg-transparent before:rounded-full before:border-2"
      ></label>
    </div>
  );
}

export default Radio;
