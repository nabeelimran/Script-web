import { Icon } from "@iconify/react";
import StreamComment from "components/StreamComment";
import StreamForm from "components/StreamForm";
import Title from "components/Title";
import VideoPlayer from "components/VideoPlayer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import videojs from "video.js";
import "videojs-contrib-ads";
import { refreshChannel } from "redux/reducers/connectWalletModal_State";
import { earnedTokenRed, getVideoTimeWatch } from "redux/reducers/video_State";
import LocalServices from "services/LocalServices";
import { helper } from "utils/helper";
import LiveChat from "components/LiveChat";
import useLiveChat from "hooks/useLiveChat";

function AllTvChannels({
	show,
	adsList,
	// checkVideoWatchTime
}) {
	const playerRef = React.useRef(null);
	const dispatch = useDispatch();
	let slots = [];
	let userId = LocalServices.getServices("user")?.userId || null;
	const [isPlayerReady, setIsPlayerReady] = React.useState(false);
	const [isChatShow, setIsChatShow] = useState(true);

	const chatDisplayHandler = () => {
		setIsChatShow(!isChatShow);
	};
	const returnVideoClass = () => {
		if (isChatShow ) {
			return "lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_420px]";
		} else {
			return "lg:grid-cols-1 xl:grid-cols-1";
		}
	};
	const returnVideoHeightClass = () => {
		if (isChatShow ) {
			return "h-[200px] md:h-[100%] lg:h-auto"
		} else {
			return "h-[200px] md:h-[450px] ";
		}
	};

	let durationcheckinterval;

	const getRandomAds = () => {
		let randomAds;
		if (adsList && adsList.length > 0) {
			randomAds = adsList[Math.floor(Math.random() * adsList.length)];
		}
		return randomAds;
	};

	const createMidRollSlots = () => {
		const videDurationInSec = playerRef.current.duration;
		const videoCurrentTimeInSec = playerRef.current.currentTime;
		const videoDurationInMin = Math.ceil(
			(videDurationInSec && videDurationInSec > 0
				? videDurationInSec
				: document.getElementsByTagName("video")[0].duration) / 60
		);
		const currentTimeInMin = Math.ceil(
			(videoCurrentTimeInSec && videoCurrentTimeInSec > 0
				? playerRef.current.currentTime
				: playerRef.current.currentTime) / 60
		);
		const interval = 20;
		slots = [];

		for (let i = 0; i <= videoDurationInMin / interval; i++) {
			slots.push({
				slot: i * interval,
				isPassed: currentTimeInMin > i * interval ? true : false,
			});
		}
		if (slots.length > 0) {
			console.log(slots, "slots of ads");
			// isSlotCreated = true;
		}
	};

	const createShareButton = () => {
		const shareButtonElExist = document.getElementById("shareButton");
		if (!shareButtonElExist) {
			const button = playerRef.current.controlBar.addChild("button");
			const myButtonDom = button.el();
			myButtonDom.id = "shareButton";
			myButtonDom.onclick = () => {
				console.log("share buttoon worked");
			};
			button.on("touchstart", () => {
				console.log("share buttoon worked touch");
			});
		}
		const controlEl = document.getElementsByClassName("vjs-control-bar");
		if (controlEl && controlEl.length > 0) {
			let childNodes =
				document.getElementsByClassName("vjs-control-bar")[0]
					.childNodes;
			if (childNodes && childNodes.length > 0) {
				if (childNodes[childNodes.length - 1].id === "shareButton") {
					document
						.getElementsByClassName("vjs-control-bar")[0]
						.childNodes[1].before(
							document.getElementsByClassName(
								"vjs-control-bar"
							)[0].childNodes[
								document.getElementsByClassName(
									"vjs-control-bar"
								)[0].childNodes.length - 1
							]
						);
				}
			}
		}
	};

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		controlBar: {
			playToggle: false,
		},
		responsive: true,
		muted: true,
		fluid: true,
		sources: [
			{
				src: "https://api.script.tv/ipfs/QmVCYfHwUBtdDSJg5DkvFQpgDdsmjBGyTaZEWrDo1NDXKT/master.m3u8",
				type: "application/x-mpegURL",
			},
		],
	};

	const getVideoCurrentTimePace = (startTime) =>
		(new Date().getTime() - new Date(startTime).getTime()) / 1000;
	let timer;

	useEffect(() => {
		let videoWatchInterval;
		let durationcheckinterval;
		console.log(playerRef, "REFFF");
		if (show && playerRef && playerRef.current) {
			// playerRef.current.ads()
			// playerRef.current.on('readyforpreroll', () => {
			//   playerRef.current.ads.startLinearAdMode();
			//   playerRef.current.src({
			//     src: getRandomAds() ? getRandomAds().adsS3Url : `https://scripttv.s3.eu-central-1.amazonaws.com/1648445836148-1c4e85894a244a128646d57c0646edd7.mp4`,
			//     type: 'video/mp4'
			//   })
			//   // send event when ad is playing to remove loading spinner
			//   playerRef.current.one('adplaying', () => {
			//     playerRef.current.trigger('ads-ad-started');
			//   });

			//   // resume content when all your linear ads have finished
			//   playerRef.current.one('adended', () => {
			//       playerRef.current.ads.endLinearAdMode();
			//   });
			// })

			playerRef.current.on("timeupdate", (evt) => {
				if (playerRef && playerRef.current) {
					// durationcheckinterval = setInterval(() => {
					// 	// console.log(playerRef.current?.currentTime(),playerRef.current.currentTime() , playerRef.current.duration())
					// 	if (
					// 		playerRef.current?.currentTime() &&
					// 		playerRef.current.currentTime() ===
					// 			playerRef.current.duration()
					// 	) {
					// 		dispatch(refreshChannel(true));
					// 	}
					// }, 10000);
				}
			});

			playerRef.current.currentTime(
				getVideoCurrentTimePace(show.startTime)
			);
			playerRef.current.src({
				src: show?.hlsUrl ? show?.hlsUrl : show?.s3VideoUrl,
				type: "application/x-mpegURL",
			});
			playerRef.current.load();

			playerRef.current.on("play", () => {
				const videoStartTime = getVideoCurrentTimePace(show.startTime);
			clearInterval(videoWatchInterval);

				videoWatchInterval = setInterval(() => {
					const videoWatchTime = {
						startTime: videoStartTime,
						endTime: playerRef.current.duration(),
						videoPlayTime:
							(new Date().getTime() -
								new Date(show.startTime).getTime()) /
							1000,
					};

					if (
						show.startTime &&
						videoWatchTime &&
						videoWatchTime.endTime
					) {
						// let eToken = earnedToken + 0.05
						dispatch(getVideoTimeWatch(videoWatchTime));
						if (userId ) {
							console.log("DISPATCH FROM HERE",isPlayerReady)
							dispatch(earnedTokenRed(0.05));
						}

						//checkVideoWatchTime(videoWatchTime)
					}
				}, 30000);
			});
		}
		return () => {
			clearInterval(videoWatchInterval);

			clearInterval(durationcheckinterval);
		};
		console.log('PLAYER REF',playerRef)
	}, [show]);

	const handlePlayerReady = (player) => {
		playerRef.current = player;
		createShareButton();
		window.addEventListener("scroll", function () {
			if (timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				const element = document.querySelector("#videoTag");
				const position = element.getBoundingClientRect();

				// checking whether fully visible
				let pipEl = document.getElementById("video-container");
				// if(position.top >= 0 && position.bottom <= window.innerHeight) {
				if (pipEl) {
					if (position.top >= 0 && position.bottom >= 0) {
						pipEl.classList.remove("custom-pip-window");
						// player.requestPictureInPicture()
					} else {
						pipEl.classList.add("custom-pip-window");
						// player.exitPictureInPicture();
					}
				}
			}, 500);
		});
		// You can handle player events here, for example:
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});

		player.on("play", () => {});

		player.on("dispose", () => {
			console.log("PLAYER DISPOSED")
			videojs.log("player will dispose");
			playerRef.current = null;
		});
		if (playerRef ) {
			setIsPlayerReady(true);
			
		}
	};

	return (
		<section className="relative">
			<div className='container mb-8'>
				{/* <div className="text-center space-y-5 mb-8">
          <Title>
            All your Tv <span className="text-primary">channels in one</span>{" "}
            place
          </Title>

          <p className="fs-16px text-primary text-center max-w-[38rem] mx-auto">
            Watch content from thousands of tv shows, films and more. Choose
            from genres below - there are shows and films for every taste.
            Enjoy!
          </p>
        </div> */}

				<div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center sm:space-x-5'>
					<img src='images/fire.svg' className='w-[26px]' alt='' />

					<Title
						variant='24'
						className='font-medium text-center sm:text-left'>
						Decentralized television,{" "}
						<span className='text-primary'>for free</span>
					</Title>
				</div>
			</div>

			<div className='bg-shade-darkest-blue sm:bg-transparent py-4 sm:py-0'>
				<div className='container'>
					<div
						className={`sm:bg-shade-darkest-blue grid ${returnVideoClass()} gap-8 sm:gap-3 lg:gap-10 lg:pr-10 rounded-lg overflow-hidden `}>
						<div
							className={` ${returnVideoHeightClass()} pt-5 pb-5`} 
							id='video-wrapper'>
							<VideoPlayer
							options={videoJsOptions}
							onReady={handlePlayerReady}
							/>
							{!isChatShow && (
								<div className='absolute sm:top-4 lg:right-[6.8rem] md:right-[1rem] right-3 top-16 bg-shade-grayis flex p-2'>
									<button
										className='text-2xl'
										onClick={chatDisplayHandler}>
										<Icon
											icon='material-symbols:arrow-right-alt-rounded'
											className='rotate-180'
										/>
									</button>
								</div>
							)}
						</div>

						{isChatShow && (
							<div className='sm:py-5 sm:px-8 lg:px-0'>
								<div className='flex items-center justify-between mb-6'>
									<div className='flex items-center space-x-2'>
										<img
											src='images/blockchain/stake.png'
											className='w-4 sm:w-6'
											alt=''
										/>
										<p className='text-sm font-medium'>
											0.0000
										</p>
									</div>

									<div className='flex items-center space-x-4'>
										<button
											className='text-2xl'
											onClick={chatDisplayHandler}>
											<Icon
												icon='material-symbols:arrow-right-alt-rounded'
												className='rotate-180'
											/>
										</button>
										<button
											className='text-xl'
											onClick={
												helper.comingSoonNotification
											}>
											<Icon icon='ep:setting' />
										</button>
									</div>
								</div>

								<div className='space-y-6'>
									<Title
										variant='24'
										className='text-left font-medium'>
										Stream Chat
									</Title>

									<LiveChat currentShow={show} />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AllTvChannels;
