import React from "react";

function StreamComment() {
  return (
    <div className="flex space-x-4">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src="images/tv/chat-person.png" className="w-full h-full" alt="" />
      </div>

      <div className="space-y-[2px] flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Juhi SIngh</p>
          <p className="text-xs">5:46 PM</p>
        </div>

        <p className="text-sm text-ellipsis">What movie is this?</p>
      </div>
    </div>
  );
}

export default StreamComment;
