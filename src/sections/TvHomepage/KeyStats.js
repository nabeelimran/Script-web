import KeyStatCard from "components/KeyStatCard";
import Title from "components/Title";
import React from "react";

function KeyStats() {
  return (
    <section className="container">
      <div className="mb-16">
        <Title>
          <span className="text-primary">Script Glass</span> Key Stats
        </Title>
      </div>

      <div className="grid grid-cols-2 items-center gap-16">
        <div className="flex items-center justify-center">
          <img
            src="images/tv/glasses.svg"
            className="w-full max-w-[22rem]"
            alt=""
          />
        </div>

        <div className="space-y-4">
          <KeyStatCard label="Minutes Watched" />
          <KeyStatCard label="Token Earn for Viewers" />
          <KeyStatCard label="Token Burned" />
          <KeyStatCard label="Discord" />
          <KeyStatCard label="Twitter" />
        </div>
      </div>
    </section>
  );
}

export default KeyStats;
