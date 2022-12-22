import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import CordCutting from "sections/HomePage/CordCutting";
import GreatTeam from "sections/HomePage/GreatTeam";
import Hero from "sections/HomePage/Hero";
import JoinOurCommunity from "sections/HomePage/JoinOurCommunity";
import PartnersSlider from "sections/HomePage/PartnersSlider";
import Roadmap from "sections/HomePage/Roadmap";
import ScriptTVVideo from "sections/HomePage/ScriptTVVideo";
import Start from "sections/HomePage/Start";
import Television from "sections/HomePage/Television";

function HomePage() {
  return (
    <div>
      <div className="relative z-10">
        <img
          src="images/yellow-blob.png"
          className="absolute -top-1/2 -left-[40%] -z-10"
          alt=""
        />

        <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
          <Navbar />
        </div>
        <div className="mb-12 lg:mb-24 z-20">
          <Hero />
        </div>
      </div>
      <div className="mb-20 lg:mb-24">
        <PartnersSlider />
      </div>
      <div className="mb-20 lg:mb-24">
        <CordCutting />
      </div>
      <div className="mb-20 lg:mb-24">
        <Television />
      </div>
      <div className="mb-20 lg:mb-24">
        <ScriptTVVideo />
      </div>
      <div className="mb-20 lg:mb-24">
        <GreatTeam />
      </div>
      <div className="mb-20 lg:mb-24" id="homepage-roadmap">
        <Roadmap />
      </div>
      <div className="mb-20 lg:mb-40" id="homepage-community-section">
        <JoinOurCommunity />
      </div>
      <div className="mb-20 lg:mb-24">
        <Start />
      </div>
      <Footer container="container-two" />

      {/* <div>
        <h2>My Rewards</h2>
        <p>
          Collect Script TV rewards and redeem them for exclusive rewards and
          special offers.
        </p>
        <div>
          <button>Collect Rewards</button>
          <p>History</p>
        </div>

        <div></div>
      </div>

      <div className="mb-12">
        <h2 className="text-center text-5xl mb-3">
          Collect your rewards <br /> every day
        </h2>
        <p className="text-lg mb-3 text-center">
          Log in 7 days in a row, your rewards will grow
        </p>
        <div className="flex">
          <div className="w-[150px] text-center bg-[#ffef00] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg text-black">Day 1</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg text-black">+10</p>
          </div>
          <div className="w-[150px] text-center bg-[#161616] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg">Day 2</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg">+10</p>
          </div>
          <div className="w-[150px] text-center bg-[#161616] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg">Day 3</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg">+10</p>
          </div>
          <div className="w-[150px] text-center bg-[#161616] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg">Day 4</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg">+10</p>
          </div>
          <div className="w-[150px] text-center bg-[#161616] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg">Day 5</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg">+10</p>
          </div>
          <div className="w-[150px] text-center bg-[#161616] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg">Day 6</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg">+10</p>
          </div>
          <div className="w-[150px] text-center bg-[#161616] py-3 rounded-lg mx-3">
            <p className="mb-4 text-lg">Day 7</p>
            <img src="images/trophy.png" alt="" className="w-[40%] mx-auto" />
            <p className="text-lg">+10</p>
          </div>
        </div>
        <p className="ml-5 mt-5 text-lg">
          What are Script TV Rewards?{" "}
          <a href="#" className="text-[#ffef00]">
            Read here
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-5xl border-b border-[#363636] pb-3">Daily Tasks</h2>

        <div className="flex justify-between py-3 border-b border-[#363636]">
          <div className="pl-3">
            <h6 className="text-xl">Watch 1 hour of content per day</h6>
            <p>
              Head to the TV platform{" "}
              <a href="#" className="text-[#ffef00]">
                here
              </a>
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center w-[25%]">
              <img src="images/trophy.png" alt="" className="w-1/4 mr-1" />
              <span className="text-xl">30</span>
            </div>
            <button className="bg-[#161616] py-3 px-4 rounded text-lg block">
              0/1 joined to collect 10 rewards
            </button>
          </div>
        </div>

        <div className="flex justify-between py-3 border-b border-[#363636]">
          <div className="pl-3">
            <h6 className="text-xl">Login Everyday</h6>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center w-[25%]">
              <img src="images/trophy.png" alt="" className="w-1/4 mr-1" />
              <span className="text-xl">10</span>
            </div>
            <button className="bg-[#161616] py-3 px-4 rounded text-lg block">
              0/1 completed
            </button>
          </div>
        </div>

        <div className="flex justify-between py-3 border-b border-[#363636]">
          <div className="pl-3">
            <h6 className="text-xl">Speak in the Live chat room</h6>
            <p>Available soon</p>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center w-[25%]">
              <img src="images/trophy.png" alt="" className="w-1/4 mr-1" />
              <span className="text-xl">10</span>
            </div>
            <button className="bg-[#161616] py-3 px-4 rounded text-lg block">
              0/3 completed
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
