import React from "react";
import { useState } from "react";
import { helper } from "utils/helper";
import GlassPopup from "./GlassPopup";
import SquareBox from "./SquareBox";

function GlassModalButton({
  selectedChananel,
  user
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <GlassPopup open={modal} setOpen={setModal} />

      <SquareBox
        buttonProps={{ onClick: () => {
          setModal((val) => !val);
          helper.trackByMixpanel("Glasses Button Click",{
            "channel_id": selectedChananel?.id || 0,
            "email" : user?.email || 'N/A',
            "channel_name" : selectedChananel?.channelName || 'N/A'
          })
        }  }}
        className="flex-1 xl:flex-auto"
        variant={1}
      >
        <img
          src="images/glasses.svg"
          className="w-[34px] xl:w-[38px] mb-2 xl:mb-3"
          alt=""
        />
        <div className="py-1 px-3 text-[10px] xl:text-xs bg-black font-medium rounded">
          #708543
        </div>
      </SquareBox>
    </>
  );
}

export default GlassModalButton;
