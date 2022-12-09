import { configureStore } from "@reduxjs/toolkit";
import connectWalletModal_State from "./reducers/connectWalletModal_State";

export const store = configureStore({
  reducer: {
    connectWalletModal_State: connectWalletModal_State,
  },
});
