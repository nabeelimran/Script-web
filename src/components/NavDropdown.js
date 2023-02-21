import { Icon } from "@iconify/react";
import useMediaQuery from "hooks/useMediaQuery";
import React, { ReactDOM } from "react";
import DropdownAccordion from "./DropdownAccordion";

function NavDropdown({
  showDropdown = true,
  title,
  children,
  twoColumns,
  Component,
  componentWrapperClassName,
  childrenClassName = "bg-shade-dark-blue-2 py-4 px-6 rounded mt-4 grid gap-6",
  className = "text-sm xl:text-base font-medium",
}) {
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");
  const wrapperClassName = twoColumns
    ? "w-[560px] xl:w-[650px]"
    : "w-[680px] xl:w-[760px]";

  return isAbove1024px ? (
    <div className="group/dropdown flex items-center justify-between space-x-2 relative">
      <p
        className={`group-hover/dropdown:text-primary group-hover/dropdown:underline transition-all duration-300 cursor-pointer ${className}`}
      >
        {title}
      </p>
      <Icon
        icon="akar-icons:chevron-down"
        className="text-base transition-all duration-300 group-hover/dropdown:opacity-0"
      />

      {showDropdown && (
        <>
          <div
            className={`${
              componentWrapperClassName
                ? componentWrapperClassName
                : wrapperClassName
            } absolute left-1/2 -translate-x-1/2 top-full pt-6 transition-all duration-300 translate-y-8 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto z-[100]`}
          >
            {/*  */}
            {Component ? (
              <Component />
            ) : (
              <div className="bg-shade-dark-blue-2 py-8 xl:py-11 px-9 rounded-2xl xl:rounded-[30px]">
                <div
                className={`grid ${
                  twoColumns ? "grid-cols-2" : "grid-cols-3"
                } gap-x-12 xl:gap-x-[86px] gap-y-8 relative z-10`}
                // className={`grid-cols-2 gap-x-12 xl:gap-x-[86px] gap-y-8 relative z-10`}
                >
                  {children}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  ) : (
    <DropdownAccordion title={title}>
      <div className={childrenClassName}>{children}</div>
    </DropdownAccordion>
  );
}

export default NavDropdown;
