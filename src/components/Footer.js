import React from "react";
import FooterLinksSection from "./FooterLinksSection";

function Footer({ container = "container-two" }) {
  return (
    <div className="bg-shade-darkest-blue">
      <div className="py-11 border-b-2 border-gray">
        <div
          className={`${container} grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_auto] gap-y-8 md:gap-y-0 md:flex justify-between`}
        >
          <FooterLinksSection
            title="PRODUCTS"
            links={[
              { title: "Script TV", to: "" },
              { title: "Script Glass", to: "/research" },
              { title: "Marketplace", to: "" },
              { title: "dStorage", to: "" },
              { title: "Script Blockchain", to: "/validator" },
              { title: "sADs", to: "" },
            ]}
          />
          <FooterLinksSection
            title="How It Works"
            links={[
              { title: "ScriptGLASS explained", to: "/research" },
              { title: "ScriptTV - how to earn", to: "/token" },
            ]}
          />
          <FooterLinksSection
            title="Community"
            links={[
              {
                title: "Discord",
                to: "https://discord.com/invite/hmhdWV6EVK",
                target: "_blank",
                anchorTag: true,
              },
              {
                title: "Telegram",
                to: "https://t.me/+Vu1gbwyoksZORzAG",
                target: "_blank",
                anchorTag: true,
              },
              {
                title: "Twitter",
                to: "https://twitter.com/script_network",
                target: "_blank",
                anchorTag: true,
              },
              {
                title: "Blog",
                to: "https://medium.com/@scriptnetwork",
                target: "_blank",
                anchorTag: true,
              },
              {
                title: "Facebook",
                to: "https://www.facebook.com/scriptnetwork",
                target: "_blank",
                anchorTag: true,
              },
              {
                title: "Inistagram",
                to: "https://www.instagram.com/script_network/",
                target: "_blank",
                anchorTag: true,
              },
              {
                title: "GIthub",
                to: "https://github.com/scriptnetwork",
                target: "_blank",
                anchorTag: true,
              },
            ]}
          />
          <FooterLinksSection
            title="About Script.tv"
            links={[
              { title: "Script TV" },
              { title: "Script Glass" },
              { title: "Marketplace" },
              { title: "dStorage" },
              { title: "Script Blockchain" },
              { title: "sADs" },
            ]}
          />
          <FooterLinksSection
            title="pRIVACY"
            links={[
              { title: "Trams of Service" },
              { title: "Privacy Policy" },
              { title: "Cookies Policy" },
            ]}
          />
        </div>
      </div>

      <div
        className={`${container} py-6 xl:py-8 flex flex-col sm:flex-row space-y-6 sm:space-y-0 items-center justify-between`}
      >
        <div className="flex items-center space-x-6 sm:space-x-10">
          <img src="images/logo.svg" className="w-24 xl:w-32" alt="" />

          <a
            href="mailto:contact@script.tv"
            className="text-base xl:text-lg font-medium"
          >
            contact@script.tv
          </a>
        </div>

        <p className="text-base xl:text-xl font-medium">
          Copyright © 2022 scripttv
        </p>
      </div>
    </div>
  );
}

export default Footer;
