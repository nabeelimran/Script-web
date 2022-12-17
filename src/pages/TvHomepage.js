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

  useEffect(()=>{
     Api.getChannels('watch').then(res=>{
      setchannels(res.data.data);
      setCurrentVideo(res.data.data[0].liveShows[0])
      setAdsList(res.data.data[0].adsData)
     })
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
