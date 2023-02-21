import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

function DropdownAccordion({ title, children }) {
  const [isAccordionOpen, setIsAccordion] = useState(false);
  const accordionMenuRef = useRef(null);

  return (
    <div>
      <button
        className="flex items-center justify-between space-x-2 relative w-full"
        onClick={() => setIsAccordion((val) => !val)}
      >
        <p className="group-hover/dropdown:text-primary group-hover/dropdown:underline transition-all duration-300 text-sm xl:text-base font-medium cursor-pointer">
          {title}
        </p>
        <Icon
          icon="akar-icons:chevron-down"
          className={`text-base transition-all duration-300 ${
            isAccordionOpen && "rotate-180"
          }`}
        />
      </button>

      {isAccordionOpen && (
        <div className="transition-all duration-[.3s]" ref={accordionMenuRef}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

export default DropdownAccordion;
