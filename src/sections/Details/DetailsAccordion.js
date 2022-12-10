import Accordion from "components/Accordion";
import React from "react";

const DetailsAccordion = ({ title, children, open = false, icon }) => {
  return (
    <Accordion
      open={open}
      title={
        <span className="flex items-center">
          <span className="w-[28px] flex text-lg">{icon}</span>
          <span className="text-white font-medium text-sm lh-1">{title}</span>
        </span>
      }
      className=""
      buttonClassName="text-white flex items-center justify-between w-full border-1px border-[#131313] h-[44px] px-4 rounded-lg"
      iconClassName="flex"
      childrenWrapperClassName=""
    >
      <div>{children}</div>
    </Accordion>
  );
};

export default DetailsAccordion;
