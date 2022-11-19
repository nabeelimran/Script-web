import React from "react";
import Marquee from "react-fast-marquee";

function PartnersSlider() {
  return (
    <section>
      <Marquee
        gradient={false}
        className="flex items-center"
        speed={50}
        direction="right"
      >
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/d.png" className="h-6 xl:h-10" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/Do.png" className="h-10 xl:h-14" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/C.png" className="h-8 xl:h-12" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/S.png" className="h-6 xl:h-8" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/SY.png" className="h-6 xl:h-8" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/m.png" className="h-10 xl:h-14" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/U.png" className="h-6 xl:h-10" alt="" />
        </div>
        <div className="flex justify-center mx-4 lg:mx-8">
          <img src="images/partners/G.png" className="h-6 xl:h-10" alt="" />
        </div>
      </Marquee>
    </section>
  );
}

export default PartnersSlider;
