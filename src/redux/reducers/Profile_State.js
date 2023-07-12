import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateProfileState: false,
  glasses: [],
  balance:0
};

export const Profile_State = createSlice({
  name: "Profile_State",
  initialState,
  reducers: {
    updateProfileImage: (state, action) => {
      state.updateProfileState = { ...action.payload };
    },
    setGlasses: (state, action) => {
      state.glasses = action.payload;
    },

    fetchBalanceAsync: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { updateProfileImage, setGlasses, fetchBalanceAsync } =
  Profile_State.actions;

export default Profile_State.reducer;
