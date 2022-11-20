import React from "react";

function SideBySideSection({
  className,
  LeftComponent,
  RightComponent,
  verticalReverseOnMobile = false,
}) {
  return (
    <section
      className={`container grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-28 ${className}`}
    >
      {LeftComponent && <LeftComponent />}
      {RightComponent && <RightComponent />}
    </section>
  );
}

export default SideBySideSection;
