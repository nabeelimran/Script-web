import { Icon } from "@iconify/react";
import AttributeCard from "components/AttributeCard";
import Button from "components/Button";
import Title from "components/Title";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import DetailsAccordion from "./DetailsAccordion";
import TokenDetails from "./TokenDetails";

const User = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="images/user.png"
        className="w-[36px] xl:w-[44px] h-[36px] xl:h-[44px] rounded-lg object-cover"
        alt=""
      />

      <div>
        <div className="flex items-center space-x-2 mb-1">
          <p className="font-medium text-sm xl:text-base lh-1">Mystery Arts</p>
          <img src="images/verified.svg" className="w-[14px]" alt="" />
        </div>

        <div className="flex items-center space-x-2">
          <a href="/" className="text-blue-link text-xs xl:text-sm">
            0x53hr43...H53h
          </a>
          <Icon icon="mdi:external-link" className="text-sm xl:text-base" />
        </div>
      </div>
    </div>
  );
};

const Owner = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="images/owner.png"
        className="w-[36px] xl:w-[40px] h-[36px] xl:h-[40px] rounded-full"
        alt=""
      />

      <div>
        <p className="text-white text-sm xl:text-base mb-1 lh-1">Owner</p>
        <p className="text-xs xl:text-sm text-primary font-medium">
          0x53hr43...H53h
        </p>
      </div>
    </div>
  );
};

const CurrentPrice = () => {
  return (
    <div className="border-1px border-[#1F1F1F] rounded-lg py-3 px-5">
      <p className="fs-16px font-medium mb-4">Current Price</p>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 justify-between mb-5 sm:mb-4">
        <div className="flex items-center space-x-2">
          <img src="images/ether.svg" className="w-[14px] mb-[2px]" alt="" />
          <p className="fs-18px lh-1 font-bold">1.01</p>
          <p className="text-xs lh-1">($1,990.43)</p>
        </div>

        <Button
          label={<span className="text-sm text-black">Buy Now</span>}
          buttonHeightClassName="min-h-[30px]"
          customizationClassName="px-6 rounded-lg font-semibold text-center justify-center"
        />
      </div>

      <div className="flex items-center space-x-3">
        <Icon icon="mdi:clock-time-five-outline" />

        <div className="flex items-center space-x-2">
          <button className="text-sm">2d</button>
          <button className="text-sm">20h</button>
          <button className="text-sm">20m</button>
          <button className="text-sm">05sec</button>
        </div>
      </div>
    </div>
  );
};

function RightContent() {
  const isAbove768px = useMediaQuery("(min-width : 768px)");

  return (
    <div>
      <div className="mb-4">
        <User />
      </div>

      <Title className="font-bold mb-6" variant="24">
        3D Collection #8975
      </Title>

      <div className="mb-8">
        <Owner />
      </div>

      <div className="mb-6">
        <CurrentPrice />
      </div>

      {!isAbove768px && (
        <div className="my-8">
          <TokenDetails />
        </div>
      )}

      <DetailsAccordion
        open={true}
        title="Attributes"
        icon={<Icon icon="ic:baseline-format-list-bulleted" />}
      >
        <div className="pt-3 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
          <AttributeCard />
          <AttributeCard />
          <AttributeCard />
          <AttributeCard />

          <AttributeCard />
          <AttributeCard />
          <AttributeCard />
          <AttributeCard />
        </div>
      </DetailsAccordion>
    </div>
  );
}

export default RightContent;
