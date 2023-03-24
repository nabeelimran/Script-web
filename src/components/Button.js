import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import LoaderGif from "../assets/Loading_icon.gif"

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
  iconName,
  link,
  linkProps,
  buttonProps,
  disable=false,
  customizationClassName = "space-x-3 px-6 xl:px-8 rounded-lg font-semibold",
  LeftComponent,
  RightComponent,
  buttonHeightClassName = "min-h-[34px] xl:min-h-[38px]",
  calReward,
  loader
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
      {console.log(iconName, 'icon', arrowVisible)}
      {arrowVisible && (
        <Icon
          icon={iconName}
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
      disabled={disable}
      className={`flex items-center text-xs sm:text-sm xl:text-base ${buttonHeightClassName} ${customizationClassName} ${className} ${variants[variant]} ${iconName === 'ion:shield-checkmark' ? "green-icon" : ""}`}
    >
      {loader ? (<img src={LoaderGif} alt="loader" style={{height:"16px"}}/>) : null}
      {LeftComponent && <LeftComponent />}
      <span className="text-inherit lh-1">{label}</span>
      {RightComponent && <RightComponent />}

      {arrowVisible && (
        <Icon
          icon={iconName}
          className={`text-xl xl:text-2xl ${
            variant === 1 || variant === 2 ? "" : "invert"
          }`}
          color
        />
      )}
    </button>
  );
}

export default Button;
