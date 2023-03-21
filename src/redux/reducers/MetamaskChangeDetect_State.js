import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isMetamaskChangeDetectModal: false
}

export const MetamaskChangeDetect_State = createSlice({
    name: "MetamaskChangeDetect_State",
    initialState,
    reducers: {
        toggleMetamaskChangeDetect: (state, action) => {
            state.isMetamaskChangeDetectModal = action.payload;
        }
    }
})

export const {
    toggleMetamaskChangeDetect
} = MetamaskChangeDetect_State.actions;

export default MetamaskChangeDetect_State.reducer;
