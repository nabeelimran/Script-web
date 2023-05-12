import Title from "components/Title";
import React from "react";

function ChannelsFree() {
  return (
    <section>
      <div className="container">
        <div className="bg-blue-link py-6 md:py-14 rounded-lg md:rounded-2xl text-center px-8">
          <div className="space-y-1 mb-4 md:mb-6">
            <Title variant="44">100s of hours of films and tv shows</Title>
            <Title variant="44">
              <span className="text-primary">100% Free</span>
            </Title>
          </div>

          <p className="text-sm md:text-base xl:text-xl max-w-[40rem] mx-auto">
            Drop in to over 100 of hit movies, binge- worthy TV shows, cartoons,
            sports and more. Anytime, always for free.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChannelsFree;
