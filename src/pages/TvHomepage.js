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
import { allChannel, playingChannel, playingVideo, videoShows } from "../redux/reducers/video_State";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MetamaskService from "services/metamask";
import { helper } from "utils/helper";
import LocalServices from "services/LocalServices";
import {
	updateCurrentVideo,
	updateEpgData,
} from "redux/reducers/connectWalletModal_State";

function TvHomepage() {
	const dispatch = useDispatch();
	const [channel, setchannels] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(null);
	const [adsList, setAdsList] = useState([]);
	const [videoTokenEarned, setVideoTokenEarned] = useState(0);
	const [metamaskBalance, setMetamaskBalance] = useState(0);
	const [twitterPost, setTwitterPost] = useState([]);
	const [latestChaneelID,setLatestChaneelID] = useState(null)
	const [latestVideIdx,setLatestVideoIdx] = useState(null)

	let userId = LocalServices.getServices("user")?.userId || null;
	const { refreshChannel } = useSelector(
		(state) => state.refresh_state
	);
	const getChannels = () => {
		Api.getChannels("watch").then((res) => {
			// for suffal channel
			res.data.data.forEach((d, i) => {
				if(d.id === 621730) {
					res.data.data.splice(i, 1);
    				res.data.data.unshift(d);
				}
			});
			console.log(res.data.data);
			setchannels(res.data.data);
			setCurrentVideo(res.data.data[0].liveShows[0]);
			// dispatch(allChannel(res.data.data))
			// dispatch(playingVideo(res.data.data[0].liveShows[0]))
			//dispatch(videoShows(res.data.data[0].liveShows[0]))
			//setAdsList(res.data.data[0].adsData)
		});
	};

	useEffect(() => {
		
		// getChannels();
		//console.log(refreshChannel)
		if (refreshChannel) {
			console.log("refresh");
			let nextIndex =0;
			let channelIndex = 0
			const currentChannel = channel.filter(
				(ch,i) => {
					if(ch.id === currentVideo.channelId)
					{channelIndex = i}
					return ch.id === currentVideo.channelId
				}
			);
			//dispatch(playingChannel(currentChannel))
			if (currentChannel[0]) {
				currentChannel[0].liveShows.map((c, i) => {
					
					if (
						c.videoId === currentVideo.videoId &&
						new Date().getTime() > new Date(c.endTime).getTime()
						) {
							
						//console.log("currentChannel[0].liveShows",new Date().getTime() > new Date(c.endTime).getTime(),new Date().getTime() , new Date(c.endTime).getTime())
						nextIndex = i;
					}
					
				});
				console.log("nextIndex",nextIndex)
				if(nextIndex>=0){
					console.log("DISPATCH NEXT VIDEO",)
					let nextVideo = currentChannel[0].liveShows[nextIndex +1];
					
					//dispatch(playingVideo(nextVideo))
				dispatch(updateEpgData(nextVideo));
				setCurrentVideo(nextVideo)
				setLatestChaneelID(channelIndex)
				setLatestVideoIdx(nextIndex)
				//dispatch(updateCurrentVideo(true));
				}else{
					console.log("FRESH CHANNEL")
					getChannels();
					dispatch(updateEpgData(currentVideo));
					dispatch(updateCurrentVideo(true));
					setLatestChaneelID(0);
					setLatestVideoIdx(0);
				}

				
			}
		}
	}, [refreshChannel]);

	const getMetamaskBalance = () => {
		const authToken = sessionStorage.getItem("script-token");
		if (authToken) {
			const walletAddress =
				JSON.parse(sessionStorage.getItem("userInfo")).walletAddress ||
				null;
			if (walletAddress) {
				MetamaskService.accountsChanged(walletAddress).then(
					(balance) => {
						setMetamaskBalance(balance);
					}
				);
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
		// getMetamaskBalance();
	}, []);

	const changeVideo = (show) => {
		dispatch(playingVideo(show));
		setCurrentVideo(show);

		if (channel && channel.length > 0) {
			setAdsList(
				channel.filter((c) => c.id === show.channelId)[0].adsData || []
			);
		}
	};

	return (
		<div>
			
			<div className='mb-4 sm:mb-6 relative z-50'>
				<TvNavbar />
			</div>

			<div className='mb-8'>
				<Hero />
			</div>

			<div className='mb-6'>
				{channel.length > 0 && currentVideo && (
					<AllTvChannels
						show={currentVideo}
						adsList={adsList}
						// checkVideoWatchTime={checkVideoWatchTime}
					/>
				)}
			</div>

			<div className='mb-12' id='videoTag'>
				{channel.length > 0 && currentVideo && (
					<Channels
						channeldata={channel}
						currentVideo={(data) => changeVideo(data)}
						latestVideo={currentVideo}
						videoTokenEarned={videoTokenEarned}
						metamaskBalance={metamaskBalance}
						latestChaneelID={latestChaneelID}
						latestVideIdx={latestVideIdx}
					/>
				)}
			</div>

			<div className='mb-12'>
				<ChannelsFree />
			</div>

			<div className='mb-16'>
				<HowToEarn />
			</div>

			<div className='mb-16'>
				<KeyStats />
			</div>

			<div className='mb-16 lg:mb-24'>
				{twitterPost && twitterPost.length > 0 ? (
					<Community twitterPost={twitterPost} />
				) : null}
			</div>

			<div className='mb-20' id='tv-community'>
				<JoinOurCommunity />
			</div>

			<Footer container='container' />
		</div>
	);
}

export default TvHomepage;
