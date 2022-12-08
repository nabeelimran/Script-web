import { Icon } from "@iconify/react";
import Button from "components/Button";
import FloatingLabelSelect from "components/FloatingLabelSelect";
import React from "react";
import MarketPlaceDisplayCard from "./MarketPlaceDisplayCard";

const TabLink = ({ title, active }) => {
  return (
    <p
      className={`text-sm md:text-base font-medium opacity-60 ${
        active ? "opacity-100" : ""
      }`}
    >
      {title}
    </p>
  );
};

function Content({ isAbove1024px, setFilterVisibility }) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-1 mb-8 space-y-6 lg:space-y-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-6">
            <TabLink title="Trending" active={true} />
            <TabLink title="Top" />
            <TabLink title="Top Artist" />
          </div>

          {!isAbove1024px && (
            <Button
              label="Filter"
              variant={5}
              LeftComponent={() => <Icon icon="fluent:filter-12-filled" />}
              customizationClassName="border-1px border-[#313131] rounded-lg px-4 py-2 flex items-center space-x-2 md:space-x-3"
              buttonHeightClassName=""
              buttonProps={{
                onClick: () => setFilterVisibility((val) => !val),
              }}
            />
          )}
        </div>

        <div className="flex items-center flex-1 space-x-4 lg:max-w-[400px]">
          <FloatingLabelSelect
            label="Price Low to High"
            floatingFontSize="10px"
            className="w-full text-xs sm:text-sm"
            arrowClassName="right-3 text-xl"
            selectClassName="bg-black h-[38px] px-4 xl:px-5 border-1px border-[#313131] rounded-lg text-white"
            options={[
              { value: "", title: "" },
              { value: "1", title: "Price Low to High" },
              { value: "2", title: "Price High to Low" },
            ]}
          />
          <FloatingLabelSelect
            label="Recent Activities"
            floatingFontSize="10px"
            className="w-full text-xs sm:text-sm"
            arrowClassName="right-3 text-xl"
            selectClassName="bg-black h-[38px] px-4 xl:px-5 border-1px border-[#313131] rounded-lg text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
        <MarketPlaceDisplayCard />
      </div>
    </div>
  );
}

export default Content;
