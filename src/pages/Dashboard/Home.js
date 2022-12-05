import FillBar from "components/FillBar";
import GemTitle from "components/GemTitle";
import InventoryTradeCard from "components/InventoryTradeCard";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen pb-14">
      <div className="dashboard-top-spacing pb-12 bg-[#18181A] relative z-10 mb-8">
        <div className="dashboard-layout">
          <Title variant="20" className="font-semibold text-center mb-7">
            Welcome Back, Peter
          </Title>

          <div className="space-y-1 mb-12">
            <p className="fs-20px font-medium">
              Welcome to your Script TV dashboard
            </p>
            <p className="text-sm">
              Connect and interact with viewers, and build community around your
              passions.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="py-4 px-5 rounded-lg flex items-center bg-[#5815BA]">
              <div className="flex items-start space-x-3">
                <div className="min-w-[40px] h-[40px] rounded-full bg-white"></div>

                <div className="">
                  <p className="fs-16px font-medium mb-1">Nice Work!</p>
                  <p className="text-sm">
                    You have earned 13.5 SPAY this week!
                  </p>
                </div>
              </div>
            </div>

            <div className="py-4 px-5 rounded-lg bg-[#0E0E0F] flex flex-col">
              <div className="flex items-center space-x-3 flex-1 mb-2">
                <div className="w-[24px] h-[24px] rounded-full bg-white"></div>
                <p className="fs-18px font-semibold">1,232 SPAY</p>
              </div>

              <p className="text-xs mb-2">Get 50 Subscruber</p>
              <FillBar barColor="#FF38DC" progress="90%" bgColor="#A6A6A6" />
            </div>

            <div className="py-4 px-5 rounded-lg bg-[#0E0E0F] flex flex-col">
              <div className="flex items-center space-x-3 flex-1 mb-2">
                <div className="w-[24px] h-[24px] rounded-full bg-white"></div>
                <p className="fs-18px font-semibold">250 SCPT</p>
              </div>

              <p className="text-xs mb-2">Get 5 people Chated Same Time</p>
              <FillBar progress="100%" />
            </div>
          </div>
        </div>

        <img
          src="images/dashboard-home-circles.svg"
          className="absolute bottom-0 left-16 -z-10 w-[180px]"
          alt=""
        />

        <img
          src="images/rectangular-boxes.png"
          className="absolute bottom-4 right-6 -z-10 w-[74px]"
          alt=""
        />
      </div>

      <div className="dashboard-layout mb-12">
        <h1 className="fs-20px font-medium mb-7">My Inventory Trade Here</h1>

        <div className="grid grid-cols-4 gap-4">
          <InventoryTradeCard />
          <InventoryTradeCard />
          <InventoryTradeCard />
          <InventoryTradeCard />
        </div>
      </div>

      <div className="dashboard-layout grid grid-cols-[auto_auto] gap-12 justify-start mb-12">
        <div>
          <p className="fs-18px font-medium mb-6">Milestone Achieved</p>

          <GemTitle title="1.0" />
        </div>

        <div>
          <p className="fs-18px font-medium mb-6">My Gems</p>

          <div className="flex items-center space-x-6">
            <GemTitle title="1.0" />
            <GemTitle title="1.0" gemVariant="white" />
          </div>
        </div>
      </div>

      <div className="dashboard-layout">
        <p className="fs-18px mb-4">Tip Of the Day</p>

        <div className="bg-[#0E0E0F] rounded-lg p-5 relative">
          <div className="w-[70%]">
            <p className="fs-16px mb-2">Be Yourself and have a Fun</p>

            <p className="text-sm mb-2">
              People come to Twich to see you. Try to be yourself, have fun and
              enjoy the process. The biggest advantures satrt with samllest if
              it take time to get your first viwers, its part of the process .{" "}
            </p>

            <Link to="/" className="text-blue-link text-sm">
              What is useful ?
            </Link>
          </div>

          <img
            src="images/lawyer.png"
            className="w-[26%] absolute bottom-0 right-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
