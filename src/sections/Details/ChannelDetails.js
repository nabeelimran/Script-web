import Tabs from "components/Tabs";
import { ToastMessage } from "components/ToastMessage";
import React, { useEffect, useState } from "react";
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

  const user = LocalServices.getServices("user") || null
  const [channelFollowed, setChannelFollow] = useState(false);

  const handleWatchLive = () => {
    helper.comingSoonNotification();
  }

  const getChannelByChannelId = async () => {
    return await Api.getChannelDetailByChannelId(channel.id, false, user.userId, 'channel-detail').then((res) => {
      if(res && res.status === 200) {
        const channelInfo = res.data.data;
        if(channelInfo) {
          setChannelFollow(channelInfo.channelSubscribed);
        } else {
          setChannelFollow(false);
        }
      }
      return res.data;
    } );
  }

  // follow and unfollow channel code
  const subscribeChannel = async () => {
    const channelDetailsRes = await getChannelByChannelId();
    const channelData = channelDetailsRes.isSuccess ? channelDetailsRes.data : null;
    if(channelData) {
      const req = {
        channelId: channel?.id || 0,
        id: 0,
        subscribeDate: helper.getISOString(),
        unSubscribe: channelData.channelSubscribed ? true : false, // if channelSubscribed is false then in req it go false else true for unfollow
        userId: user.userId,
      }
      Api.subscribeChannel(req, 'watch').then((res) => {
        if(res && res.status === 200) {
          if(req.unSubscribe) {
            try {
              MixPanelService.setIdentifier(user.email)  
            } catch (error) {
              
            }
            
            helper.trackByMixpanel("Channel Subscribed",{
              "channel_id": req.channelId,
              "email" : user?.email || 'not-detect',
              "channel_name": channel?.channelName || ""
              })
          }
          getChannelByChannelId();
          ToastMessage(res?.data?.message || 'Success', true);
        }
      })
    }
  }

  useEffect(() => {
    if(user && user?.userId) {
      getChannelByChannelId();
    }
  }, [])

  return (
    <div className="bg-shade-grayis rounded-2xl h-autho w-auto">
      <div className="relative z-50 px-5 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={channel.channelImageLink}
            className="h-[45px] mr-7"
            alt={channel?.channelImageLink || 'channel-logo'}
          />
          <div>
            <p className="text-2xl mb-1 font-medium">{channel?.channelName || 'N/A'}</p>
            <p>{channel?.subscribersCount || 0} Subscribers</p>
          </div>
        </div>

        <div className="flex items-center">
          <button className="border border-[#ffef00] rounded-md w-[150px] h-[45px] flex justify-center items-center"
           onClick={
            () => {
              handleWatchLive()
            }
           }>
            <i
              _ngcontent-serverapp-c122=""
              aria-hidden="true"
              class="fa fa-circle text-[#ffef00] text-[8px] mr-1.5"
            ></i>
            Watch Live
          </button>
          <button className="ml-4 bg-[#ffef00] rounded-md border border-[#ffef00] text-black w-[150px] h-[45px]"
            onClick={subscribeChannel}>
            {channelFollowed ? 'Subscribed' : 'Subscribe'} 
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
