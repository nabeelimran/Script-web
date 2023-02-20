import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	updateProfileState: false
};

export const Profile_State = createSlice({
    name: "Profile_State",
    initialState,
    reducers: {
        updateProfileImage: (state, action) => {
            state.updateProfileState = { ...action.payload };
        }
    }
})

export const {
	updateProfileImage
} = Profile_State.actions;

export default Profile_State.reducer;
