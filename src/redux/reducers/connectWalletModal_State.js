import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
};

export const connectWalletModal_State = createSlice({
  name: "connectWalletModal_State",
  initialState,
  reducers: {
    toggleModalVisibility: (state, action) => {
      state.isModalVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModalVisibility } = connectWalletModal_State.actions;

export default connectWalletModal_State.reducer;
