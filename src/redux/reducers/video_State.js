import { createSlice } from "@reduxjs/toolkit";

const initialState = {
myShows:{},
earnedToken:0,
videoTimeWatch:{},
refreshChannel:false
  
};

export const video_State = createSlice({
  name: "video_State",
  initialState,
  reducers: {
    videoShows: (state, action) => {
      //console.log("SHOW DISPATCH")
        
      state.myShows = {...action.payload};
    },
    earnedTokenRed : (state,action) => {
     // console.log("TOKEN DISPATCH")
      state.earnedToken = state.earnedToken + action.payload 
    },
    resetEarnedToken : (state,action) => {
     // console.log("TOKEN DISPATCH")
      state.earnedToken = action.payload
    },
    getVideoTimeWatch : (state,action) => {
      //console.log("VIDEO DISPATCH")
      
      state.videoTimeWatch = { ...action.payload} 
    },
    refreshChannel:(state,action)=>{
      state.refreshChannel=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { videoShows,earnedTokenRed,getVideoTimeWatch,refreshChannel,resetEarnedToken } = video_State.actions;

export default video_State.reducer;
