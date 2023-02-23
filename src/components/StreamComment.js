import moment from "moment";
import React from "react";

function StreamComment({item, chooseMessage}) {

  return (
    // onClick={() => chooseMessage(item)}
    <div className="flex space-x-3 md:space-x-4">
      <div className="w-8 md:w-10 h-8 md:h-10 rounded-full overflow-hidden">
        <img src={ item?.userName?.includes('.bnb') ? '/images/bnb-default-avatar.png' : item?.urlProfileImage ? item?.urlProfileImage : "/images/yellow-dot.png"} className="w-full h-full" alt="" />
      </div>
      <div className="space-y-1 md:space-y-[2px] flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs md:text-sm font-medium">{item.userName}</p>
          <p className="text-xs">{moment(new Date(item.commentDate)).format("MM/D/YY HH:mm")}</p>
        </div>
      {
        item.reply ? (
          <>
          <div className="p-2 bg-slate-600" style={{background:"#1e1e1e"}}>
            <p className="text-xs font-sm mb-1">Reply</p>
              <p className="text-xs md:text-sm text-ellipsis pl-2">{item.msg || item.comment}</p>
          </div>
          <hr/>
        <p className="text-xs md:text-sm text-ellipsis">{item.reply.msg || item.reply.comment}</p>
        </>
        ) : (
          <>
        <p className="text-xs md:text-sm text-ellipsis">{item.msg || item.comment}</p>
          </>
        )
      }
      </div>
    </div>
  );
}

export default StreamComment;
