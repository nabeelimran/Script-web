import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { APIPATH, roomId } from "../constants";
import { useDispatch } from "react-redux";
import LocalServices from "services/LocalServices";
import { ToastMessage } from "components/ToastMessage";
import Api from "services/api";

const useLiveChat = (currentShow) => {
	const [name, setName] = useState("");

	const [emailId, setEmailId] = useState("");

	const [room, setRoom] = useState("");
	const [message, setMessage] = useState([]);

	const socketRef = useRef();
	let token = LocalServices.getServices("token");

	const dispatch = useDispatch();

	useEffect(() => {
		getMessages();
	}, [])

	useEffect(() => {
		if (token) {
			socketRef.current = socketIOClient(APIPATH.SOCKETURL, {});
			//socketRef.current.connect()
		} else {
			// ToastMessage("Login to chat");
			return;
		}

		console.log("socketRef", socketRef, currentShow);
		// All socket events and function call against them
		socketRef.current.on("new message", receiveMessage);

		joinRoom(roomId);
        getMessages()
		// Destroys the socket reference
		// when the connection is closed
		return () => {
			socketRef.current.disconnect();
		};
	}, [currentShow]);

	//Function to get previous messages from db
	const getMessages = () => {
		if (currentShow.videoId) {
			Api.getIndividualChat("watch")
				.then((result) => {
                   
                    setMessage(oldArry => [...result.data.data])
                })
				.catch((err) => {
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
		//console.log(data);

		setMessage((oldArry) => [...oldArry, data]);
		socketRef.current.emit("send message", data);
	}

	//Function to send new message
	function receiveMessage(arg) {
		//
		console.log("receive message", arg);
		setMessage((oldArry) => [...oldArry, arg]);
	}

	return {
		message,
		sendMessage,
	};
};

export default useLiveChat;
