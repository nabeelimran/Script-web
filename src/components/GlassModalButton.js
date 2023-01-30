import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleGlassListingVisibility, toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import LocalServices from "services/LocalServices";
import MixPanelService from "services/mixPanelService";
import { helper } from "utils/helper";
import GlassPopup from "./GlassPopup";
import SquareBox from "./SquareBox";

function GlassModalButton({ selectedChananel, user, selectedGlass }) {
  const [modal, setModal] = useState(false);
  const token = LocalServices.getServices('token');
  const dispatch = useDispatch();

  const handleGlassModal = () => {
    if(token) {
      if(selectedGlass && JSON.stringify(selectedGlass) !== '{}') {
        setModal((val) => !val);
      } else {
        dispatch(toggleGlassListingVisibility(true));
      }
      try {
        MixPanelService.setIdentifier(user.email);
      } catch (error) {
        console.log("set identifier");
      }
  
      helper.trackByMixpanel("Glasses Button Click", {
        channel_id: selectedChananel?.id || 0,
        email: user?.email || "N/A",
        channel_name: selectedChananel?.channelName || "N/A",
      });
    } else {
      dispatch(toggleModalVisibility(true));  
    }
  }

  return (
    <>
      <GlassPopup open={modal} setOpen={setModal} selectedGlass={selectedGlass} />

      <SquareBox
        buttonProps={{
          onClick: () => {
            handleGlassModal()
          },
        }}
        className="flex-1 xl:flex-auto"
        variant={1}
      >
        <img
          src={helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)]}
          className="w-[34px] xl:w-[38px] mb-2 xl:mb-3"
          alt=""
        />
        <div className="py-1 px-3 text-[10px] xl:text-xs bg-black font-medium rounded">
          {selectedGlass && JSON.stringify(selectedGlass) !== '{}' ? `#${selectedGlass.glassId}` : 'Choose'}
        </div>
      </SquareBox>
    </>
  );
}

export default GlassModalButton;
