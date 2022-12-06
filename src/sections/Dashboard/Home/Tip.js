import React from "react";
import { Link } from "react-router-dom";

function Tip() {
  return (
    <div className="dashboard-layout">
      <p className="fs-18px mb-4 font-medium">Tip Of the Day</p>

      <div className="bg-[#0E0E0F] rounded-lg p-5 relative">
        <img
          src="images/lawyer.png"
          className="w-[120px] sm:w-[180px] lg:w-[26%] absolute top-[-80px] sm:top-[-50px] lg:bottom-0 right-0"
          alt=""
        />

        <div className="sm:w-[70%] lg:w-[70%]">
          <p className="fs-16px mb-2 w-[60%] sm:w-full">
            Be Yourself and have a Fun
          </p>

          <p className="text-xs sm:text-sm mb-2">
            People come to Twich to see you. Try to be yourself, have fun and
            enjoy the process. The biggest advantures satrt with samllest if it
            take time to get your first viwers, its part of the process .{" "}
          </p>

          <Link to="/" className="text-blue-link text-sm">
            What is useful ?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tip;
