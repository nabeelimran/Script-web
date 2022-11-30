import React from "react";

function KeyStatCard({ label }) {
  return (
    <div className="grid grid-cols-2 gap-5 items-center">
      <div className="bg-shade-grayis rounded-lg h-[50px] flex items-center px-5">
        <p className="fs-16px">N/A</p>
      </div>

      <p className="fs-16px">{label}</p>
    </div>
  );
}

export default KeyStatCard;
