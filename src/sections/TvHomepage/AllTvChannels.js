import { Icon } from "@iconify/react";
import StreamComment from "components/StreamComment";
import StreamForm from "components/StreamForm";
import Title from "components/Title";
import React from "react";

function AllTvChannels() {
  return (
    <section>
      <div className="container mb-8">
        {/* <div className="text-center space-y-5 mb-8">
          <Title>
            All your Tv <span className="text-primary">channels in one</span>{" "}
            place
          </Title>

          <p className="fs-16px text-primary text-center max-w-[38rem] mx-auto">
            Watch content from thousands of tv shows, films and more. Choose
            from genres below - there are shows and films for every taste.
            Enjoy!
          </p>
        </div> */}

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center sm:space-x-5">
          <img src="images/fire.svg" className="w-[26px]" alt="" />

          <Title variant="24" className="font-medium text-center sm:text-left">
            All your TV{" "}
            <span className="text-primary font-semibold">channels in one</span>{" "}
            place
          </Title>
        </div>
      </div>

      <div className="bg-shade-darkest-blue sm:bg-transparent py-4 sm:py-0">
        <div className="container">
          <div className="sm:bg-shade-darkest-blue grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_420px] gap-8 sm:gap-3 lg:gap-10 lg:pr-10 rounded-lg overflow-hidden">
            <div className="bg-shade-grayis h-[200px] md:h-[300px] lg:h-auto"></div>

            <div className="sm:py-5 sm:px-8 lg:px-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <img
                    src="images/blockchain/stake.png"
                    className="w-4 sm:w-6"
                    alt=""
                  />
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

                <div className="rounded-2xl py-5 sm:py-7 px-6 sm:px-8 bg-[#010101]">
                  <div className="space-y-4 mb-6">
                    <StreamComment />
                    <StreamComment />
                    <StreamComment />
                    <StreamComment />
                    <StreamComment />
                  </div>

                  <StreamForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllTvChannels;
