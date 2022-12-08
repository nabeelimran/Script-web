import DividerLine from "components/DividerLine";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

const Row = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center justify-between">
      <p className="fs-16px">
        Head to the TV platform{" "}
        <Link to="/" className="text-primary underline">
          here
        </Link>
      </p>

      <div className="flex items-center space-x-2">
        <img src="images/trophy.png" className="h-[16px]" alt="" />
        <p className="fs-16px">30</p>
      </div>

      <div className="rounded bg-[#161616] py-1 px-4 w-full lg:w-auto">
        <p className="fs-16px text-center">0/1 joined to collect 10 rewards</p>
      </div>
    </div>
  );
};

function DailyTasks() {
  return (
    <section className="container">
      <Title className="text-primary font-semibold mb-6">Daily Tasks</Title>

      <DividerLine />

      <div className="py-6">
        <Title variant="24" className="text-primary font-semibold mb-7 lg:mb-3">
          Watch 1 hour of content per day
        </Title>

        <Row />
      </div>

      <DividerLine />

      <div className="py-6">
        <Row />
      </div>
    </section>
  );
}

export default DailyTasks;
