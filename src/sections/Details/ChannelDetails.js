import Tabs from "components/Tabs";
import React from "react";

const tabsOptions = [
  {
    id: 1,
    label: "Upcoming programs",
    tagId: "#upcomingPrograms",
    tagIdLabel: "upcomingPrograms",
  },
  {
    id: 2,
    label: "Past programs",
    tagId: "#pastPrograms",
    tagIdLabel: "pastPrograms",
  },
  {
    id: 3,
    label: "About",
    tagId: "#about",
    tagIdLabel: "about",
  },
];

function ChannelDetails({ channel, pastShows, currentShows }) {
  return (
    <div className="bg-shade-grayis rounded-2xl h-autho w-auto">
      <div className="relative z-50 px-5 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="images/channels/cultured-one.svg"
            className="h-[45px] mr-7"
          />
          <div>
            <p className="text-2xl mb-1 font-medium">{channel.channelName}</p>
            <p>13 Subscribers</p>
          </div>
        </div>

        <div className="flex items-center">
          <button className="border border-[#ffef00] rounded-md w-[150px] h-[45px] flex justify-center items-center">
            <i
              _ngcontent-serverapp-c122=""
              aria-hidden="true"
              class="fa fa-circle text-[#ffef00] text-[8px] mr-1.5"
            ></i>
            Watch Live
          </button>
          <button className="ml-4 bg-[#ffef00] rounded-md border border-[#ffef00] text-black w-[150px] h-[45px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mb-4 sm:mb-6 relative z-50">
        {(pastShows && pastShows.length > 0) ||
        (currentShows && currentShows.length > 0) ? (
          <Tabs
            tabsOptions={tabsOptions}
            pastShows={pastShows}
            currentShows={currentShows}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ChannelDetails;
