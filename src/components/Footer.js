import React from "react";
import FooterLinksSection from "./FooterLinksSection";
import { helper } from "utils/helper";

function Footer({ container = "container-two" }) {
  const footerData = [
    {
      title: "PRODUCTS",
      links: [
        {
          title: "Script TV",
          to: `${helper.generateTokenUrl('')}`,
          target: "_blank",
          anchorTag: true
        },
        { title: "Script Glass", to: "/research" },
        { title: "Marketplace", to: "/marketplace" },
        {
          title: "dStorage",
          to: "https://partners.script.tv/#/partner/theta",
          target: "_blank",
          anchorTag: true
        },
        { title: "Script Blockchain", to: "/node" },
        { title: "sADs", to: "/" }
      ],
    },
    {
      title: "INFORMATION",
      links: [
        {
          title: "Script Network Explained",
          to: `${helper.generateTokenUrl('')}`,
          target: "_blank",
          anchorTag: true
        },
        { title: "Script Tokens", to: "/token" },
        { title: "Calculator", to: "/calculator" },
        { title: "Run a node", to: "/node" },
        // { title: "Technology", to: "/technology" },
        {
          title: "Report Issue",
          to: `${helper.generateTokenUrl('report-issue')}`,
          target: "_blank",
          anchorTag: true
        },
        { title: "Download", to: "/download" },
        {
          title: "Status",
          to: "https://status.script.tv/",
          target: "_blank",
          anchorTag: true
        },
        { title: "How to buy", to: "/how-to-buy" },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          to: " https://discord.gg/scriptnetwork",
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
        // {
        //   title: "Facebook",
        //   to: "https://www.facebook.com/scriptnetwork",
        //   target: "_blank",
        //   anchorTag: true,
        // },
        {
          title: "Instagram",
          to: "https://www.instagram.com/script_network/",
          target: "_blank",
          anchorTag: true,
        },
        {
          title: "Github",
          to: "https://github.com/scriptnetwork",
          target: "_blank",
          anchorTag: true,
        },
        {
          title: "Telegram",
          to: "https://t.me/scriptnetworkann",
          target: "_blank",
          anchorTag: true,
        },
      ],
    },
    {
      title: "TERMS",
      links: [
        { title: "Terms of Service", to: "/terms-and-conditions" },
        { title: "Privacy Policy", to: "/privacy-policy" },
        { title: "Cookies Policy", to: "/cookies-policy" },
      ],
    },
  ];

  return (
    <div className="bg-shade-darkest-blue">
      <div className="py-11">
        <div
          className={`${container} grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_auto] gap-y-8 md:gap-y-0 md:flex justify-between`}
        >
          {footerData.map((data, i) => {
            return (
              <FooterLinksSection
                key={i}
                title={data.title}
                links={data.links}
              />
            );
          })}
        </div>
      </div>

      {/* <div className="border-t-2 border-gray">
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
        </div>

        <p className="text-base xl:text-xl font-medium">
          Copyright © 2022 scripttv
        </p>
      </div> */}
    </div>
  );
}

export default Footer;
