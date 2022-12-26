import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import JoinOurCommunity from "sections/HomePage/JoinOurCommunity";
import AllTvChannels from "sections/TvHomepage/AllTvChannels";
import Channels from "sections/TvHomepage/Channels";
import ChannelsFree from "sections/TvHomepage/ChannelsFree";
import Community from "sections/TvHomepage/Community";
import Hero from "sections/TvHomepage/Hero";
import HowToEarn from "sections/TvHomepage/HowToEarn";
import KeyStats from "sections/TvHomepage/KeyStats";
import React, { useEffect, useState } from "react";
import Api from "../services/api";
import { videoShows } from "../redux/reducers/video_State";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MetamaskService from "services/metamask";
import { helper } from "utils/helper";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";

function TvHomepage() {
  const dispatch = useDispatch();
  const [channel, setchannels] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [adsList, setAdsList] = useState([]);
  const [videoTokenEarned, setVideoTokenEarned] = useState(0);
  const [metamaskBalance, setMetamaskBalance] = useState(0);
  const [recaptchaCode, setReCaptchaCode] = useState("");
  const [videoWatchDuration, setVideoWatchDuration] = useState(0);
  const [lastDayWatchVideoDuration, setLastDayWatchVideoDuration] = useState(0);
  const [lastVideoHistory, setLastVideoHistory] = useState(null);
  const [twitterPost, setTwitterPost] = useState([]);

  let userId = LocalServices.getServices("user")?.userId || null;
  const { refreshChannel } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const getChannels = () => {
    Api.getChannels("watch").then((res) => {
      
      setchannels(res.data.data);
      setCurrentVideo(res.data.data[0].liveShows[0])
      //dispatch(videoShows(res.data.data[0].liveShows[0]))
      //setAdsList(res.data.data[0].adsData)
     })
  }

  useEffect(()=>{
    getChannels();
    
  }, [refreshChannel]);

  // this is used to get the token earned by video based on user id
  const getVideoTokenEarned = () => {
    Api.getVideoTokenEarned(userId, "watch").then((res) => {
      if (res && res.data && res.data.isSuccess) {
        const token = +res?.data?.data?.earnedToken
          ? +res?.data?.data?.earnedToken
          : 0;
        // setVideoTokenBalance(token > 0 ? '' : 'setDefault', token);

        setVideoTokenEarned(token);
      } else {
        setVideoTokenEarned(0);
      }
    });
  };





  const getMetamaskBalance = () => {
    const authToken = sessionStorage.getItem("script-token");
    if (authToken) {
      const walletAddress =
        JSON.parse(sessionStorage.getItem("userInfo")).walletAddress || null;
      if (walletAddress) {
        MetamaskService.accountsChanged(walletAddress).then((balance) => {
          setMetamaskBalance(balance);
        });
      } else {
        MetamaskService.connectHandler().then((res) => {
          MetamaskService.accountsChanged(res).then((balance) => {
            setMetamaskBalance(balance);
          });
        });
      }
    } else {
      setMetamaskBalance(0);
    }
  };

  const getVideoWatchDuration = (userId) => {
    Api.getVideoWatchDuration(userId, "watch").then((res) => {
      if (res && res.status === 200) {
        setVideoWatchDuration(res.data.data.totalWatchVideoDuration);
        setLastDayWatchVideoDuration(res.data.data.lastDayWatchVideoDuration);
      }
    });
  };

  const getLastShowWatchHistory = (userId) => {
    Api.getLastWatchShowHistory(userId, "watch").then((res) => {
      if (res && res.status === 200) {
        setLastVideoHistory(res.data.data);
      }
    });
  };

  const getTwitterPost = () => {
    Api.getTwitterPosts("home").then((res) => {
      if (res && res.status === 200) {
        setTwitterPost(res.data.data);
      }
    });
  };

  useEffect(() => {
    getTwitterPost();
    getChannels();
    getMetamaskBalance();
    setReCaptchaCode(helper.getRandomNumber(8));
    if (userId) {
      getVideoTokenEarned(userId);
      getVideoWatchDuration(userId);
      getLastShowWatchHistory(userId);
    }
  }, []);

  const changeVideo = (show) => {
    dispatch(videoShows(show));
    setCurrentVideo(show);

    if (channel && channel.length > 0) {
      setAdsList(
        channel.filter((c) => c.id === show.channelId)[0].adsData || []
      );
    }
  };

  return (
    <div>
      <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div>

      <div className="mb-8">
        <Hero
          videoWatchDuration={videoWatchDuration}
          lastDayWatchVideoDuration={lastDayWatchVideoDuration}
          lastVideoHistory={lastVideoHistory}
        />
      </div>

      <div className="mb-6">
        {channel.length>0&&  currentVideo && <AllTvChannels 
        show={currentVideo}
        adsList={adsList}
        // checkVideoWatchTime={checkVideoWatchTime}
        />}
      </div>

      <div className="mb-12" id="videoTag">
       {channel.length>0&& <Channels
        channeldata={channel}
        currentVideo={(data)=>changeVideo(data)}
        latestVideo={currentVideo}
        videoTokenEarned={videoTokenEarned}
        metamaskBalance={metamaskBalance}
        recaptchaCode={recaptchaCode}
        />
}
      </div>

      <div className="mb-12">
        <ChannelsFree />
      </div>

      <div className="mb-16">
        <HowToEarn />
      </div>

      <div className="mb-16">
        <KeyStats />
      </div>

      <div className="mb-16 lg:mb-24">
        {twitterPost && twitterPost.length > 0 ? (
          <Community twitterPost={twitterPost} />
        ) : null}
      </div>

      <div className="mb-20" id="tv-community">
        <JoinOurCommunity />
      </div>

      <Footer container="container" />
    </div>
  );
}

export default TvHomepage;
