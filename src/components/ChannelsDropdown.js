import React from "react";
import ChannelsDropdownBody from "./ChannelsDropdownBody";
import NavDropdown from "./NavDropdown";

function ChannelsDropdown({ className = "text-sm xl:text-base font-medium" }) {
  return (
    <NavDropdown
      componentWrapperClassName="w-[600px]"
      Component={ChannelsDropdownBody}
      title="Channels"
      showDropdown={true}
      childrenClassName="pt-4"
      className={className}
    >
      <ChannelsDropdownBody />
    </NavDropdown>
  );
}

export default ChannelsDropdown;
