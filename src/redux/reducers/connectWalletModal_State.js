import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  isEmailModal:false,
  isPasswordModal:false

};

export const connectWalletModal_State = createSlice({
  name: "connectWalletModal_State",
  initialState,
  reducers: {
    toggleModalVisibility: (state, action) => {
      state.isModalVisible = action.payload;
    },
    toggleEmailModalVisibility:(state,action)=>{
      state.isEmailModal= action.payload
    },
    togglePasswordModalVisibility:(state,action)=>{
      state.isPasswordModal= action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleModalVisibility,toggleEmailModalVisibility,togglePasswordModalVisibility } = connectWalletModal_State.actions;

export default connectWalletModal_State.reducer;
