import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { toggleGlassListingVisibility } from "redux/reducers/connectWalletModal_State";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { helper } from "utils/helper";
import FillBar from "./FillBar";
import Popup from "./Popup";
import { ToastMessage } from "./ToastMessage";
import UpperRoot from "./UpperRoot";


function GlassListingPopup() {
  const user = LocalServices.getServices("user") || null;
  const dispatch = useDispatch();
  const { isGlassListingModalVisible } = useSelector(
		(state) => state.connectWalletModal_State
	);
  const [glassListingData, setGlassListingData] = useState([]); 
  const [activeGlass, setActiveGlass] = useState({});
  const [hasMoreData, setHasMoreData] = useState(true);
  const [active, setActive] = useState(1);
  const [totalGlasses, setTotalGlasses] = useState(0);
  const [pageNo, setPageNo] =  useState(0);

  const changeActiveState = (id, glass) => {
    setActive(id);
    setActiveGlass(glass);
  };

  const modalRef = OutsideClickDetector(() => {
    dispatch(toggleGlassListingVisibility(false));
  });

  const selectGlass = () => {
    const req = {
      glassId: activeGlass.id,
      userId: user.userId
    }
    Api.selectGlass(req, 'watch').then((res) => {
      debugger
      if(res && res.status === 200) {
        dispatch(toggleGlassListingVisibility(false));
        ToastMessage(res.data.data.message, true);
      }
    })
  }  

  const returnClasses = (id) => {
    if (id === active) {
      return "active-class";
    } else {
      return "";
    }
  };

  const getGlassesList = () => {
    Api.getGlassesList(user?.walletAddress, pageNo, 10, "watch").then((res) => {
      if(res && res.status === 200) {
        if(res?.data?.data?.content && res?.data?.data?.content?.length > 0) {
          if(res?.data?.data?.content?.length !== 0  || res?.data?.data?.content?.length === 10) {
            const glassListing = res?.data?.data?.content.filter((d) => !d.drained);
            const unDrainedList = [...glassListingData, ...glassListing];
            const uniqueUnDrainedList = [...unDrainedList.reduce((list, o) => {
              if(!list.some(obj => obj.id === o.id)) {
                list.push(o);
              }
              return list;
            }, [])]
            setActive(uniqueUnDrainedList[0]);
            setGlassListingData(uniqueUnDrainedList);
            setTotalGlasses(res?.data?.data?.totalrecords);
          } else {
            setHasMoreData(false);
          }
          
        }
      }
    })
  }

  const fetchData = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
    console.log(pageNo, 'pageNo');
  }

  useEffect(() => {
		if (isGlassListingModalVisible) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isGlassListingModalVisible]);

  useEffect(() => {
    if(user?.userId) {
      getGlassesList();
    }
  }, [isGlassListingModalVisible, pageNo])

  return (
    <>
      <UpperRoot>
        {console.log(glassListingData, 'data')}
        <section
            ref={modalRef}
            className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
              isGlassListingModalVisible
                ? "pointer-events-auto top-1/2 opacity-100"
                : "opacity-0 pointer-events-none top-[40%]"
            }`}
          >
          <h2 className="text-center mb-3">Glasses</h2>
          <div className="max-h-96 overflow-auto">
            <InfiniteScroll
              dataLength={glassListingData.length} //This is important field to render the next data
              next={fetchData}
              hasMore={hasMoreData}
              height={350}
            >
              {glassListingData && glassListingData.length > 0 ? 
                glassListingData.map((glass, index) =>
                  <div className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(index + 1)}`}
                    onClick={() => changeActiveState(index + 1, glass)}
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
            </InfiniteScroll>
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
