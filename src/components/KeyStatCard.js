import React from "react";

function KeyStatCard({ label, value }) {
  return (
    <div className="grid md:grid-cols-2 gap-3 md:gap-5 items-center">
      <div className="bg-shade-grayis rounded-lg h-[50px] flex items-center px-5">
        <p className="fs-16px">
          {value ? value : 'N/A'}
        </p>
      </div>

      <p className="fs-16px row-start-1 row-end-2 md:row-start-auto md:row-end-auto">
        {label}
      </p>
    </div>
  );
}

export default KeyStatCard;
