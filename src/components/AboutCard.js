import React from "react";
import Title from "./Title";

function AboutCard({ title, desc }) {
  return (
    <div className="bg-darkBlue py-8 px-6 sm:px-10 rounded-2xl text-center relative z-10">
      <Title className="mb-5 md:mb-6 text-primary font-bold">{title}</Title>

      <p className="text-white opacity-80 text-center heading-sub">{desc}</p>

      <img
        src="images/stripes.png"
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        alt=""
      />
    </div>
  );
}

export default AboutCard;
