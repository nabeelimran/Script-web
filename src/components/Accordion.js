import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

const CLASSNAME = "bg-primary rounded-md lg:rounded-xl";
const BTN_clasname =
  "text-sm xl:text-base py-3 h-auto lg:h-[66px] px-6 lg:px-8 flex items-center justify-between text-left text-blue-1 w-full space-x-6";
const ChildrenWrapperClassName =
  "px-6 lg:px-8 pb-6 lg:pb-10 text-blue-1 text-sm lg:text-base";

function Accordion({
  title,
  children,
  className = CLASSNAME,
  buttonClassName = BTN_clasname,
  childrenWrapperClassName = ChildrenWrapperClassName,
  iconClassName = "invert",
  open = false,
}) {
  const [isAccordionOpen, setIsAccordion] = useState(open);
  const accordionMenuRef = useRef(null);

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
    }
  }, [isAccordionOpen]);

  return (
    <div className={className}>
      <button
        className={buttonClassName}
        onClick={() => setIsAccordion((val) => !val)}
      >
        <span className="text-blue-1 font-medium">{title}</span>

        <span
          className={`transition-all duration-300 text-xl lg:text-2xl ${
            isAccordionOpen ? "rotate-180" : ""
          }`}
        >
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            className={iconClassName}
          />
        </span>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s]"
        ref={accordionMenuRef}
      >
        <div className={childrenWrapperClassName}>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
