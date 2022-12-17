import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountAddress: "",
  signature:"",
  user:{
    email:"",
    password:"",
    username:""
  }
  
};

export const metamask_state = createSlice({
  name: "connectWalletModal_State",
  initialState,
  reducers: {
    metamaskCred: (state, action) => {
      state.accountAddress = action.payload;
    },
    metamaskSignature: (state, action) => {
      state.signature = action.payload;
    },
    userInfo:(state, action)=>{
      state.user = {...state.user,email:action.payload.email,password:action.payload.password,username:action.payload.username}
    }
  },
});

// Action creators are generated for each case reducer function
export const { metamaskCred,metamaskSignature,userInfo } = metamask_state.actions;

export default metamask_state.reducer;
