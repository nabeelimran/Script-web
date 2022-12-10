import React from "react";
import { Link } from "react-router-dom";

const Content = ({ title, teller, tellerClassName, subtitle }) => {
  return (
    <>
      <div className="mb-1">
        <h4 className="text-base xl:text-xl font-medium text-white group-hover/card:text-primary">
          {title}
        </h4>
        {teller && (
          <p className={`text-[10px] font-bold ${tellerClassName}`}>{teller}</p>
        )}
      </div>
      <p className="text-xs xl:text-sm font-normal">{subtitle}</p>
    </>
  );
};

function DropdownCard({
  title,
  subtitle,
  to = "/",
  teller,
  tellerClassName = "text-white",
  others,
  anchor = false,
}) {
  return !anchor ? (
    <Link {...others} to={to} className="group/card cursor-pointer">
      <Content
        subtitle={subtitle}
        teller={teller}
        tellerClassName={tellerClassName}
        title={title}
      />
    </Link>
  ) : (
    <a {...others} className="group/card cursor-pointer">
      <Content
        subtitle={subtitle}
        teller={teller}
        tellerClassName={tellerClassName}
        title={title}
      />
    </a>
  );
}

export default DropdownCard;
