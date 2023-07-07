import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEpgModalVisibility, updateEpgData } from "redux/reducers/connectWalletModal_State";
import { ToastMessage } from "./ToastMessage";



const ChannelBox = ({ title, time,indexnum, id, state, onClick, data, utcStartTimeString, utcStopTimeString }) => {
  // const isActive = state.getter === id ? true : false;
  const dispatch = useDispatch();

  const click = () => {
    // state.setter(id)
    if(indexnum==0){
    onClick(data);
    }else{
      ToastMessage('Live show will be begin shortly on this channel!');
    }
  };
  const getStyle=()=>{
    let style={
      minWidth:160,
      marginLeft:0,
      borderLeft:'2px solid black'
    }
    let minWidth=160;
    if(data && data.channelId !== 727149 && (data.duration === 1 || data.duration < 160)) {
      data.duration = 1439;
    }
    let res=(data.duration/30)*160;
    if(res>minWidth){
      style.minWidth=res;
    }else{
     style.marginLeft=res-minWidth;
    }
    return style
  }
  const getWidthmd=()=>{
    return 'md:min-w-['+Math.ceil((data.duration/30)*160)+'px]';
  }
  const viewShowDetail=(event)=>{
    event.stopPropagation(); 
    dispatch(toggleEpgModalVisibility(true))
    dispatch(updateEpgData(data))
  }
  return (
    <div
      onClick={click}
      className={`cursor-pointer flex items-center px-4 md:px-10 bg-shade-grayis h-full rounded-md  relative z-10   ${getWidthmd()}  ${
        data.selected ? "md:sticky left-0 right-0 z-50" : ""
      } `}
      style={
        getStyle()
      }
    >
      <div className="max-w-[200px] space-y-[2px] z-50">
        {/* <div className="flex items-center space-x-2"> */}
          <p className="text-xs md:text-base font-medium two-lines-only">
            {data?.xmltitle ? data.xmltitle : title}
          </p>
          {/* <button className="flex text-base opacity-80" onClick={(e)=>viewShowDetail(e)}>
            <Icon icon="material-symbols:info-outline" />
          </button> */}
        {/* </div> */}
        {time && (
          <div className="flex items-center space-x-2">
            {
              utcStartTimeString && utcStopTimeString ? (
                <p className="text-xs md:text-sm font-medium">{utcStartTimeString} - {utcStopTimeString}</p>
              ) : (
                <p className="text-xs md:text-sm font-medium">{time}</p>
              )
            }
            
            <button className="flex text-base opacity-80" onClick={(e)=>viewShowDetail(e)}>
              <Icon icon="material-symbols:info-outline" />
            </button>
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full rounded-md border-2 z-10 transition-all duration-200 ${
          data.selected ? "border-primary" : "border-transparent"
        }`}
      ></div>
    </div>
  
  );
};
export default ChannelBox;
