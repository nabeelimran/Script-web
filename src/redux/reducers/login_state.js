import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin:false
  
};

export const login_state = createSlice({
  name: "login_state",
  initialState,
  reducers: {
    isLogin:(state,action)=>{
      state.isLogin=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { isLogin } = login_state.actions;

export default login_state.reducer;
