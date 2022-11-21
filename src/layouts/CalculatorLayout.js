import React from "react";

function CalculatorLayout({ children }) {
  return (
    <section>
      <div className="container-two">
        <div className="bg-shade-dark-blue py-6 xl:py-8 px-8 sm:px-14 xl:px-16 rounded-xl md:rounded-[40px]">
          {children}
        </div>
      </div>
    </section>
  );
}

export default CalculatorLayout;
