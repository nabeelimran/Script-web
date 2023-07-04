import React, { useMemo, useState } from "react";
// Import theme
import { theme } from "./services/epg-helper/Theme";
import { useEpg } from "planby";
import Api from "services/api";
import { helper } from "utils/helper";

export function useEpgParser() {
  const [channels, setChannels] = useState([]);
  const [epg, setEpg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const channelsData = useMemo(() => channels, [channels]);
  const epgData = useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 120,
    itemHeight: 100,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: helper.epgStartDate(),
    endDate: helper.epgEndDate(),
    isBaseTimeFormat: false,
    theme
  });

  const handleFetchResources = React.useCallback(async () => {
    setIsLoading(true);
    const channels = [];
    const epg = [];
    const res = await Api.getChannels('watch');
    if(res && res.status === 200 && res.data.data) {
      const showChannelList = res.data.data;
      showChannelList.forEach((channel) => {
        channels.push({
          uuid: channel.id,
          type: "channel",
          title: channel.channelName,
          provider: channel.id,
          logo: channel.channelImageLink
        })
      });

      if(channels?.length && showChannelList?.length) {
        showChannelList.forEach((channel) => {
          channels.forEach((showChannel) => {
            if(showChannel.uuid === channel.id) {
              channel.liveShows.forEach((show) => {
                epg.push({
                  id: show.id,
                  description: show.description,
                  title: show.title,
                  since: new Date(show.startTime),
                  till: new Date(show.endTime),
                  channelUuid: show.channelId,
                  image: show.videoThumbnailUrl
                })
              })  
            }
          })
        })
      }
    }
    console.log('epg', epg);
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
