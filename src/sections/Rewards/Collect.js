import CollectRewardCard from "components/CollectRewardCard";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

const rewards = [
  { title: "Day 1", score: "+10", active: true },
  { title: "Day 2", score: "+10", active: false },
  { title: "Day 3", score: "+10", active: false },
  { title: "Day 4", score: "+10", active: false },
  { title: "Day 5", score: "+10", active: false },
  { title: "Day 6", score: "+10", active: false },
  { title: "Day 7", score: "+10", active: false },
];

function Collect() {
  return (
    <section className="container">
      <div className="mb-12">
        <Title className="text-primary text-center font-medium mb-2">
          Collect your reward severy day
        </Title>
        <p className="fs-16px text-center">
          Log in 7 days in a row, your rewards will grow
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 lg:gap-6 mb-7">
        {rewards.map((data, i) => (
          <CollectRewardCard key={i} data={data} />
        ))}
      </div>

      <p className="fs-16px">
        What the Script TV Rewards?{" "}
        <Link to="/" className="text-primary underline">
          Read here
        </Link>
      </p>
    </section>
  );
}

export default Collect;
