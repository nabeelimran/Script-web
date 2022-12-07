import Footer from "components/Footer";
import TvNavbar from "components/TvNavbar";
import AllTvChannels from "sections/TvHomepage/AllTvChannels";
import Channels from "sections/TvHomepage/Channels";
import ChannelsFree from "sections/TvHomepage/ChannelsFree";
import Community from "sections/TvHomepage/Community";
import Hero from "sections/TvHomepage/Hero";
import HowToEarn from "sections/TvHomepage/HowToEarn";
import KeyStats from "sections/TvHomepage/KeyStats";

function TvHomepage() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div>

      <div className="mb-16">
        <Hero />
      </div>

      <div className="mb-16 lg:mb-28">
        <AllTvChannels />
      </div>

      <div className="mb-16 lg:mb-24">
        <Channels />
      </div>

      <div className="mb-16 lg:mb-24">
        <ChannelsFree />
      </div>

      <div className="mb-24 lg:mb-32">
        <HowToEarn />
      </div>

      <div className="mb-24 lg:mb-32">
        <KeyStats />
      </div>

      <div className="mb-16 lg:mb-24">
        <Community />
      </div>

      <Footer container="container" />
    </div>
  );
}

export default TvHomepage;
