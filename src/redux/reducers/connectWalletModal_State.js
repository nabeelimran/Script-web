import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  isSignUpModalVisible: false,
  isSignInModalVisible: false,
  isGlassListingModalVisible: false,
  isEmailModal: false,
  isHistoryTableModal: false,
  isPasswordModal: false,
  isEpgModalVisible: false,
  data: {},
  changecurrentVideo: false,
};

export const connectWalletModal_State = createSlice({
  name: "connectWalletModal_State",
  initialState,
  reducers: {
    toggleModalVisibility: (state, action) => {
      console.log("action.payload", action.payload);
      state.isModalVisible = action.payload;
    },
    toggleSignUpModalVisibility: (state, action) => {
      state.isSignUpModalVisible = action.payload;
    },
    toggleSignInModalVisibility: (state, action) => {
      state.isSignInModalVisible = action.payload;
    },
    toggleGlassListingVisibility: (state, action) => {
      state.isGlassListingModalVisible = action.payload;
    },
    toggleHistoryModalVisibility: (state, action) => {
      state.isHistoryTableModal = action.payload;
    },
    toggleEmailModalVisibility: (state, action) => {
      state.isEmailModal = action.payload;
    },
    togglePasswordModalVisibility: (state, action) => {
      state.isPasswordModal = action.payload;
    },
    toggleEpgModalVisibility: (state, action) => {
      state.isEpgModalVisible = action.payload;
    },
    updateEpgData: (state, action) => {
      state.data = action.payload;
    },
    updateCurrentVideo: (state, action) => {
      state.changecurrentVideo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleModalVisibility,
  toggleSignUpModalVisibility,
  toggleSignInModalVisibility,
  toggleGlassListingVisibility,
  toggleHistoryModalVisibility,
  toggleEmailModalVisibility,
  togglePasswordModalVisibility,
  toggleEpgModalVisibility,
  updateEpgData,
  updateCurrentVideo,
} = connectWalletModal_State.actions;

export default connectWalletModal_State.reducer;
