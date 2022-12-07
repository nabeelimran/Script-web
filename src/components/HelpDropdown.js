import React from "react";
import HelpDropdownBody from "./HelpDropdownBody";
import NavDropdown from "./NavDropdown";

function HelpDropdown() {
  return (
    <NavDropdown
      componentWrapperClassName="w-[680px]"
      Component={HelpDropdownBody}
      title="Help"
      showDropdown={true}
      childrenClassName="pt-4"
    >
      <HelpDropdownBody />
    </NavDropdown>
  );
}

export default HelpDropdown;
