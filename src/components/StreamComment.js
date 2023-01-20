import moment from "moment";
import React from "react";
import { isBnbUser } from "utils/helper";

function StreamComment({item}) {

  return (
    <div className="flex space-x-3 md:space-x-4">
      <div className="w-8 md:w-10 h-8 md:h-10 rounded-full overflow-hidden">
        <img src={ item.userName.includes('.bnb') ? '/images/bnb-default-avatar.png' : item.urlProfileImage ? item.urlProfileImage : "/images/logo-beta.svg"} className="w-full h-full" alt="" />
      </div>
      <div className="space-y-1 md:space-y-[2px] flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs md:text-sm font-medium">{item.userName}</p>
          <p className="text-xs">{moment(new Date(item.commentDate)).format("MM/D/YY HH:mm")}</p>
        </div>

        <p className="text-xs md:text-sm text-ellipsis">{item.msg || item.comment}</p>
      </div>
    </div>
  );
}

export default StreamComment;
