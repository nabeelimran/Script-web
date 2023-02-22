import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	updateProfileState: false,
    glasses:[]
};

export const Profile_State = createSlice({
    name: "Profile_State",
    initialState,
    reducers: {
        updateProfileImage: (state, action) => {
            state.updateProfileState = { ...action.payload };
        },
        setGlasses:(state,action)=>{
            state.glasses = action.payload
        }
    }
})

export const {
	updateProfileImage,setGlasses
} = Profile_State.actions;

export default Profile_State.reducer;
