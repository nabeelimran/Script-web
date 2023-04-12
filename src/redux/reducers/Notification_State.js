import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNotificationReceived: false,
    isBellShown: false
  
};

export const Notification_State = createSlice({
  name: "Notification_State",
  initialState,
  reducers: {
    toggleNotification: (state, action) => {
      state.isNotificationReceived = action.payload;
    },
    toggleNotificationBell: (state, action) => {
        state.isBellShown = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleNotification, toggleNotificationBell } = Notification_State.actions;

export default Notification_State.reducer;
