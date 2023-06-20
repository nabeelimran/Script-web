import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { APIPATH, roomId } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import LocalServices from "services/LocalServices";
import { ToastMessage } from "components/ToastMessage";
import Api from "services/api";
import { groupBy } from "lodash";
import moment from "moment";
import { toggleNotification, toggleNotificationBell } from "redux/reducers/Notification_State";
const useLiveChat = (currentShow) => {
	const [name, setName] = useState("");
	const [page, setPage] = useState(0);
	const [totalCount, setTotalCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [emailId, setEmailId] = useState("");

	const [room, setRoom] = useState("");
	const [message, setMessage] = useState([]);

	const socketRef = useRef();
	let token = LocalServices.getServices("token");
	const {isLogin} = useSelector(state => state.login_state)

	const dispatch = useDispatch();

	useEffect(() => {
		getMessages();
	}, [page]);

	useEffect(() => {
		if (token) {
			socketRef.current = socketIOClient(APIPATH.SOCKETURL, {});
			//socketRef.current.connect()
		} else {
			// ToastMessage("Login to chat");
			return;
		}

		console.log("socketRef", socketRef);
		// All socket events and function call against them

		joinRoom(roomId);

		// getMessages()
		// Destroys the socket reference
		// when the connection is closed
		return () => {
			socketRef.current.disconnect();
		};
	}, [currentShow, isLogin]);

	socketRef?.current?.off("new message");
	socketRef?.current?.on("new message", receiveMessage);

	socketRef?.current?.off("notification-received");
	socketRef?.current?.on("notification-received", receiveNotification);

	//Function to get previous messages from db
	const getMessages = () => {
		if (currentShow.videoId) {
			setLoading(true);
			Api.getIndividualChat("watch", page)
				.then((result) => {
					setLoading(false);
					let oldChats = []
					let chta = message?.map(item =>  {
						oldChats.push(...item.chats)
					})

					let refreshChat = result.data.data.content.filter(item => {
						if(item.userId != 20247407){
							return item
						}
					})
					const messages = [...refreshChat, ...oldChats]
					// let sortedMessage = messages.sort((a,b) => a.commentDate - b.commentDate);
					// sortedMessage = sortedMessage.map((msg) => {
					// 	msg.timepass = moment(msg.commentDate).fromNow()
					// 	return msg;
					// });
					const group = groupBy(
						messages,
						(result) => moment(result.commentDate).format("DD/MM/YYYY")
					);
					
					const rows = [];
					Object.keys(group).map((key) => {
						const arr = {
							commentDate: key,
							chats: group[key],
						};

						rows.push(arr);
						return key;
					});

					setMessage(rows);
					setTotalCount(result.data.data.totalrecords);
				})
				.catch((err) => {
					setLoading(false);
					// ToastMessage("Chat not recieved")
				});
		}
	};

	//Function to create a message room
	const joinRoom = (id) => {
		//
		console.log("joinRoom", id);
		socketRef.current.emit("register as broadcaster", id);
	};

	//Function to send new message
	function sendMessage(data) {
		const msgFormat = {
			commentDate: moment(data.commentDate).format("DD/MM/YYYY"),
			timepass: moment(data.commentDate).fromNow(),
			chats: [data],
		};
		let newMessgae = message.map((item) => {
			// if (item.commentDate === msgFormat.commentDate) {
				item.chats.push(data);
			// }
			return item;
		});
		// let findOne = newMessgae.find(
		// 	(item) => item.commentDate === msgFormat.commentDate
		// );
		// if (!findOne) {
		// 	newMessgae.push(msgFormat);
		// }

		setMessage(newMessgae);
		socketRef.current.emit("send message", data);
	}

	function receiveNotification(arg) {
		dispatch(toggleNotification(true))
		dispatch(toggleNotificationBell(true));
	}

	//Function to send new message
	function receiveMessage(arg) {
		//
		// debugger

		const msgFormat = {
			commentDate: moment(arg.commentDate).format("DD/MM/YYYY"),
			timepass: moment(arg.commentDate).fromNow(),
			chats: [arg],
		};
		let msg = message;
		let newMessgae = msg.map((item) => {
			if (item.commentDate === msgFormat.commentDate) {
				item.chats.push(arg);
			}
			return item;
		});

		let findOne = newMessgae.find(
			(item) => item.commentDate === msgFormat.commentDate
		);
		if (!findOne) {
			newMessgae.push(msgFormat);
		}

		setMessage(newMessgae);
	}

	return {
		message,
		sendMessage,
		setPage,
		page,
		totalCount,
		loading,
	};
};

export default useLiveChat;
