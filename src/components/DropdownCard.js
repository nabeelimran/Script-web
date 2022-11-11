import React from "react";

function DropdownCard({ title, subtitle }) {
  return (
    <div className="group/card cursor-pointer">
      <h4 className="text-base xl:text-xl font-medium text-white group-hover/card:text-primary mb-2">
        {title}
      </h4>
      <p className="text-xs xl:text-sm font-normal">{subtitle}</p>
    </div>
  );
}

export default DropdownCard;
