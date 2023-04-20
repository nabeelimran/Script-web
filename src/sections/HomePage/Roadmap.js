import RoadmapCard from "components/RoadmapCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import { Icon } from "@iconify/react";
import Title from "components/Title";
SwiperCore.use([Navigation]);

const RoadmapData = [
  {
    title: "Q1",
    year: "2023",
    points: [
      "Platform development and completion",
      "Server implementation and deployment",
      "Initial content partner agreements",
      "Full Script Network Testnet",
      "Content storage protocol launch",
      "Major web3 wallet integrations"
    ],
  },
  {
    title: "Q2",
    year: "2023",
    points: [
      "Video advertising network proprietary layer launch",
      "SCPT token launch",
      "SPAY airdrop + token launch",
      "ScriptGLASS completion and integration",
      "Streaming server configurations and Backup solutions",
      "Mass content upgrades",
      "Development of Connected TV architecture",
      "Implementation of ad serving platform"
    ],
  },
  {
    title: "Q3",
    year: "2023",
    points: [
      "Validator / nodes created – full roll out (staking)",
      "ScriptBUILD community - a network for nodes, developers and creators.",
      "Initial channels and content rolled out on the platform",
      "Further content upgrade, a further 10 channels added",
      "Connected TV beta launch",
      "Full launch of decentralised TV voting protocol"
    ],
  },
  {
    title: "Q4",
    year: "2023",
    points: [
      "Mobile App development (iOS, Android)",
      "Initial content focused live NFT purchasing rollout",
      "Addition of 20 more live channels to Script TV",
      "Script NFT video marketplace launch",
      "dStorage service rollout",
      "User and content partner panel (analytics) build"
    ],
  },
  {
    title: "Q1",
    year: "2024",
    points: [
      "Start of development project for Mobile App (iOS/Android) and CTV (Connected TV)",
      "5 more live channels to Script TV.",
      "Subtitles, transcription added",
      "Ads management – ability for advertisers to create and view data for their ads",
      "Mobile App development (iOS, Android)"
    ],
  },
  {
    title: "Q2",
    year: "2024",
    points: [
      "Mobile App full launch (iOS, Android)",
      "CTV and OTT beta launch",
      "Global brand partnerships and off chain activations for holders through media events"
    ],
  },
  {
    title: "Q3",
    year: "2024",
    points: [
      "Script Build - Bounty Program launch",
      "Voting control on ads and shows - you decide what you watch OTT / CTV / Smart TV -Integration",
      "Private messaging, content communities – engage with other fans of shows and films you specifically watch",
      "Region based specific content launched across the TV network",
      "10 more live channels added to Script TV",
      "ScriptSWAP beta launch - Swap your SPAY tokens for IRL products (ie Cinema tickets)",
      "Video API for content ingestion, transcoding and distribution"
    ],
  },
  {
    title: "Q4",
    year: "2024",
    points: [
      "Direct integration with larger channels and studios into the TV app",
      "Script Studios initial content acquisitions",
      "Rollout of large content partnerships",
      "On-chain global brand integrations"
    ],
  },
  {
    title: "Future",
    year: "2025",
    points: [
      "Brand and Media partnerships for FilmVERSE",
      "Script Studios Originals (Film + TV Series)",
      "IRL larger event activations",
    ],
  },
];

function Roadmap() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <section>
      <div className="container">
        <div className="mb-8">
          <div>
            <Title>
              The <span className="text-primary">Roadmap</span>
            </Title>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            ref={prevRef}
            className="disabled:opacity-50 bg-shade-darkest-blue w-10 h-10 flex items-center justify-center text-white text-2xl"
          >
            <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
          </button>
          <button
            ref={nextRef}
            className="disabled:opacity-50 bg-shade-darkest-blue w-10 h-10 flex items-center justify-center text-white text-2xl"
          >
            <Icon
              icon="material-symbols:arrow-back-ios-new-rounded"
              rotate={2}
            />
          </button>
        </div>

        <div className="mt-12">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              100: {
                slidesPerView: 1,
              },
            }}
          >
            {RoadmapData.map((data, index) => (
              <SwiperSlide key={index}>
                <RoadmapCard
                  title={data.title}
                  year={data.year}
                  point={data.points}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
