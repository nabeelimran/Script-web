import { Icon } from "@iconify/react";
import Button from "components/Button";
import Logo from "components/Logo";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";

function Header({
  setRightSidebarVisibility,
  setLeftSidebarVisibility,
  profile
}) {
  const isAbove768px = useMediaQuery("(min-width : 768px)");

  return (
    <div className="bg-[#0E0E0F]">
      <div className="dashboard-layout h-[64px] md:h-[80px] flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-6">
          <Logo
            title={isAbove768px && "Script Network"}
            variant="yellow"
            imgClassName="w-8 md:w-9"
            textClassName="text-sm"
          />

          <div className="h-[30px] w-[1px] bg-white opacity-40"></div>

          <div className="flex items-center justify-between space-x-8">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="w-[30px] md:w-[34px] rounded-full h-[30px] md:h-[34px] relative">
                <div className="w-[10px] h-[10px] rounded-full bg-[#3FC864] absolute top-0 right-0"></div>
                <img
                  src="/images/dashboard/user.png"
                  className="rounded-full w-full h-full"
                  alt="img"
                />
              </div>

              {isAbove768px && (
                <p className="font-medium text-xs md:text-sm">
                  {profile?.firstName ? profile?.firstName : ''}
                </p>
              )}
            </div>
            {isAbove768px && (
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
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-5">
          <Button
            variant={4}
            buttonHeightClassName="min-h-[28px] lg:min-h-[32px]"
            customizationClassName="border-2 border-white px-3 lg:px-4 rounded-md"
            label={
              <span className="text-xs lg:text-sm text-white">Details</span>
            }
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
