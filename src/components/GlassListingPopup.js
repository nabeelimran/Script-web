import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGlassListingVisibility } from "redux/reducers/connectWalletModal_State";
import { helper } from "utils/helper";
import FillBar from "./FillBar";
import Popup from "./Popup";
import UpperRoot from "./UpperRoot";

function GlassListingPopup({
  glassList
}) {

  const dispatch = useDispatch();
  const { isGlassListingModalVisible, glassListingData } = useSelector(
		(state) => state.connectWalletModal_State
	);
  const [active, setActive] = useState(1);

  const changeActiveState = (id) => {
    setActive(id);
  };

  const selectGlass = () => {
    dispatch(toggleGlassListingVisibility(false));
    helper.comingSoonNotification();
  }  

  const returnClasses = (id) => {
    if (id === active) {
      return "active-class";
    } else {
      return "";
    }
  };

  useEffect(() => {
		if (isGlassListingModalVisible) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isGlassListingModalVisible]);

  return (
    <>
      <UpperRoot>
        {console.log(glassListingData, 'data')}

        <section
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isGlassListingModalVisible
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          <h2 className="text-center mb-3">Glasses</h2>
          <div className="max-h-96 overflow-auto">
            {glassListingData && glassListingData.length > 0 ? 
              glassListingData.map((glass, index) =>
                <div className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(index + 1)}`}
                  onClick={() => changeActiveState(index + 1)}
                  key={index}
                >
                  <img src={helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)]} alt="" className="w-[60px] xl:w-[80px] mx-4" />
                  <div className="flex items-center">
                    <h6>
                      #{glass.id}
                    </h6>
                    {/* <p className="text-xs">
                      Test
                    </p> */}
                  </div>
                </div>
              )  : null
            }
          </div>

          <div className="text-center mt-5">
            <button
              className="px-5 py-1 rounded bg-[#131313]"
              onClick={() => selectGlass()}
            >
              Continue
            </button>
          </div>
        </section>
      </UpperRoot>
    </>
  );
}

export default GlassListingPopup;
