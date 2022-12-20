import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  isEmailModal:false,
  isPasswordModal:false,
  isEpgModalVisible:false,
  data:{},
  changecurrentVideo:false,
  refreshChannel:false

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
    },
    toggleEpgModalVisibility:(state,action)=>{
      state.isEpgModalVisible=action.payload
    },
    updateEpgData:(state,action)=>{
      state.data=action.payload
    },
    updateCurrentVideo:(state,action)=>{
      state.changecurrentVideo=action.payload;
    },
    refreshChannel:(state,action)=>{
      state.refreshChannel=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleModalVisibility,toggleEmailModalVisibility,togglePasswordModalVisibility ,toggleEpgModalVisibility,updateEpgData,updateCurrentVideo,refreshChannel} = connectWalletModal_State.actions;

export default connectWalletModal_State.reducer;
