import { createSlice } from "@reduxjs/toolkit";

const initialState = {
myShows:{},
earnedToken:0,
videoTimeWatch:{}
  
};

export const video_State = createSlice({
  name: "video_State",
  initialState,
  reducers: {
    videoShows: (state, action) => {
        
      state.myShows = {...action.payload};
    },
    earnedTokenRed : (state,action) => {
      
      state.earnedToken = state.earnedToken + action.payload 
    },
    getVideoTimeWatch : (state,action) => {
      
      state.videoTimeWatch = { ...action.payload} 
    }
  },
});

// Action creators are generated for each case reducer function
export const { videoShows,earnedTokenRed,getVideoTimeWatch } = video_State.actions;

export default video_State.reducer;
