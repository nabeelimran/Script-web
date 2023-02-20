import { createSlice } from "@reduxjs/toolkit";

const initialState = {
refreshChannel:false
  
};

export const refresh_state = createSlice({
  name: "refresh_state",
  initialState,
  reducers: {
    refreshChannel:(state,action)=>{
      state.refreshChannel=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { refreshChannel } = refresh_state.actions;

export default refresh_state.reducer;
