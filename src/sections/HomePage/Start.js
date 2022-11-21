import { Icon } from "@iconify/react";
import ArrowButton from "components/ArrowButton";
import React from "react";

function Start() {
  return (
    <section>
      <div className="container grid md:grid-cols-[.8fr_1fr] gap-8 md:gap-20">
        <div className="border-b-2 border-primary pb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold">
            <span className="text-primary">Start in</span> Seconds
          </h1>
        </div>
        <div>
          <p className="fs-18px text-white font-medium mb-4 md:mb-5 xl:mb-8">
            Head to our app, sign up, and start watching tv with rewards within
            seconds.
          </p>
          <p className="fs-18px text-white font-medium mb-6 xl:mb-10">
            Connect with others, complete achievements, upgrade your ScriptGLASS
            NFTs and more!
          </p>

          <a
            href="/"
            className="w-fit fs-16px flex items-center space-x-2 mb-8 xl:mb-12"
          >
            <span className="text-primary underline">Learn how to start</span>
            <Icon icon="material-symbols:arrow-outward" />
          </a>

          <ArrowButton label="Launch App" variant={1} />
        </div>
      </div>
    </section>
  );
}

export default Start;
