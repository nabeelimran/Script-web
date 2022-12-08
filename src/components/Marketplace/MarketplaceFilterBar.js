import { Icon } from "@iconify/react";
import React from "react";
import DividerLine from "components/DividerLine";
import Accordion from "components/Accordion";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import Radio from "components/Radio";

const CustomCheckBox = ({ checkboxOthers, title, id }) => {
  return (
    <Checkbox
      id={id}
      tickColor="#FFEF00"
      title={title}
      className="flex items-center justify-between"
      labelClassName="text-sm cursor-pointer"
      checkboxClassName="min-w-[16px] h-4 outline-none rounded-[2px] transition-all duration-200 bg-transparent border-2 checked:border-primary border-[rgba(255,255,255,.6)] text-primary"
      other={checkboxOthers}
    />
  );
};

const Input = ({ other }) => {
  return (
    <input
      className="h-[34px] border-1px border-black rounded-lg px-4 bg-transparent w-full outline-none text-sm"
      {...other}
    />
  );
};

const CustomAccordion = ({ title, children, open = false }) => {
  return (
    <Accordion
      open={open}
      title={
        <span className="text-white font-semibold text-sm lh-1">{title}</span>
      }
      className=""
      buttonClassName="text-white flex items-center justify-between w-full"
      iconClassName="flex"
      childrenWrapperClassName="pt-4"
    >
      <div className="space-y-2">{children}</div>
    </Accordion>
  );
};

const CustomRadio = ({ title, id }) => {
  return (
    <label className="flex items-center justify-between">
      <p className="text-sm lh-1 cursor-pointer w-fit">{title}</p>
      <Radio id={id} />
    </label>
  );
};

function MarketplaceFilterBar({ navbarHeight, sidebarWidth }) {
  return (
    <div
      className="fixed left-0 bg-[#131313] pt-2 overflow-y-auto hide-scrollbar"
      style={{
        top: navbarHeight,
        height: `calc(100vh - ${navbarHeight})`,
        width: sidebarWidth,
      }}
    >
      <div className="px-6">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon icon="fluent:filter-12-filled" />
              <p className="text-sm opacity-60">Filters</p>
            </div>

            <button className="flex">
              <Icon icon="maki:cross" className="opacity-60" />
            </button>
          </div>
          <DividerLine />
        </div>

        <div className="mb-6">
          <CustomAccordion open={true} title="Status">
            <CustomCheckBox id="now" title="Buy Now" />
            <CustomCheckBox id="on" title="On Auction" />
          </CustomAccordion>
        </div>

        <div className="mb-6">
          <p className="text-sm text-white font-semibold mb-3">Collection</p>
          <Input
            other={{
              placeholder: "Search",
            }}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-white font-semibold mb-3">
            Price Range (ETH)
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Input
              other={{
                type: "number",
                placeholder: "Min",
              }}
            />
            <Input
              other={{
                type: "number",
                placeholder: "Max",
              }}
            />
          </div>

          <Button
            label={<span className="text-sm text-black">Apply</span>}
            buttonHeightClassName="min-h-[34px] xl:min-h-[34px] w-full justify-center  disabled:opacity-40"
            buttonProps={{ disabled: true }}
          />
        </div>

        <div className="mb-6">
          <CustomAccordion open={true} title="Quantity">
            <div className="space-y-3">
              <CustomRadio id="All Items" title="All Items" />
              <CustomRadio id="Single items" title="Single items" />
              <CustomRadio id="Bundles" title="Bundles" />
            </div>
          </CustomAccordion>
        </div>

        <div className="mb-6">
          <CustomAccordion open={true} title="Search by">
            <CustomCheckBox id="nfts" title="NFTs" />
            <CustomCheckBox id="collections" title="Collections" />
            <CustomCheckBox id="users" title="Users" />
          </CustomAccordion>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceFilterBar;
