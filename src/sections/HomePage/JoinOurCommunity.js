import { Icon } from "@iconify/react";
import SocialCard from "components/SocialCard";
import Title from "components/Title";
import React from "react";

function JoinOurCommunity() {
  return (
    <section>
      <div className="container grid md:grid-cols-[.5fr_1fr] lg:grid-cols-[.7fr_1fr] gap-10 lg:gap-14 xl:gap-20 items-start">
        <div>
          <div className="mb-4">
            <Title className="text-white font-bold">
              Join our <span className="text-primary">community</span>
            </Title>
          </div>

          <p className="fs-18px text-white mb-11">
            Be part of a growing community of builders,users, and creators on
            Script tv paving the way for a more interoperable crypto ecosystem.
          </p>

          <div className="bg-primary flex items-center justify-center h-[200px] md:h-[283px] rounded-xl">
            <img src="images/community-image.png" alt="" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <SocialCard
            link=" https://discord.gg/scriptnetwork"
            title="Discord"
            IconComponent={() => <Icon icon="ic:outline-discord" />}
          />
          {/* <SocialCard
            link="https://t.me/scriptnetworkann"
            title="Telegram"
            IconComponent={() => <Icon icon="file-icons:telegram" />}
          /> */}
          <SocialCard
            link="https://twitter.com/script_network"
            title="Twitter"
            IconComponent={() => <Icon icon="mdi:twitter" />}
          />
          <SocialCard
            link="https://medium.com/@scriptnetwork"
            title="Blog"
            IconComponent={() => <Icon icon="bi:medium" />}
          />
          {/* <SocialCard
            link="https://www.facebook.com/scriptnetwork"
            title="Facebook"
            IconComponent={() => <Icon icon="ic:baseline-facebook" />}
          /> */}
          <SocialCard
            link="https://www.instagram.com/script_network/"
            title="Instagram"
            IconComponent={() => <Icon icon="ri:instagram-fill" />}
          />
          <SocialCard
            link="https://github.com/scriptnetwork"
            title="Github"
            IconComponent={() => <Icon icon="mdi:github" />}
          />
        </div>
      </div>
    </section>
  );
}

export default JoinOurCommunity;
