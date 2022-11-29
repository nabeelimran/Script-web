import Footer from "components/Footer";
import Navbar from "components/Navbar";
import AllTvChannels from "sections/TvHomepage/AllTvChannels";
import Hero from "sections/TvHomepage/Hero";

function TvHomepage() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 relative z-50">
        <Navbar />
      </div>

      <div className="mb-16 lg:mb-20">
        <Hero />
      </div>

      <div className="mb-16 lg:mb-20">
        <AllTvChannels />
      </div>

      <Footer container="container" />
    </div>
  );
}

export default TvHomepage;
