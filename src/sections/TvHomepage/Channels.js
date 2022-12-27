import { Icon } from "@iconify/react";
import Button from "components/Button";
import ChannelsRow from "components/ChannelsRow";
import FillBar from "components/FillBar";
import GlassModalButton from "components/GlassModalButton";
import Popup from "components/Popup";
import SquareBox from "components/SquareBox";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Api from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { helper } from "utils/helper";
import { updateCurrentVideo } from "redux/reducers/connectWalletModal_State";
import { earnedTokenRed } from "redux/reducers/video_State";
import LocalServices from "services/LocalServices";
import RecaptchaPopup from "components/RecaptchaPopup";
import { ToastMessage } from "components/ToastMessage";
import MixPanelService from "services/mixPanelService";

const channels = [
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: true,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
    selected: false,
  },
];

const ChannelList = [
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/cultured-one.svg",
    },
    channels,
  },

  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/cultured-two.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/flim-club.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/irl.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/two-much.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/toonmoon.svg",
    },
    channels,
  },
];

const timeline = [
  { time: "00:00", active: false },
  { time: "00:30", active: false },
  { time: "01:00", active: true },
  { time: "01:30", active: true },
  { time: "02:00", active: true },
  { time: "02:30", active: true },
  { time: "03:00", active: true },
  { time: "03:30", active: true },
  { time: "04:00", active: true },
  { time: "04:30", active: true },
  { time: "05:00", active: true },
  { time: "05:30", active: true },
  { time: "06:00", active: false },
  { time: "07:30", active: false },
  { time: "08:00", active: false },
  { time: "08:30", active: false },
  { time: "09:00", active: false },
  { time: "09:30", active: false },
  { time: "10:00", active: false },
  { time: "10:30", active: false },
  { time: "11:00", active: false },
  { time: "11:30", active: false },
  { time: "12:00", active: false },
  { time: "12:30", active: false },
  { time: "13:00", active: false },
  { time: "13:30", active: false },
  { time: "14:00", active: false },
  { time: "14:30", active: false },
  { time: "15:00", active: false },
  { time: "15:30", active: false },
  { time: "16:00", active: false },
  { time: "16:30", active: false },
  { time: "17:00", active: false },
  { time: "17:30", active: false },
  { time: "18:00", active: false },
  { time: "18:30", active: false },
  { time: "19:00", active: false },
  { time: "19:30", active: false },
  { time: "20:00", active: false },
  { time: "20:30", active: false },
  { time: "21:00", active: false },
  { time: "21:30", active: false },
  { time: "22:00", active: false },
  { time: "22:30", active: false },
  { time: "23:00", active: false },
  { time: "23:30", active: false },
];

function Channels({
  channeldata,
  currentVideo,
  videoTokenEarned,
  metamaskBalance,
  recaptchaCode,
  latestVideo
}) {
  const [channels, setChannels] = useState([]);
  const [cursorposition, setCursonPosition] = useState({ marginLeft: 0 });
  const [liveShow, setLiveShow] = useState({});
  let userId = LocalServices.getServices("user")?.userId || null;
  const user = LocalServices.getServices("user") || null
  const {earnedToken} = useSelector((state) => state.video_State)
  const {videoTimeWatch} = useSelector((state) => state.video_State)
  const [modal, setModal] = useState(false);
  const [timeline, setTimeline] = useState([])
  const [selectedChananel, setSelectedChannel] = useState({});
  const [channelFollowed, setChannelFollow] = useState(false);
  const dispatch = useDispatch();
  
  const { changecurrentVideo,data } = useSelector(
    (state) => state.connectWalletModal_State
  );

  useEffect(() => {
    console.log("timeLineChange")
    let chData = channeldata.map((ch) => {
      let liveshows = ch.liveShows.filter(
        (ls) => new Date(ls.startTime).getDate() === new Date().getDate()
      );
      // if(liveshows && liveshows.length > 0) {
        ch.liveShows = liveshows.map((show) => {
          let res = getDurationInMinute(show.startTime, show.endTime);
          show.duration = res.duration;
          show.time = res.time;
          show.selected = false;
          return show;
        });
        return ch;
    
      // } 
    });
    // if(chData && chData.length > 0 && chData[0] && chData[0].liveShows && chData[0].liveShows.length > 0) {
      chData[0].liveShows[0].selected = true;
      setLiveShow(chData[0].liveShows[0]);
      setSelectedChannel(chData[0]);
      setTimeout(() => {
        if(userId) {
          getChannelByChannelId();
        }
      }, 1000)
      setChannels(chData);
    // }
  }, [timeline]);

  useEffect(()=>{
    console.log("FIRST TIME GET TOKEN")
    if(userId && earnedToken===0) {
      console.log("lslslsl")
      getVideoTokenEarned(userId)
    }
    let timelinedata= helper.createTimeSlot(new Date());
    setTimeline(timelinedata)
    
    let cursorint = setInterval(()=>{
      let style={marginLeft:0}
      const todayDate= new Date();
      let timelinemin=Number(timelinedata[0]?.split(':')[1]);
      let min=todayDate.getMinutes()-timelinemin;
      style.marginLeft=min;
      setCursonPosition(style)
    },10000)
    
    return( ()=>{
      clearInterval(cursorint)
    })
    },[])

  useEffect(()=>{
    console.log('EARNED TOKEN CHANGE')
    if(earnedToken>0) {
    console.log('EARNED TOKEN CHANGE if not empty')

      saveVideoDuration(videoTimeWatch)
      setVideoTokenBalance('', earnedToken);
    }
  },[earnedToken])

  const getDurationInMinute = (startedAt, endedAt) => {
    const startDate = new Date(startedAt);
    const endDate = new Date(endedAt);
    const timelinemin = Number(timeline[0]?.split(":")[1]);
    const duration = helper.getDiffInMin(endDate, startDate);
    let diff = helper.getDiffInMinfromCurrent(startDate);
    const curdatemin = new Date().getMinutes();
    if (diff < 0) {
      diff = diff + curdatemin - timelinemin; //adjust duration according to timeline
    } else {
      diff = 0;
    }
    return {
      duration: duration + diff,
      time: `${helper.getIn12HoursFormat(startDate)}-${helper.getIn12HoursFormat(endDate)}`,
    };
  };

  // this is used to get the token earned by video based on user id
  const getVideoTokenEarned = () => {
    console.log("CALLED AGAIN")
    Api.getVideoTokenEarned(userId, 'watch').then((res) => {
      if (res && res.data && res.data.isSuccess) {
        const token = +res?.data?.data?.earnedToken ? +res?.data?.data?.earnedToken : 0;
    console.log("CALLED DISPATCH AGAIN")
        
        dispatch(earnedTokenRed(token))
        
      } else {
        dispatch(earnedTokenRed(0))
        
      }
    })
  }


  const changeSelectedVideo = (show) => {
    setLiveShow(show);
    let chdata = JSON.parse(JSON.stringify(channels));
    chdata = chdata.map((ch) => {
      ch.liveShows = ch.liveShows.map((ls) => {
        if (ls && ls.selected) {
          ls.selected = false;
        }
        if (ls && show && ls.id === show.id) {
          ls.selected = true;
        }
        return ls;
      });
      setSelectedChannel(ch);
      setTimeout(() => {
        if(userId) {
          getChannelByChannelId();
        }
      }, 1000)
      return ch;
    });
    setChannels([...chdata]);
    currentVideo(show);
  };

  // this is used to save the watch time of user
  const saveVideoDuration = (e) => {
    const watchTime = (e.videoPlayTime - e.startTime) / 60
    const req = {
      "showId": latestVideo.id, // show id
      "videoId": latestVideo.videoId, // video id
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
          // setVideoTokenEarned(token);
        } else {
          
        }
      })
    }
  }

  // follow and unfollow channel code
  const subscribeChannel = async () => {
    const channelDetailsRes = await getChannelByChannelId();
    const channelData = channelDetailsRes.isSuccess ? channelDetailsRes.data : null;
    if(channelData) {
      const req = {
        channelId: selectedChananel?.id || 0,
        id: 0,
        subscribeDate: helper.getISOString(),
        unSubscribe: channelData.channelSubscribed ? true : false, // if channelSubscribed is false then in req it go false else true for unfollow
        userId: userId,
      }
      Api.subscribeChannel(req, 'watch').then((res) => {
        if(res && res.status === 200) {
          if(req.unSubscribe) {
            MixPanelService.setIdentifier(user.email)
            helper.trackByMixpanel("Channel Subscribed",{
              "channel_id": req.channelId,
              "email" : user?.email || 'not-detect',
              "channel_name": selectedChananel?.channelName || ""
              })
          }
          getChannelByChannelId();
          ToastMessage(res?.data?.message || 'Success', true);
        }
      })
    }
  }

  const getChannelByChannelId = async () => {
    return await Api.getChannelDetailByChannelId(selectedChananel.id, false, userId, 'watch').then((res) => {
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

  // end of follow and unfollow channel code

  useEffect(() => {
    console.log("CHANGE CURRENT VIDO")
    if (changecurrentVideo) {
      dispatch(updateCurrentVideo(false));
      let chdata = JSON.parse(JSON.stringify(channels));
      chdata = chdata.map((ch) => {
        ch.liveShows = ch.liveShows.map((ls) => {
          if (ls && ls.selected) {
            ls.selected = false;
          }
          if (ls && data && ls.id === data.id) {
            ls.selected = true;
          }
          return ls;
        });
        setSelectedChannel(ch);
        helper.trackByMixpanel("Watch Live Button Clicked",{
          "channel_id": ch?.id || 0,
          "email" : user?.email || 'N/A',
          "channel_name" : ch?.channelName || 'N/A'
        })
        setTimeout(() => {
          if(userId) {
            getChannelByChannelId();
          }
        }, 1000)
        return ch;
      });
      setChannels([...chdata]);
      currentVideo(data);
    }
  }, [changecurrentVideo, data]);


  return (
    <section>
      <div className="container">
        <div className="mb-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-center mb-2">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 justify-between">
              <div className="w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 flex-1">
                <div className="grid grid-cols-[110px_110px] gap-6">
                  <div className="">
                    <img
                      src={liveShow.channelIamge}
                      className="max-w-[108px] md:max-w-none md:w-full"
                      alt=""
                    />
                  </div>

                  <div className="">
                    <Button
                      label={channelFollowed ? "Followed" : "Follow"}
                      variant={4}
                      customizationClassName="space-x-2 border-2 border-green px-5 rounded-lg text-green justify-center flex w-full"
                      buttonProps={{
                        onClick:() => subscribeChannel()
                      }}
                      LeftComponent={() => (
                        <img
                          src="images/tv/green-heart.svg"
                          className="w-[15px] lh-1"
                          alt=""
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="md:max-w-[300px] w-full text-center md:text-left">
                    {/* <FillBar barColor="#6C6C6C" bgColor="#1F1F1F" /> */}
                    <p className="text-sm font-bold">{liveShow.title}</p>
                    <p className="text-sm">
                      {liveShow.description
                        ? liveShow.description
                        : liveShow.channelDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                link="/dashboard"
                label="Dashboard"
                variant={4}
                customizationClassName="bg-primary px-4 rounded-lg text-black font-semibold space-x-2 justify-center"
                LeftComponent={() => (
                  <Icon icon="mdi:view-dashboard" className="invert text-xl" />
                )}
              />

              <>
                <RecaptchaPopup open={modal} setOpen={setModal} />
                <Button
                  type="button"
                  label={recaptchaCode}
                  customizationClassName="bg-green text-black px-6 rounded-lg font-semibold justify-center"
                  variant={4}
                  buttonProps={{ onClick: () => setModal((val) => !val) }}
                />
              </>
            </div>
          </div>

          <div className="grid xl:grid-cols-[1fr_340px] gap-10 items-center">
            <div className="xl:flex items-center space-y-12 xl:space-y-0 xl:space-x-6">
              <div className="grid grid-cols-2 xl:grid-cols-[110px_110px] gap-4 xl:gap-6">
                <GlassModalButton selectedChananel={selectedChananel} user={user} />

                <SquareBox className="flex-1 xl:flex-auto">
                  <img
                    src="images/tv/gem.svg"
                    className="w-[20px] mb-2"
                    alt=""
                  />
                  <div className="text-xs xl:text-sm bg-black font-medium lh-1_2 rounded text-center"
                    onClick={() => {
                      helper.comingSoonNotification();
                      helper.trackByMixpanel("Gem Activated Button Clicked",{
                        "channel_id": selectedChananel?.id || 0,
                        "email" : user?.email || 'N/A',
                        "channel_name" : selectedChananel?.channelName || 'N/A'
                      })
                    }}>
                    Gem Activated
                  </div>
                </SquareBox>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-3">
                <div className="space-y-2">
                  <FillBar />
                  <div className="text-xs font-medium text-center">47/100</div>
                </div>

                <div className="space-y-2">
                  <FillBar barColor="#3C58EE" progress="40%" />
                  <div className="text-xs font-medium text-center">
                    Level 01
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SquareBox
                to="/dashboard"
                className="flex-1 xl:flex-auto"
                variant={1}
              >
                <h1 className="fs-24px text-black font-semibold mb-1">
                  {(metamaskBalance / 1000000000000000000)?.toFixed(4)}
                </h1>
                <h1 className="text-xs xl:text-sm text-black font-medium text-center">
                  SPAY In WALLET
                </h1>
              </SquareBox>

              <SquareBox to="/dashboard" className="flex-1 xl:flex-auto">
                <h1 className="fs-24px text-primary font-semibold mb-1 break-all">
                  {earnedToken.toFixed(4)}
                </h1>
                <h1 className="text-xs xl:text-sm text-primary font-medium text-center">
                  Earned Today
                </h1>
              </SquareBox>
            </div>
          </div>
        </div>

        <div className="mb-0 grid grid-cols-[106px_1fr] gap-3">
          <div className=""></div>
          <div className="flex items-center overflow-x-auto hide-scrollbar">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="min-w-[80px] md:min-w-[160px] flex flex-col items-start  justify-center"
              >
                <p className="text-xs md:text-base lh-1">{item}</p>
                <Icon
                  icon="ic:sharp-arrow-drop-down"
                  className={`text-3xl ${
                    i === 0 ? "opacity-100" : "opacity-0"
                  }`}
                  style={cursorposition}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {channels.map((ch, index) =>
            ch.liveShows[0]?.duration ? (
              <ChannelsRow
                key={index}
                channleDetails={ch}
                channels={ch.liveShows}
                changeVideo={(show) => changeSelectedVideo(show)}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export default Channels;
