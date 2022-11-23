import { Icon } from "@iconify/react";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import DropdownAccordion from "./DropdownAccordion";

function NavDropdown({ showDropdown, title, children, twoColumns }) {
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");

  return isAbove1024px ? (
    <div className="group/dropdown flex items-center justify-between space-x-2 relative">
      <p className="group-hover/dropdown:text-primary group-hover/dropdown:underline transition-all duration-300 text-sm xl:text-base font-medium cursor-pointer">
        {title}
      </p>
      <Icon
        icon="akar-icons:chevron-down"
        className="text-base transition-all duration-300 group-hover/dropdown:opacity-0"
      />

      {showDropdown && (
        <div
          className={`${
            twoColumns ? "w-[560px] xl:w-[650px]" : "w-[680px] xl:w-[760px]"
          } absolute left-1/2 -translate-x-1/2 top-full pt-6 transition-all duration-300 translate-y-8 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto z-[100]`}
        >
          {/*  */}
          <div className="bg-shade-dark-blue-2 py-8 xl:py-11 px-9 rounded-2xl xl:rounded-[30px]">
            <div
              className={`grid ${
                twoColumns ? "grid-cols-2" : "grid-cols-3"
              } gap-x-12 xl:gap-x-[86px] gap-y-6 relative z-10`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <DropdownAccordion title={title}>
      <div className="bg-shade-dark-blue-2 py-4 px-6 rounded mt-4 grid gap-6">
        {children}
      </div>
    </DropdownAccordion>
  );
}

export default NavDropdown;
