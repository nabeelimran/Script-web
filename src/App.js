import React from "react";
import Navbar from "components/Navbar";
import Hero from "sections/TokenPage/Hero";
import DecentralizedTV from "sections/TokenPage/DecentralizedTV";
import About from "sections/TokenPage/About";
import Footer from "components/Footer";

function App() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Navbar />
      </div>
      <div className="mb-12 lg:mb-20">
        <Hero />
      </div>
      <div className="mb-16 lg:mb-28">
        <DecentralizedTV />
      </div>
      <div className="mb-16 lg:mb-24">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
