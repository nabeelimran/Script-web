import DividerLine from "components/DividerLine";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

const Row = ({ title, score, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center justify-between">
      <p className="fs-16px">{title}</p>

      <div className="flex items-center space-x-2">
        <img src="../images/trophy.png" className="h-[16px]" alt="" />
        <p className="fs-16px">{score}</p>
      </div>

      <div className="rounded bg-[#161616] py-1 px-4 w-full lg:w-auto">
        <p className="fs-16px text-center">{subtitle}</p>
      </div>
    </div>
  );
}; 

const ActiveRow = ({ title, score, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center justify-between">
      <p className="fs-16px">{title}</p>

      <div className="flex items-center space-x-2">
        <img src="../images/trophy.png" className="h-[16px]" alt="" />
        <p className="fs-16px">{score}</p>
      </div>

      <div className='rounded bg-primary py-1 px-4 w-full lg:w-auto'>
        <p className="fs-16px text-center text-black">{subtitle}</p>
      </div>
    </div>
  );
}; 

function DailyTasks() {
  return (
    <section className="container">
      <Title className="text-primary font-semibold mb-6">Daily Tasks</Title>

      <DividerLine />

      <div className="py-4">
        <Title variant="18" className="text-primary font-semibold mb-6 lg:mb-2">
          Watch 1 hour of content per day
        </Title>

        <Row
          score="30"
          subtitle="0/1 joined to collect 10 rewards"
          title={
            <>
              Head to the TV platform{" "}
              <Link to="/" className="text-primary underline">
                here
              </Link>
            </>
          }
        />
      </div>

      <DividerLine />

      <div className="py-4">
        <ActiveRow title="Login Everyday" score="10" subtitle="0/1 completed" />
      </div>

      <DividerLine />

      <div className="py-4">
        <Title variant="18" className="text-primary font-semibold mb-6 lg:mb-2">
          Speak in the live chat room
        </Title>

        <Row score="10" subtitle="0/3 completed" title="available soon" />
      </div>
    </section>
  );
}

export default DailyTasks;
