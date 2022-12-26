import React, { Fragment, useEffect, useState } from "react";
import StreamComment from "./StreamComment";
import StreamForm from "./StreamForm";
import useLiveChat from "hooks/useLiveChat";
import moment from "moment";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { ToastMessage } from "./ToastMessage";
import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";


const LiveChat = ({ currentShow }) => {
	const { message, sendMessage } = useLiveChat(currentShow);
    const scroll = useScrollToBottom()

	const [currentMessage, setCurrentMessage] = useState([]);
    const user = LocalServices.getServices("user")
    useEffect(()=>{
        scroll()
    },[message])

	const getFormData = ({ typedMessage }) => {
		
        const modifyTime = moment.utc(new Date().getTime() * 1000).format('HH:mm:ss')

        const body = {
            comment: typedMessage,
            commentDate: moment().toISOString(),
            id: 0,
            isEdited: false,
            userId: user.userId,
            videoId: currentShow.videoId,
            videoTime: modifyTime,
            emote: ""
          }

        Api.addComment(body,'watch').then(result => {
            console.log("RESULT")
        }).catch(err => {
            console.log("ERR",err)
            ToastMessage('Message not sent')
        })

		const sentMessage = {
			comment: typedMessage,
			room: currentShow.videoId,
			msg: typedMessage,
			commentDate: moment().toISOString(),
			userName: user.userName,
			userId: user.userId,
			urlProfileImage: null,
			videoId: currentShow.videoId,
            emote: "",
            badgeType:""

		};

        sendMessage(sentMessage)
	};



	return (
		<div className='rounded-2xl py-5 sm:py-7 px-6 sm:px-8 bg-[#010101]'>
            
                <ScrollToBottom>
			<div className='space-y-4 mb-6 h-[300px] pr-2'>
                {message.length>0 && (
                    <>
                       { message.map((item)=>{
                            return <Fragment key={item}><StreamComment item={item}/></Fragment>
                        })}
                    </>
                ) }
			</div>
                </ScrollToBottom>

			<StreamForm submitHandler={getFormData} />
		</div>
	);
};

export default LiveChat;
