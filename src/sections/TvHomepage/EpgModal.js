import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEpgModalVisibility,updateCurrentVideo } from "redux/reducers/connectWalletModal_State";
import BlackScreen from "../../components/BlackScreen";
import Button from "../../components/Button";
import UpperRoot from "../../components/UpperRoot";

function EpgModal() {
  const dispatch = useDispatch();
  const { isEpgModalVisible,data } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const modalRef = OutsideClickDetector(() =>{
    dispatch(toggleEpgModalVisibility(false))
    
  }
  );

  useEffect(() => {
    console.log('epg modal',isEpgModalVisible)
    if (isEpgModalVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isEpgModalVisible]);

  const watchVideo = () => {
        dispatch(updateCurrentVideo(true));
        dispatch(toggleEpgModalVisibility(false))
  };
const closeModal=()=>{
  dispatch(toggleEpgModalVisibility(false))
}
  return (
    <>
      <BlackScreen zIndex="1000000" show={isEpgModalVisible} />

      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#131313] w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-3 md:py-5 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isEpgModalVisible
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
         
          <div className="">
            <div className="mb-8 flex justify-between">
            <p className=" text-lg mb-3">{data.title}</p>
              <a onClick={()=>closeModal()} className="text-lg ">&times;</a>
            </div>

            <div className="flex justify-center mb-7 h-[300px]">
            <img
            src={data.videoThumbnailUrl}
            className="object-fill"
            alt=""
          />
            </div>

            <div>
              <p className=" text-lg ">{data.title}</p>
              <p className="text-sm">{data.duration} min</p>
              <p className="text-sm mb-3">{data.channelName}</p>
              <Button
              type="submit"
              buttonProps={{
                onClick: () => {
                    watchVideo()
                },
            }}
            className="text-lg btn-primary text-white flex z-[500000]"
            label={'Watch live'}
          >
         
          </Button>
            </div>
          </div>

         
          
        </section>
      </UpperRoot>
    </>
  );
}

export default EpgModal;
