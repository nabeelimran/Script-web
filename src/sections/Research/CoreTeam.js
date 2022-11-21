import CoreTeamCard from "components/CoreTeamCard";
import Title from "components/Title";
import React from "react";

function CoreTeam() {
  return (
    <section>
      <div className="container">
        <Title className="text-primary font-medium mb-8 lg:mb-12" variant="24">
          5. Core Team
        </Title>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-9">
          <CoreTeamCard
            title="Abiel Alazar"
            desc="Decades of experience in game
development, operation, and marketing,
Developed several games with top
ranking on the ios app store"
            designation="Co-Founder"
          />
          <CoreTeamCard
            title="Akeem Ojuko"
            desc="Decades of experience in game
development, operation, and marketing,
Developed several games with top
ranking on the ios app store"
            designation="Co-Founder"
          />
          <CoreTeamCard
            title="Jerry Huang"
            desc="Decades of experience in game
development, operation, and marketing,
Developed several games with top
ranking on the ios app store"
            designation="Co-Founder"
          />
        </div>
      </div>
    </section>
  );
}

export default CoreTeam;
