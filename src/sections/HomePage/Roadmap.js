import RoadmapCard from "components/RoadmapCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import { Icon } from "@iconify/react";
import Title from "components/Title";
SwiperCore.use([Navigation]);

function Roadmap() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <section>
      <div className="container">
        <div className="mb-14 lg:mb-20">
          <div className="mb-5">
            <Title>
              The <span className="text-primary">Roadmap</span>
            </Title>
          </div>

          <p className="heading-sub text-white text-center font-medium mx-auto max-w-[50rem] opacity-50">
            Roadmap items listed below are susceptible to change based on
            dynamics in the market and feedback and proposal from the Gummys TV
            community.
          </p>
        </div>

        <div className="mb-12">
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
            <SwiperSlide>
              <RoadmapCard
                title="Q3"
                year="2022"
                point={[
                  "Mobile Application",
                  "Partnerships",
                  "IceTea Labs (Polygon) incubator program",
                  "Donation, Tips, Advertisements, Voting System, Advanced Moderation",
                  "https://token.script.tv/roadmap/",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <RoadmapCard
                title="Q4"
                year="2022"
                point={[
                  "Fundraising",
                  "Cross-chain support",
                  "Stream-to-Earn Incentives",
                  "Watch-and-Earn Incentives",
                  "User levels",
                  "NFTs sale",
                  "Open Broadcasting Software (OBS) Integration",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapCard
                title="Future"
                year="2025"
                point={[
                  "Token launch",
                  "Defi",
                  "Metaverse integration",
                  "NFT marketplace",
                  "Subscriptions",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapCard
                title="Future"
                year="2025"
                point={[
                  "Token launch",
                  "Defi",
                  "Metaverse integration",
                  "NFT marketplace",
                  "Subscriptions",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoadmapCard
                title="Future"
                year="2025"
                point={[
                  "Token launch",
                  "Defi",
                  "Metaverse integration",
                  "NFT marketplace",
                  "Subscriptions",
                ]}
              />
            </SwiperSlide>
          </Swiper>
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
      </div>
    </section>
  );
}

export default Roadmap;
