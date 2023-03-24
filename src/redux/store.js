import { configureStore } from "@reduxjs/toolkit";
import connectWalletModal_State from "./reducers/connectWalletModal_State";
import metamask_state from "./reducers/metamask_state";
import video_State from "./reducers/video_State";
import refresh_state from "./reducers/refresh_state";
import login_state from "./reducers/login_state";
import RewardPoint_State from "./reducers/RewardPoint_State";
import Profile_State from "./reducers/Profile_State";
import MetamaskChangeDetect_State from "./reducers/MetamaskChangeDetect_State";

export const store = configureStore({
  reducer: {
    MetamaskChangeDetect_State: MetamaskChangeDetect_State,
    connectWalletModal_State: connectWalletModal_State,
    metamask_state:metamask_state,
    video_State:video_State,
    refresh_state:refresh_state,
    login_state:login_state,
    RewardPoint_State: RewardPoint_State,
    Profile_State: Profile_State
  },
});
