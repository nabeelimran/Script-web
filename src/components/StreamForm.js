import { Icon } from "@iconify/react";
import React from "react";

function StreamForm() {

  const sendMessage = (e) => {
    e.preventDefault();
  }

  return (
    <form className="flex space-x-4" onSubmit={sendMessage}>
      <div className="h-10 w-full relative bg-shade-grayis rounded-lg overflow-hidden">
        <input
          type="text"
          className="absolute top-0 left-0 w-full h-full z-10 bg-transparent px-4 lh-1 pr-12"
          placeholder="Send Message"
        />

        <button className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-60 text-xl">
          <Icon icon="ic:outline-emoji-emotions" />
        </button>
      </div>

      <button
        type="button"
        className="min-w-[40px] text-primary h-10 rounded-lg bg-shade-grayis flex items-center justify-center"
      >
        <img src="images/tv/send-icon.svg" className="w-[46%]" alt="" />
      </button>
    </form>
  );
}

export default StreamForm;
