import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refreshChannel:false,
  showUpdated: Date.now(),
};

export const refresh_state = createSlice({
  name: "refresh_state",
  initialState,
  reducers: {
    refreshChannelAction:(state,action)=>{
      state.refreshChannel=action.payload;
    },
    checkShowUpdate: (state, action) => {
      state.showUpdated = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { refreshChannelAction, checkShowUpdate } = refresh_state.actions;

export default refresh_state.reducer;
