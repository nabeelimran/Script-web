import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { videoShows } from "redux/reducers/video_State";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import MetamaskService from "services/metamask";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";

const { default: TvNavbar } = require("components/TvNavbar");
const { default: AllTvChannels } = require("sections/TvHomepage/AllTvChannels");
const { default: Channels } = require("sections/TvHomepage/Channels");
const { default: ChannelsFree } = require("sections/TvHomepage/ChannelsFree");

function Watch() {

    const dispatch = useDispatch();
    const [channel, setchannels] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [adsList, setAdsList] = useState([]);
    const [videoTokenEarned, setVideoTokenEarned] = useState(0);
    const [metamaskBalance, setMetamaskBalance] = useState(0);
    const [recaptchaCode, setReCaptchaCode] = useState("");
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const channelId = queryParam.get('channelId');

    let userId = LocalServices.getServices("user")?.userId || null;

    const { refreshChannel } = useSelector(
        (state) => state.connectWalletModal_State
      );
    const getChannels = () => {
        Api.getChannels("watch").then((res) => {
          
          setchannels(res.data.data);
          if (channelId) {
            const activeChannelData = res.data.data.filter(d => d.id === +channelId)[0];
            console.log(activeChannelData, 'activeChannelData');
            setCurrentVideo(activeChannelData?.liveShows[0] || []) 
          } else {
            setCurrentVideo(res.data.data[0].liveShows[0])
          }
          //dispatch(videoShows(res.data.data[0].liveShows[0]))
          //setAdsList(res.data.data[0].adsData)
        })
    }

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

    useEffect(() => {
        MixPanelService.init();
        getChannels();
        // getMetamaskBalance();
        setReCaptchaCode(helper.getRandomNumber(8));
        if (userId) {
          getVideoTokenEarned(userId);
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

    useEffect(()=>{
        getChannels();
        helper.trackByMixpanel('Watch Live Now Button Clicked', {})
        
    }, [refreshChannel]);

    return (
        <div>
            <div className="mb-4 sm:mb-6 relative z-50">
                <TvNavbar />
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
                    queryChannelId={channelId}
                />
                }
            </div>
        </div>
    )
}

export default Watch;
