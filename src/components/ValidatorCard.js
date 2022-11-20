import React from "react";

function ValidatorCard({ link = "/", title, desc, linkTitle, img }) {
  return (
    <div className="bg-blue-1 py-7 px-6 sm:px-8 xl:px-11 rounded-3xl flex flex-col sm:flex-row sm:space-x-6 xl:space-x-9 items-center sm:items-stretch text-center sm:text-left space-y-4 sm:space-y-0">
      <div className="flex xl:items-center">
        {img ? (
          <img
            src={img}
            className="min-w-[60px] xl:min-w-[80px] h-[60px] xl:h-[80px] rounded-full"
            alt=""
          />
        ) : (
          <div className="min-w-[60px] xl:min-w-[80px] h-[60px] xl:h-[80px] rounded-full bg-yellowGradient"></div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <p className="text-lg xl:text-2xl font-medium mb-2">{title}</p>
        <div className="flex-1">
          <p className="text-sm xl:text-base font-light">{desc}</p>
        </div>

        {linkTitle && (
          <a
            href={link}
            className="mx-auto sm:mx-0 mt-5 sm:mt-3 text-sm xl:text-base text-primary underline block w-fit cursor-pointer"
          >
            {linkTitle}
          </a>
        )}
      </div>
    </div>
  );
}

export default ValidatorCard;
