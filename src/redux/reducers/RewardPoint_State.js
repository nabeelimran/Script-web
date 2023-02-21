import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	updateRewardPointState: false
};

export const RewardPoint_State = createSlice({
    name: "RewardPoint_State",
    initialState,
    reducers: {
        updateRewardPoint: (state, action) => {
            state.updateRewardPointState = { ...action.payload };
        }
    }
})

export const {
	updateRewardPoint
} = RewardPoint_State.actions;

export default RewardPoint_State.reducer;
