import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	updateRewardPointState: false,
    totalRewardPoint:0,
};

export const RewardPoint_State = createSlice({
    name: "RewardPoint_State",
    initialState,
    reducers: {
        updateRewardPoint: (state, action) => {
            state.updateRewardPointState = { ...action.payload };
        },
        setRewardPoints: (state, action) => {
            state.totalRewardPoint = action.payload;
        }
    }
})

export const {
	updateRewardPoint,setRewardPoints
} = RewardPoint_State.actions;

export default RewardPoint_State.reducer;
