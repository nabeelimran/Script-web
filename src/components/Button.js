import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const VARIANT_DEFAULT = "text-darkGray bg-primary";
const VARIANT_1 = "bg-blue-1 text-white";
const VARIANT_2 = "bg-shade-grayis text-white";
const VARIANT_3 = "bg-transparent border-2 border-primary text-primary";
const VARIANT_NONE = "";

const variants = [
  VARIANT_DEFAULT,
  VARIANT_1,
  VARIANT_2,
  VARIANT_3,
  VARIANT_NONE,
];

function Button({
  type = "button",
  label,
  className,
  variant = 0,
  arrowVisible = false,
  link,
  linkProps,
  buttonProps,
  customizationClassName = "space-x-3 px-6 xl:px-8 rounded-lg font-semibold",
  LeftComponent,
  RightComponent,
  buttonHeightClassName = "min-h-[34px] xl:min-h-[38px]",
  calReward,
}) {
  return link ? (
    <Link
      to={link}
      {...linkProps}
      className={`flex items-center text-xs sm:text-sm xl:text-base ${buttonHeightClassName} ${customizationClassName} ${className} ${variants[variant]}`}
    >
      {LeftComponent && <LeftComponent />}
      <span className="text-inherit lh-1">{label}</span>
      {RightComponent && <RightComponent />}

      {arrowVisible && (
        <Icon
          icon="material-symbols:arrow-right-alt-rounded"
          className={`text-xl xl:text-2xl ${
            variant === 1 || variant === 2 ? "" : "invert"
          }`}
        />
      )}
    </Link>
  ) : (
    <button
      type={type}
      {...buttonProps}
      className={`flex items-center text-xs sm:text-sm xl:text-base ${buttonHeightClassName} ${customizationClassName} ${className} ${variants[variant]}`}
      onClick={calReward}
    >
      {LeftComponent && <LeftComponent />}
      <span className="text-inherit lh-1">{label}</span>
      {RightComponent && <RightComponent />}

      {arrowVisible && (
        <Icon
          icon="material-symbols:arrow-right-alt-rounded"
          className={`text-xl xl:text-2xl ${
            variant === 1 || variant === 2 ? "" : "invert"
          }`}
        />
      )}
    </button>
  );
}

export default Button;
