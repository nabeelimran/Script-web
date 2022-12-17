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
import React, { useEffect,useState } from "react";
import Api from "../services/api"

function TvHomepage() {
  
  const [channel, setchannels] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  const [adsList, setAdsList] = useState([])
  const [videoTokenEarned, setVideoTokenEarned] = useState(null)
  let userId = 0;

  const getChannels = () => {
    Api.getChannels('watch').then(res=>{
      setchannels(res.data.data);
      setCurrentVideo(res.data.data[0].liveShows[0])
      setAdsList(res.data.data[0].adsData)
     })
  }

  // this is used to get the token earned by video based on user id
  const getVideoTokenEarned = () => {
    Api.getVideoTokenEarned(userId ? userId : 0, 'watch').then((res) => {
      if (res && res.isSuccess && res.data) {
        const token = +res.data.earnedToken ? +res.data.earnedToken : 0;
        setVideoTokenBalance(token > 0 ? '' : 'setDefault');
        setVideoTokenEarned(token);
      } else {
        setVideoTokenEarned(0);
      }
    })
  }

  // this function is used to check the video watch at every 1 min interval
  // @TODO need to change code
  const checkVideoWatchTime = (e) => {
    if(e) {
      saveVideoDuration(e)
    }
  }

  // this is used to save the watch time of user
  // @TODO need to change code
  const saveVideoDuration = (e) => {
    const watchTime = (e.videoPlayTime - e.startTime) / 60
    const req = {
      "showId": currentVideo.id, // show id
      "videoId": currentVideo.videoId, // video id
      "userId": userId ? userId : 0,
      "videoDuration": +watchTime.toFixed()  // duration in minute
    };

    if (+watchTime.toFixed() > 0) {
      Api.saveVideoDuration(req, 'watch').then((res) => {
        if (res && res.isSuccess) {

        } else {

        }
      })
    }
  }

  // this is used to save token earned by watch
  const setVideoTokenBalance = (action) => {
    const authToken = sessionStorage.getItem('token'); // auth token
    if (authToken) {
      const req = {
        userId: userId ? userId : 0,
        amount: action === 'setDefault' ? 0 : videoTokenEarned.toFixed(2)
      };
      Api.addVideoToken(req, 'watch').then((res) => {
        if (res && res.success) {

        } else {
          
        }
      })
    }
  }

  useEffect(()=>{
    getChannels();
  }, [])

  const changeVideo=(show)=>{
    setCurrentVideo(show);
    if (channel && channel.length > 0) {
      setAdsList(channel.filter(c => c.id === show.channelId)[0].adsData || [])
    }
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div>

      <div className="mb-8">
        <Hero />
      </div>

      <div className="mb-12">
        <AllTvChannels 
        show={currentVideo}
        adsList={adsList}
        />
      </div>

      <div className="mb-12">
       {channel.length>0&& <Channels
        channeldata={channel}
        currentVideo={(data)=>changeVideo(data)}
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
        <Community />
      </div>

      <div className="mb-20" id="tv-community">
        <JoinOurCommunity />
      </div>

      <Footer container="container" />
    </div>
  );
}

export default TvHomepage;
