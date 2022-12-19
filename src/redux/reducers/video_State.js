import { createSlice } from "@reduxjs/toolkit";

const initialState = {
myShows:{}
  
};

export const video_State = createSlice({
  name: "video_State",
  initialState,
  reducers: {
    videoShows: (state, action) => {
        
      state.myShows = {...action.payload};
    }
  },
});

// Action creators are generated for each case reducer function
export const { videoShows } = video_State.actions;

export default video_State.reducer;
