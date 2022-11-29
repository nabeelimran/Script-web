import { Icon } from "@iconify/react";
import Title from "components/Title";
import React from "react";

function AllTvChannels() {
  return (
    <section>
      <div className="container">
        <div className="text-center space-y-5 mb-8">
          <Title>
            All your Tv <span className="text-primary">channels in one</span>{" "}
            place
          </Title>

          <p className="fs-16px text-primary text-center max-w-[38rem] mx-auto">
            Watch content from thousands of tv shows, films and more. Choose
            from genres below - there are shows and films for every taste.
            Enjoy!
          </p>
        </div>

        <div className="bg-shade-darkest-blue grid grid-cols-2">
          <div></div>
          <div className="py-5 pr-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <img src="images/blockchain/stake.png" className="w-6" alt="" />
                <p className="text-sm font-medium">0.0000</p>
              </div>

              <div className="flex items-center space-x-4">
                <button className="text-2xl">
                  <Icon
                    icon="material-symbols:arrow-right-alt-rounded"
                    className="rotate-180"
                  />
                </button>
                <button className="text-xl">
                  <Icon icon="ep:setting" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <Title variant="24" className="text-left font-medium">
                Stream Chat
              </Title>

              <div className="rounded-2xl py-7 px-8 bg-[#010101]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllTvChannels;
