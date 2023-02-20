import CoreTeamCard from "components/CoreTeamCard";
import Title from "components/Title";
import React from "react";

function CoreTeam() {
  return (
    <section>
      <div className="container-two">
        <Title className="text-primary font-medium mb-8 lg:mb-12" variant="20">
          5. Core Team
        </Title>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-9">
          <CoreTeamCard
            title="Abiel Alazar"
            desc="With close to 15 years of experience in the IT and telecom sector Abiel has been working as an IT specialist at some of the largest firms in Scandinavia like Axians, Tele2, and Advania. He has also consulted
            the ‘Big Four’ banks in the Nordics before changing focus to work more on customer development within Blockchain."
            designation="Co-Founder"
          />
          <CoreTeamCard
            title="Akeem Ojuko"
            desc="an entrepreneur
            and investor, with over ten years
            of experience within content,
            media, and crypto/blockchain technology. He part-owned a sports content company in which he developed, produced, and directed documentaries, sports shows,
            short films, and national adverts
            for companies like Paypal, Nike, Microsoft, JustEat, The FA, and over 20 other tier 1 organisations."
            designation="Co-Founder"
          />
        </div>
      </div>
    </section>
  );
}

export default CoreTeam;
