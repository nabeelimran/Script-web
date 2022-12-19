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
import {videoShows} from "../redux/reducers/video_State"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MetamaskService from "services/metamask";
import { helper } from "utils/helper";
import LocalServices from "services/LocalServices";

function TvHomepage() {
  const dispatch = useDispatch()
  const [channel, setchannels] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  const [adsList, setAdsList] = useState([])
  const [videoTokenEarned, setVideoTokenEarned] = useState(0)
  const [metamaskBalance, setMetamaskBalance] = useState(0)
  const [recaptchaCode, setReCaptchaCode] = useState('');
  let userId = LocalServices.getServices("user")?.userId || null;


  

  const getChannels = () => {
    Api.getChannels('watch').then(res=>{
      setchannels(res.data.data);
      setCurrentVideo(res.data.data[0].liveShows[0])
      dispatch(videoShows(res.data.data[0].liveShows[0]))
      setAdsList(res.data.data[0].adsData)
     })
  }

  // this is used to get the token earned by video based on user id
  const getVideoTokenEarned = () => {
    Api.getVideoTokenEarned(userId, 'watch').then((res) => {
      if (res && res.data && res.data.isSuccess) {
        const token = +res?.data?.data?.earnedToken ? +res?.data?.data?.earnedToken : 0;
        setVideoTokenBalance(token > 0 ? '' : 'setDefault', token);
        setVideoTokenEarned(token);
      } else {
        setVideoTokenEarned(0);
      }
    })
  }

  // this function is used to check the video watch at every 1 min interval
  // @TODO need to change code
  const checkVideoWatchTime = (e) => {
    console.log(e, 'interval called')
    if(e) {
      saveVideoDuration(e)
      let token = videoTokenEarned;
      if(videoTokenEarned >= 0) {
        token = videoTokenEarned + 0.05
        setVideoTokenEarned(token)
      }
      setVideoTokenBalance('', token);
    }
  }

  // this is used to save the watch time of user
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
  const setVideoTokenBalance = (action, token) => {
    const authToken = sessionStorage.getItem('script-token'); // auth token
    if (authToken) {
      const req = {
        userId: userId ? userId : 0,
        amount: action === 'setDefault' ? 0 : token.toFixed(2)
      };
      Api.addVideoToken(req, 'watch').then((res) => {
        if (res && res.success) {
          setVideoTokenEarned(token);
        } else {
          
        }
      })
    }
  }

  const getMetamaskBalance = () => {
    const authToken = sessionStorage.getItem('script-token');
    if (authToken) {
      const walletAddress = JSON.parse(sessionStorage.getItem('userInfo')).walletAddress || null;
      if (walletAddress) {
        MetamaskService.accountsChanged(walletAddress).then((balance) => {
          setMetamaskBalance(balance);    
        })
      } else {
        MetamaskService.connectHandler().then((res) => {
          MetamaskService.accountsChanged(res).then((balance) => {
            setMetamaskBalance(balance);    
          })
        })
      }
    } else {
      setMetamaskBalance(0)
    }
  }

  useEffect(()=>{
    getChannels();
    getMetamaskBalance();
    setReCaptchaCode(helper.getRandomNumber(8))
    if(userId) {
      getVideoTokenEarned(userId)
    }
  }, [])

  const changeVideo=(show)=>{
    console.log("DISPATCH",show)
    dispatch(videoShows(show))
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
        {channel.length>0&&<AllTvChannels 
        show={currentVideo}
        adsList={adsList}
        checkVideoWatchTime={checkVideoWatchTime}
        />}
      </div>

      <div className="mb-12">
       {channel.length>0&& <Channels
        channeldata={channel}
        currentVideo={(data)=>changeVideo(data)}
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
