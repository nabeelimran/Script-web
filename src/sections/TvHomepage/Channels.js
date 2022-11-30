import { Icon } from "@iconify/react";
import Button from "components/Button";
import ChannelsRow from "components/ChannelsRow";
import FillBar from "components/FillBar";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const channels = [
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
  {
    id: uuidv4(),
    name: "M.C Escher",
    time: "8:18PM-9:22 PM",
  },
];

const ChannelList = [
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/cultured-one.svg",
    },
    channels,
  },

  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/cultured-two.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/flim-club.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/irl.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/two-much.svg",
    },
    channels,
  },
  {
    channelDetails: {
      id: uuidv4(),
      name: "",
      img: "images/tv/toonmoon.svg",
    },
    channels,
  },
];

function Channels() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center space-x-6 justify-between mb-10">
          <div>
            <img
              src="images/tv/cultured-one.svg"
              className="max-w-[108px]"
              alt=""
            />
          </div>

          <div className="flex items-center space-x-3">
            <Button
              label="Follow"
              variant={4}
              customizationClassName="space-x-2 border-2 border-green px-5 rounded-lg text-green"
              LeftComponent={() => (
                <img
                  src="images/tv/green-heart.svg"
                  className="w-[15px] lh-1"
                  alt=""
                />
              )}
            />
            <Button
              label="203 Earned Total'"
              customizationClassName="bg-green text-black px-6 rounded-lg font-semibold"
              variant={4}
            />
            <Button
              label="4.75 SPAY"
              customizationClassName="bg-green text-black px-6 rounded-lg font-semibold"
              variant={4}
            />
            <Button label="LitpoV6gf" />
          </div>
        </div>

        <div className="flex items-center justify-between mb-16">
          <Button
            customizationClassName="bg-green text-black px-6 rounded-lg font-semibold space-x-3"
            variant={4}
            label={
              <>
                <span className="text-sm text-[inherit] lh-1">
                  Glasses{" "}
                  <span className="text-xs text-[inherit]">#708543</span> <br />
                  Switch
                </span>
              </>
            }
            LeftComponent={() => (
              <img src="images/tv/glasses.svg" className="w-[28px]" alt="" />
            )}
          />

          <Button
            label="Gem Activated"
            variant={4}
            customizationClassName="bg-transprent border-1px border-primary text-white px-4 rounded-lg font-semibold space-x-3"
            RightComponent={() => (
              <img src="images/tv/gem.svg" alt="" className="w-[20px]" />
            )}
          />

          <div className="grid grid-cols-[40px_1fr_40px] max-w-[280px] gap-y-1 w-full">
            <div className="text-sm font-medium text-center">47</div>
            <div className="flex items-center">
              <FillBar />
            </div>
            <div className="text-sm font-medium text-center">100</div>

            <div></div>
            <div className="flex items-center">
              <FillBar barColor="#3C58EE" progress="40%" />
            </div>
            <div></div>

            <div></div>
            <div>
              <p className="text-sm font-medium">Level 01</p>
            </div>
            <div></div>
          </div>

          <Button
            label="Connect Wallet"
            variant={4}
            customizationClassName="bg-primary px-4 rounded-lg text-black font-semibold space-x-2"
            LeftComponent={() => (
              <Icon icon="ri:wallet-3-fill" className="invert text-xl" />
            )}
          />

          <Button
            label="Viewer Dashboard"
            variant={4}
            customizationClassName="bg-primary px-4 rounded-lg text-black font-semibold space-x-2"
            LeftComponent={() => (
              <Icon icon="mdi:view-dashboard" className="invert text-xl" />
            )}
          />
        </div>

        <div className="grid gap-3">
          {ChannelList.map((ch, index) => (
            <ChannelsRow
              channleDetails={ch.channelDetails}
              channels={ch.channels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Channels;
