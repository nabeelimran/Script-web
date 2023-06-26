import { Icon } from "@iconify/react";
import React from "react";
import { helper } from "utils/helper";
import FillBar from "./FillBar";
import Popup from "./Popup";

function GlassPopup({ open, setOpen, selectedGlass, saveDurationRes }) {
  return (
    <>
      <Popup
        open={open}
        setOpen={setOpen}
        className="max-w-[260px] w-full bg-primary py-4 px-8 rounded-lg mx-auto"
      >
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)}>
            <Icon icon="maki:cross" />
          </button>
        </div>
        <img
          src={
            helper.glassImages[
              Math.floor(Math.random() * helper.glassImages.length)
            ]
          }
          className="mx-auto max-w-[70px] w-full mb-5"
          alt=""
        />

        <div className="space-y-2 mb-3">
          <div className="space-y-1 w-full">
            <FillBar
              barColor="#FF0015"
              bgColor="#434242"
              progress={
                selectedGlass.glassId || saveDurationRes.maxEarnableTime
                  ? `${
                      ((selectedGlass
                        ? saveDurationRes?.maxEarnableTime ||
                          selectedGlass?.glass?.maxEarnableTime ||
                          0
                        : 0) /
                        (selectedGlass?.glass?.maxEarnableTime || 0)) *
                      100
                    }%`
                  : "0%"
              }
            />
            <p className="text-center font-medium text-sm text-black">
              {selectedGlass
                ? saveDurationRes?.maxEarnableTime ||
                  selectedGlass?.glass?.maxEarnableTime ||
                  0
                : 0}{" "}
              / {selectedGlass?.glass?.maxEarnableTime || 0}
            </p>
          </div>
          <div className="space-y-1 w-full">
            <FillBar barColor="#3C58EE" bgColor="#434242" />
            <p className="text-center font-medium text-sm text-black">
              Level {selectedGlass?.glass?.level || 0}
            </p>
          </div>
        </div>

        <div className="py-1 px-3 text-center w-fit mx-auto text-xs xl:text-xs bg-black font-medium rounded">
          #{selectedGlass?.glass?.tokenId}
        </div>
      </Popup>
    </>
  );
}

export default GlassPopup;
