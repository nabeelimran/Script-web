import { configureStore } from "@reduxjs/toolkit";
import connectWalletModal_State from "./reducers/connectWalletModal_State";
import metamask_state from "./reducers/metamask_state";

export const store = configureStore({
  reducer: {
    connectWalletModal_State: connectWalletModal_State,
    metamask_state:metamask_state
  },
});
