import { Icon } from "@iconify/react";
import Button from "components/Button";
import Logo from "components/Logo";
import React from "react";
import { Link } from "react-router-dom";

function Header({ setRightSidebarVisibility, setLeftSidebarVisibility }) {
  return (
    <div className="bg-[#0E0E0F]">
      <div className="dashboard-layout h-[80px] flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Logo variant="yellow" imgClassName="w-9" textClassName="text-sm" />

          <div className="h-[30px] w-[1px] bg-white opacity-40"></div>

          <div className="flex items-center justify-between space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-[34px] rounded-full h-[34px] relative">
                <div className="w-[10px] h-[10px] rounded-full bg-[#3FC864] absolute top-0 right-0"></div>
                <img
                  src="images/dashboard/user.png"
                  className="rounded-full w-full"
                  alt=""
                />
              </div>

              <p className="font-medium text-sm">Peter Parker</p>
            </div>

            <div className="flex items-center space-x-3">
              <Link className="block w-[14px]">
                <img
                  src="images/dashboard/message.svg"
                  className="w-full"
                  alt=""
                />
              </Link>
              <Link className="block w-[12px]">
                <img
                  src="images/dashboard/notification.svg"
                  className="w-full"
                  alt=""
                />
              </Link>
              <Link className="block w-[14px]">
                <img
                  src="images/dashboard/setting.svg"
                  className="w-full"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <Button
            variant={4}
            buttonHeightClassName="min-h-[32px]"
            customizationClassName="border-2 border-white px-4 rounded-md"
            label={<span className="text-sm text-white">Details</span>}
            buttonProps={{
              onClick: () => setRightSidebarVisibility((val) => !val),
            }}
          />

          <button
            className="flex text-2xl"
            onClick={() => setLeftSidebarVisibility((val) => !val)}
          >
            <Icon icon="ion:menu" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
