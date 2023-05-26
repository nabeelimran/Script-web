import KeyStatCard from "components/KeyStatCard";
import Title from "components/Title";
import React, { useEffect, useState } from "react";
import Api from "services/api";
import { helper } from "utils/helper";

function KeyStats() {

  const [keyStatsData, setKeyStatsData] = useState({
    earnedReward: 0,
    minutesWatched: 0,
    twitterFollower: 0,
    discordFollower: 0
  })

  const getGlassKeyStatsData = () => {
    Api.getGlassKeyStatsData('home').then((res) => {
      if(res && res.status === 200) {
        setKeyStatsData(res.data.data);
      }
    })
  }

  useEffect(() => {
    getGlassKeyStatsData();
  }, [])

  return (
    <section className="container">
      <div className="mb-10 lg:mb-16">
        <Title>
          <span className="text-primary">Script Glass</span> Key Stats
        </Title>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16">
        <div className="flex items-center justify-center">
          <img
            src="images/tv/glasses.svg"
            className="w-full lg:max-w-[22rem]"
            alt=""
          />
        </div>

        <div className="space-y-6 md:space-y-4">
          <KeyStatCard label="Minutes Watched" value={helper.formatCurrency(keyStatsData.minutesWatched)} />
          <KeyStatCard label="Token Earn for Viewers" value={helper.formatCurrency(keyStatsData.earnedReward)} />
          <KeyStatCard label="Token Burned" />
          <KeyStatCard label="Discord" value={helper.formatCurrency(keyStatsData.discordFollower)}/>
          <KeyStatCard label="Twitter" value={helper.formatCurrency(keyStatsData.twitterFollower)} />
        </div>
      </div>
    </section>
  );
}

export default KeyStats;
