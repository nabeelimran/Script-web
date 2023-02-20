import Logo from "components/Logo";
import Title from "components/Title";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block w-fit lh-1 text-sm sm:text-base lg:text-base xl:text-lg relative before:content-[''] before:absolute before:top-[105%] before:left-0 before:w-full before:h-[1px] before:transition-all before:duration-200 transition-all duration-200 ${
          isActive
            ? "before:bg-primary text-primary"
            : "bg-transparent text-blue-4"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

function UnlockWalletPageLayout() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-8 md:py-12">
      <div className="container">
        <div className="space-y-5 mb-8 lg:mb-10">
          <div className="flex justify-center">
            <Logo
              variant="yellow"
              imgClassName="w-10 lg:w-14"
              textClassName="text-sm lg:text-lg xl:text-xl lh-1_2 text-primary"
              title={
                <>
                  script <br /> network
                </>
              }
            />
          </div>
          <Title>
            <span className="text-primary">Unlock</span> Your{" "}
            <span className="text-primary">Wallet</span>
          </Title>
        </div>
      </div>

      <div className="bg-shade-dark-blue w-full sm:bg-transparent">
        <div className="container">
          <div className="bg-transparent sm:bg-shade-dark-blue sm:rounded-2xl sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-12 w-full grid lg:grid-cols-2 gap-10 sm:gap-12 xl:gap-16">
            <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2">
              <img src="/images/tv/form-img.png" className="w-full" alt="" />
            </div>
            <div className="pt-2">
              <div className="flex items-center space-x-5 lg:space-x-8 mb-8">
                <ActiveLink to="key-store">Keystore</ActiveLink>
                <ActiveLink to="mnemonics">mnemonics</ActiveLink>
                <ActiveLink to="private-key">Private Key</ActiveLink>
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnlockWalletPageLayout;
