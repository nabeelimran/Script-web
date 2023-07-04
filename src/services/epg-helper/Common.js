import { channels } from "./Channels";
import { epg } from "./Epg";

export const fetchChannels = async () =>
  new Promise((res) => setTimeout(() => res(channels), 400));

export const fetchEpg = async () =>
  new Promise((res) => setTimeout(() => res(epg), 500));
