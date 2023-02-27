import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { APIPATH, roomId } from "../constants";
import { useDispatch } from "react-redux";
import LocalServices from "services/LocalServices";
import { ToastMessage } from "components/ToastMessage";
import Api from "services/api";
import { groupBy } from "lodash";
import moment from "moment";
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

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("EFFECTSSS")
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
		socketRef.current.on("new message", receiveMessage);

    joinRoom(roomId);
    // getMessages()
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [currentShow]);

  //Function to get previous messages from db
  const getMessages = () => {
    if (currentShow.videoId) {
      setLoading(true);
      Api.getIndividualChat("watch", page)
        .then((result) => {
          setLoading(false);
          const group = groupBy(result.data.data.content, (result) =>
            moment(result.commentDate).format("DD/MM/YYYY")
          );
          console.log("GROUP", group);
          const rows = [];
          Object.keys(group).map((key) => {
            const arr = {
              commentDate: key,
              chats: group[key],
            };
          
              rows.push(arr);
            
          });
		  
          setMessage((oldArry) => [...rows, ...oldArry]);
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
   debugger
    const msgFormat = {
      commentDate:moment(data.commentDate).format("DD/MM/YYYY"),
      chats:[data]
    }
    let newMessgae = message.map(item => {
      if(item.commentDate === msgFormat.commentDate){
        item.chats.push(data)
      }
      return item
    })
   let findOne = newMessgae.find(item => item.commentDate === msgFormat.commentDate)
   if(!findOne){
    newMessgae.push(msgFormat)
   }
 
    setMessage(newMessgae);
    socketRef.current.emit("send message", data);
  }

  //Function to send new message
  function receiveMessage(arg) {
    //
    console.log("receive message", arg);
    
    const msgFormat = {
      commentDate:moment(arg.commentDate).format("DD/MM/YYYY"),
      chats:[arg]
    }
    let newMessgae = message.map(item => {
      if(item.commentDate === msgFormat.commentDate){
        item.chats.push(arg)
      }
      return item
    })
   let findOne = newMessgae.find(item => item.commentDate === msgFormat.commentDate)
   if(!findOne){
    newMessgae.push(msgFormat)
    setMessage((oldMsg) =>[newMessgae,...oldMsg]);

   }

     setMessage(newMessgae);
   

  }

  function groupArray(arr){
    const group = groupBy(arr, (result) =>
            moment(result.commentDate).format("MM/DD/YYYY")
          );
         
          const rows = [];
          Object.keys(group).map((key) => {
            const arr = {
              commentDate: key,
              chats: group[key],
            };
            if(key != moment().format("MM/DD/YYYY")){

              rows.push(arr);
            }
          });

          return rows
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
