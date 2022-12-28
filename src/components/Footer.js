import React from "react";
import FooterLinksSection from "./FooterLinksSection";

function Footer({ container = "container-two" }) {
  const footerData = [
    {
      title: "PRODUCTS",
      links: [
        { title: "Script TV", to: "/tv" },
        { title: "Script Glass", to: "/research" },
        { title: "Marketplace", to: "/marketplace" },
        { title: "dStorage", to: "/" },
        { title: "Script Blockchain", to: "/node" },
        { title: "sADs", to: "/" },
      ],
    },
    {
      title: "INFORMATION",
      links: [
        { title: "ScriptGLASS Explained", to: "/research" },
        { title: "Script Tokens", to: "/token" },
        { title: "Calculator", to: "/calculator" },
        { title: "Run a node", to: "/node" },
        { title: "FAQ", to: "/faq" },
        { title: "Report Issue", to: "/report-issue" },
      ],
    },
    {
      title: "Community",
      links: [
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
      ],
    },
    {
      title: "TERMS",
      links: [
        { title: "Terms of Service", to: "/terms-condition" },
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
