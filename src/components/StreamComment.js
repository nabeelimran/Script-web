import moment from "moment";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";

function StreamComment({ item, chooseMessage }) {
  const [replyPopup, setReplyPopup] = useState(false);
  const iconRef = useRef(null)

  const handleReplyPopup = () => {
    setReplyPopup((prevState) => !prevState);
  };

  const handleReply = (item) => {
    chooseMessage(item)
    setReplyPopup((prevState) => !prevState);
  }

  const handleMouseEnter = () => {
    iconRef.current.style.opacity = 1
  }
  const handleMouseLeave = () => {
    iconRef.current.style.opacity = 0
    setReplyPopup(false)
  }

  return (
   
    <div
      className="flex space-x-3 md:space-x-4 relative"
      onMouseEnter={ handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-8 md:w-10 h-8 md:h-10 rounded-full overflow-hidden">
        <img
          src={
            item?.userName?.includes(".bnb")
              ? "/images/bnb-default-avatar.png"
              : item?.urlProfileImage
              ? item?.urlProfileImage
              : "/images/yellow-dot.png"
          }
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="space-y-1 md:space-y-[2px] flex-1">
        <div className="flex items-center gap-1">
          <p className="text-xs md:text-sm font-medium">{item.userName}</p>
          <div className="relative opacity-0" ref={iconRef}>
          {replyPopup ? (
            <Icon
              icon="ic:round-keyboard-arrow-up"
              className="cursor-pointer"
              onClick={handleReplyPopup}
            />
          ) : (
            <Icon
              icon="ic:round-keyboard-arrow-down"
              className="cursor-pointer"
              onClick={handleReplyPopup}
            />
          )}
          <div
            className={`border border-white rounded-md absolute bg-white px-4 py-2 ${
              replyPopup ? "block" : "hidden"
            }`}
          >
            <p className="text-black cursor-pointer" onClick={()=>handleReply(item)}>Reply</p>
          </div>
          </div>

        </div>
        {item.reply ? (
          <>
            <div className="p-2 bg-slate-600" style={{ background: "#1e1e1e" }}>
              <p className="text-xs font-sm mb-1">Reply</p>
              <p className="text-xs md:text-sm text-ellipsis pl-2">
                {item.reply.msg || item.reply.comment}
              </p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-sm text-ellipsis">
                {item.msg || item.comment}
              </p>
              <p className="text-xs">
                {moment(new Date(item.commentDate)).format("HH:mm")}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-sm text-ellipsis">
                {item.msg || item.comment}
              </p>
              <p className="text-xs">
                {moment(new Date(item.commentDate)).format("HH:mm")}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StreamComment;
