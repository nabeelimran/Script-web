import React from "react";
import { Link } from "react-router-dom";

function DropdownCard({ title, subtitle, to = "/" }) {
  return (
    <Link to={to} className="group/card cursor-pointer">
      <h4 className="text-base xl:text-xl font-medium text-white group-hover/card:text-primary mb-2">
        {title}
      </h4>
      <p className="text-xs xl:text-sm font-normal">{subtitle}</p>
    </Link>
  );
}

export default DropdownCard;
