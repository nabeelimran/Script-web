import Tabs from "components/Tabs";
import { ToastMessage } from "components/ToastMessage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";

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
  const user = LocalServices.getServices("user") || null;
  const [channelFollowed, setChannelFollow] = useState(false);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [channelInfo, setChannelInfo] = useState({});
  const navigate = useNavigate();

  const handleWatchLive = (channelId) => {
    if (user) {
      navigate({
        pathname: "/watch",
        search: `?channelId=${channelId}`,
      });
    } else {
      ToastMessage("Please Login");
    }
  };

  const getChannelByChannelId = async () => {
    if(user?.userId) {
      return await Api.getChannelDetailByChannelId(
        channel.id,
        false,
        user?.userId,
        "channel-detail"
      ).then((res) => {
        if (res && res.status === 200) {
          const channelInfo = res.data.data;
          channel = res.data.data;
          helper.trackByMixpanel("Channel Page View", {
            email: user?.email || "N/A",
            title: "Channel Detail",
            channel_title: channelInfo?.channelName || "N/A",
          });
          if (channelInfo) {
            setChannelInfo(channelInfo);
            setSubscribersCount(channelInfo.subscribersCount);
            setChannelFollow(channelInfo.channelSubscribed);
          } else {
            setChannelFollow(false);
          }
        }
        return res.data;
      });
    } else {
      ToastMessage('Please Login')
      return null;
    }
    
  };

  // follow and unfollow channel code
  const subscribeChannel = async () => {
    const channelDetailsRes = await getChannelByChannelId();
    const channelData = channelDetailsRes.isSuccess
      ? channelDetailsRes.data
      : null;
    if(user && user?.userId) {
      if (channelData) {
        const req = {
          channelId: channel?.id || 0,
          id: 0,
          subscribeDate: helper.getISOString(),
          unSubscribe: channelData.channelSubscribed ? true : false, // if channelSubscribed is false then in req it go false else true for unfollow
          userId: user.userId,
        };
        Api.subscribeChannel(req, "watch").then((res) => {
          if (res && res.status === 200) {
            if (req.unSubscribe) {
              try {
                MixPanelService.setIdentifier(user.email);
              } catch (error) {}
  
              helper.trackByMixpanel("Channel Subscribed", {
                channel_id: req.channelId,
                email: user?.email || "not-detect",
                channel_name: channel?.channelName || "",
              });
            }
            getChannelByChannelId();
            ToastMessage(res?.data?.message || "Success", true);
          }
        });
      }
    } else {
      ToastMessage("Please login");
    }
    
  };

  useEffect(() => {
    const user = LocalServices.getServices("user") || null;
    if (user && user?.userId) {
      getChannelByChannelId();
    }
  }, []);

  useEffect(() => {
    setChannelInfo(channel);
  }, [channel])

  return (
    <div className="bg-shade-grayis rounded-2xl h-autho w-auto">
      <div className="relative z-50 px-5 py-5 flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-wrap">
          <img
            src={channelInfo.channelImageLink}
            className="h-[45px] mr-7"
            alt={channelInfo?.channelImageLink || "channel-logo"}
          />
          <div className="my-5 md:my-0">
            <p className="text-2xl mb-1 font-medium">
              {channelInfo?.channelName || "N/A"}
            </p>
            <p>{channelInfo.subscribersCount || subscribersCount || 0} Subscribers</p>
          </div>
        </div>

        <div className="flex items-center flex-wrap w-full md:w-auto">
          <button
            className="border border-[#ffef00] rounded-md w-full md:w-[150px] h-[45px] flex justify-center items-center"
            onClick={() => {
              handleWatchLive(channel.id);
            }}
          >
            <i
              _ngcontent-serverapp-c122=""
              aria-hidden="true"
              className="fa fa-circle text-[#ffef00] text-[8px] mr-1.5"
            ></i>
            Watch Live
          </button>
          <button
            className="ml-0 md:ml-4 mt-5 md:mt-0 bg-[#ffef00] rounded-md border border-[#ffef00] text-black w-full md:w-[150px] h-[45px]"
            onClick={subscribeChannel}
          >
            {channel?.channelSubscribed || channelInfo?.channelSubscribed ? "Subscribed" : "Subscribe"}
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
