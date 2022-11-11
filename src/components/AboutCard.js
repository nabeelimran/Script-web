import React from "react";

function AboutCard({ title, desc }) {
  return (
    <div className="bg-darkBlue py-8 px-6 sm:px-10 rounded-2xl text-center">
      <h1 className="mb-5 md:mb-8 text-primary text-3xl lg:text-4xl xl:text-90px font-semibold leading-1">
        {title}
      </h1>

      <p className="text-white opacity-80 text-center text-base xl:text-lg">
        {desc}
      </p>
    </div>
  );
}

export default AboutCard;
