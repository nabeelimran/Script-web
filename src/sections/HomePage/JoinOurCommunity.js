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

          <div className="bg-primary flex items-center justify-center h-[283px] rounded-xl">
            <img src="images/community-image.png" alt="" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <SocialCard
            title="Discord"
            IconComponent={() => <Icon icon="ic:outline-discord" />}
          />
          <SocialCard
            title="Telegram"
            IconComponent={() => <Icon icon="file-icons:telegram" />}
          />
          <SocialCard
            title="Twitter"
            IconComponent={() => <Icon icon="mdi:twitter" />}
          />
          <SocialCard
            title="Blog"
            IconComponent={() => <Icon icon="bi:medium" />}
          />
          <SocialCard
            title="Facebook"
            IconComponent={() => <Icon icon="ic:baseline-facebook" />}
          />
          <SocialCard
            title="Instagram"
            IconComponent={() => <Icon icon="ri:instagram-fill" />}
          />
          <SocialCard
            title="Github"
            IconComponent={() => <Icon icon="mdi:github" />}
          />
        </div>
      </div>
    </section>
  );
}

export default JoinOurCommunity;
