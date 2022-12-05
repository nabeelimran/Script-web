import React from "react";
import { Link } from "react-router-dom";

const variants = {
  default: {
    img: "/images/logos/logo-black.png",
    textClassName: "text-black",
  },
  yellow: {
    img: "/images/logos/clean-logo.png",
    textClassName: "text-primary",
  },
};

function Logo({
  title = "Script Network",
  variant = "default",
  textClassName = "fs-16px",
  imgClassName = "w-10",
  className = "flex items-center space-x-3",
}) {
  const v = variants[variant];

  return (
    <div className="relative">
      <Link to="/" className={className}>
        <img src={v.img} className={`cursor-pointer ${imgClassName}`} alt="" />

        {title && (
          <p
            className={`${textClassName} font-bold w-fit whitespace-nowrap ${v.textClassName}`}
          >
            {title}
          </p>
        )}
      </Link>
    </div>
  );
}

export default Logo;
