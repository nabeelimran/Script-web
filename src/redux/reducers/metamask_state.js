import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountAddress: "",
  signature:"",
  isOkc:"",
  isTemple: "",
  user:{
    email:"",
    password:"",
    username:"",
    referal:""
  }
  
};

export const metamask_state = createSlice({
  name: "connectWalletModal_State",
  initialState,
  reducers: {
    metamaskCred: (state, action) => {
      state.accountAddress = action.payload;
    },
    setIsOkc: (state, action) => {
      state.isOkc = action.payload;
    },
    setIsTemple: (state, action) => {
      state.isTemple = action.payload;
    },
    metamaskSignature: (state, action) => {
      state.signature = action.payload;
    },
    userInfo:(state, action)=>{
      state.user = {...state.user,email:action.payload.email,password:action.payload.password,username:action.payload.username,referal:action.payload.referal}
    }
  },
});

// Action creators are generated for each case reducer function
export const { metamaskCred,metamaskSignature,userInfo,setIsOkc, setIsTemple } = metamask_state.actions;

export default metamask_state.reducer;
