import React, { Fragment, useEffect, useRef, useState } from "react";
import StreamComment from "./StreamComment";
import StreamForm from "./StreamForm";
import useLiveChat from "hooks/useLiveChat";
import moment from "moment";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { ToastMessage } from "./ToastMessage";
import ScrollToBottom from "react-scroll-to-bottom";
import { roomId } from "constants";

const LiveChat = ({ currentShow, getRewardEarningAmount }) => {
	const { message, sendMessage } = useLiveChat(currentShow);
	const [messageForReply, setMessageForReply] = useState({});
	const [profileImg,setProfile] = useState(null);
	const [tokenEarnedByMessage, setTokenEarnedByMessage] = useState(0);

	const scroll = useRef(null);
	const user = LocalServices.getServices("user");

	const getTokenEarnedByChat = () => {
		Api.getChatRewardByUserId(user.userId,'chat').then((res) => {
			if(res && res.status === 200) {
				setTokenEarnedByMessage(res.data.data.earnedToken)
				getRewardEarningAmount(tokenEarnedByMessage)
			}
		})
	}

	const saveTokenEarnedByChat = () => {
		const req = {
			earnedToken: tokenEarnedByMessage?.toFixed(4) || 0,
			userId: user?.userId
		};
		Api.saveTokenEarnedByChat(req, 'watch').then((res) => {})
	}



	useEffect(()=>{
		if(user?.userId){

			saveTokenEarnedByChat()
		}
		getRewardEarningAmount(tokenEarnedByMessage)
	},[tokenEarnedByMessage])

	useEffect(() => {
		if(user && user.userId) {
			getTokenEarnedByChat();
		}
	}, []);

	useEffect(() => {
		const domNode = scroll.current;
		getProfile()
console.log("sfsdf",tokenEarnedByMessage)
		// if (domNode) {
		// 	domNode.scrollIntoView({ behavior: "smooth" });
		// }
	}, [message]);

	const getProfile = async () => {
		if (user && user.userId) {
			Api.viewUserProfile(user.userId,'edit-profile').then(result => {
				console.log(result)
				setProfile(result.data.data.profile.urlProfileImage)
			}).catch(err => console.warn(err))	
		}
	}

	const getFormData = ({ typedMessage }) => {
		if(!typedMessage.trim()) {
			ToastMessage('Invalid message');
			return;
		}
		const user = LocalServices.getServices("user");
		const modifyTime = moment
			.utc(new Date().getTime() * 1000)
			.format("HH:mm:ss");

		const sentMessage = {
			comment: typedMessage,
			room: roomId,
			msg: typedMessage,
			messageId: new Date().getTime(),
			reply: messageForReply && JSON.stringify(messageForReply) !== '{}' ? messageForReply : null,
			commentDate: moment().toISOString(),
			userName: user.userName,
			userId: user.userId,
			urlProfileImage: profileImg ? profileImg : null,
			videoId: currentShow.videoId,
			emote: "",
			badgeType: "",
		};

		const body = {
			comment: typedMessage,
			commentDate: moment().toISOString(),
			messageId: sentMessage.messageId,
			reply: messageForReply && JSON.stringify(messageForReply) !== '{}' ? messageForReply : null,
			id: 0,
			isEdited: false,
			userId: user.userId,
			videoId: currentShow.videoId,
			videoTime: modifyTime,
			emote: "",
		};

		// Api.addComment(body, "watch")
		// 	.then((result) => {
		// 		console.log("RESULT");
		// 	})
		// 	.catch((err) => {
		// 		console.log("ERR", err);
		// 		// ToastMessage("Message not sent");
		// });

		Api.saveIndividualChat(body, "watch")
			.then((result) => {
				console.log("RESULT");
			})
			.catch((err) => {
				console.log("ERR", err);
				// ToastMessage("Message not sent");
		});
		
		setTokenEarnedByMessage(prevState => {
			let rf = (prevState +  0.0001).toFixed(4)
			return parseFloat(rf)
		});
		
		sendMessage(sentMessage);
		if(messageForReply && JSON.stringify(messageForReply) !== '{}') {
			setMessageForReply({});
		}
	};

	const chooseMessage = (msg) => {
		console.log(msg);
		setMessageForReply(msg);
	}

	return (
		<div className='rounded-2xl py-5 sm:py-7 px-6 sm:px-8 bg-[#010101]'>
			<ScrollToBottom>
				<div className='space-y-4 mb-6 h-[300px] pr-2 pb-2'>
					{message.length > 0 && (
						<>
							{message.map((item) => {
								return (
									<Fragment key={item}>
										{/* chooseMessage={chooseMessage} */}
										<StreamComment item={item}  />
									</Fragment>
								);
							})}
						</>
					)}
					<div ref={scroll} />
				</div>
			</ScrollToBottom>

			<StreamForm submitHandler={getFormData} messageForReply={messageForReply} />
		</div>
	);
};

export default LiveChat;
