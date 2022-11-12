import React from "react";

function AboutCard({ title, desc }) {
  return (
    <div className="bg-darkBlue py-8 px-6 sm:px-10 rounded-2xl text-center relative z-10">
      <h1
        className="mb-5 md:mb-8 text-primary text-3xl lg:text-4xl xl:text-5xl font-semibold"
        style={{ lineHeight: 1 }}
      >
        {title}
      </h1>

      <p className="text-white opacity-80 text-center text-base">{desc}</p>

      <img
        src="images/stripes.png"
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        alt=""
      />
    </div>
  );
}

export default AboutCard;
