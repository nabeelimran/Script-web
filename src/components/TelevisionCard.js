import React from "react";

function TelevisionCard({ title, children, subtitle }) {
  return (
    <div className="bg-televisionGradient pt-10 rounded-t-[20px] flex flex-col overflow-hidden">
      <div className="mb-7 px-14">{title}</div>

      <div className="flex-1 pb-10 px-14">{children}</div>

      <div className="pt-2 centered-cliped bg-primary w-[104%] ml-[-2%] mx-auto">
        <div className="pt-5 pb-3 centered-cliped bg-gray2">
          <p className="text-center text-2xl text-white font-bold">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TelevisionCard;
