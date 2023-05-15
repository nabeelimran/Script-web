import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { toggleGlassListingVisibility } from "redux/reducers/connectWalletModal_State";
import { setGlasses } from "redux/reducers/Profile_State";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { helper } from "utils/helper";
import FillBar from "./FillBar";
import Popup from "./Popup";
import { ToastMessage } from "./ToastMessage";
import UpperRoot from "./UpperRoot";
import LoaderGif from "../assets/Loading_icon.gif";
import { Typography, styled } from "@mui/material";

function GlassListingPopup() {
  const user = LocalServices.getServices("user") || null;
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const { isGlassListingModalVisible } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const [glassListingData, setGlassListingData] = useState([]);
  const [activeGlass, setActiveGlass] = useState({});
  const [hasMoreData, setHasMoreData] = useState(true);
  const [active, setActive] = useState(1);
  const [totalGlasses, setTotalGlasses] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const { isLogin } = useSelector((state) => state.login_state);

  const changeActiveState = (id, glass) => {
    if (glass && !glass.drained) {
      setActive(id);
      setActiveGlass(glass);
    } else {
      ToastMessage("Glass is drained. Please recharge it to use again.");
    }
  };

  const modalRef = OutsideClickDetector(() => {
    dispatch(toggleGlassListingVisibility(false));
  });

  const selectGlass = () => {
    setLoader(true);
    if (activeGlass && activeGlass.id && user && user.userId) {
      const req = {
        glassId: activeGlass.id,
        userId: user.userId,
      };
      Api.selectGlass(req, "watch").then((res) => {
        if (res && res.status === 200) {
          if (res.data.isSuccess) {
            dispatch(toggleGlassListingVisibility(false));
            ToastMessage(res?.data?.message, true);
            setLoader(false);
            setActiveGlass({});
          } else {
            ToastMessage(res?.data?.message || "Glass already drained.");
            setLoader(false);
          }
        }
      });
    } else {
      ToastMessage("Please select glass");
      setLoader(false);
    }
  };

  const returnClasses = (id) => {
    if (id === active) {
      return "active-class";
    } else {
      return "";
    }
  };

  const getGlassesList = () => {
    console.log("pipiuouoo");
    Api.getGlassesList(user?.walletAddress, pageNo, 10, "watch").then((res) => {
      if (res && res.status === 200) {
        if (res?.data?.data?.content && res?.data?.data?.content?.length > 0) {
          if (
            res?.data?.data?.content?.length !== 0 ||
            res?.data?.data?.content?.length === 10
          ) {
            // const glassListing = res?.data?.data?.content.filter((d) => !d.drained);
            const unDrainedList = [
              ...glassListingData,
              ...res?.data?.data?.content,
            ];
            console.log(unDrainedList, "unDrainedList");
            const uniqueUnDrainedList = [
              ...unDrainedList.reduce((list, o) => {
                if (!list.some((obj) => obj.id === o.id)) {
                  list.push(o);
                }
                return list;
              }, []),
            ];
            console.log(uniqueUnDrainedList, "uniqueUnDrainedList");
            setActive(uniqueUnDrainedList[0]);
            setGlassListingData(uniqueUnDrainedList);
            setTotalGlasses(res?.data?.data?.totalrecords);
            dispatch(setGlasses(res.data.data.content));
          } else {
            setHasMoreData(false);
          }
        }
      }
    });
  };

  const fetchData = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
    console.log(pageNo, "pageNo");
  };

  useEffect(() => {
    if (isGlassListingModalVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setGlassListingData([]);
  }, [isGlassListingModalVisible]);

  useEffect(() => {
    setGlassListingData([]);
  }, [isLogin]);

  useEffect(() => {
    if (user?.userId && isGlassListingModalVisible) {
      getGlassesList();
    }
  }, [isGlassListingModalVisible, pageNo]);

  console.log(glassListingData, "glassListingData");

  return (
    <>
      <UpperRoot>
        {console.log(glassListingData, "data")}
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
              {glassListingData && glassListingData.length > 0 ? (
                glassListingData.map((glass, index) => (
                  <div
                    className={`flex py-2 mb-3 rounded w-11/12 mx-auto bg-[#131313] cursor-pointer ${returnClasses(
                      index + 1
                    )}`}
                    onClick={() => changeActiveState(index + 1, glass)}
                    key={index}
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={
                        helper.glassImages[
                          Math.floor(Math.random() * helper.glassImages.length)
                        ]
                      }
                      alt=""
                      className="w-[60px] xl:w-[80px] mx-4"
                    />
                    <div
                      className="flex "
                      style={{
                        flexDirection: "column",
                      }}
                    >
                      <h6>#{glass.tokenId}</h6>
                      <div className="text-md font-semibold">
                        Level : {glass.level}
                      </div>
                      <div className="text-md font-semibold">
                        Type : {glass.type}
                      </div>
                      {/* <p className="text-xs">
                        Test
                      </p> */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-[100%]">
                  <p className="text-xl">No Glass Found</p>
                </div>
              )}
            </InfiniteScroll>
          </div>
          {glassListingData && glassListingData.length > 0 ? (
            <div className="text-center mt-5">
              <button
                className="px-5 py-1 rounded bg-[#131313]"
                onClick={() => selectGlass()}
                disabled={loader}
              >
                {loader ? (
                  <img
                    src={LoaderGif}
                    alt="loader"
                    style={{ height: "16px", margin: "10px 50px" }}
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          ) : null}
        </section>
      </UpperRoot>
    </>
  );
}

export default GlassListingPopup;

const ValuesTypography = styled(Typography)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "inline-block",
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  padding: "5px",

  marginLeft: 8,
  fontWeight: 600,
  minWidth: 30,
  textAlign: "center",
}));
