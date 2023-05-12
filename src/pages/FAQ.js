import Accordion from "components/Accordion";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ScriptDocumentation from "components/ScriptDocumentation";
import Title from "components/Title";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import ScriptWPJAN2022 from "../files/ScriptWPJAN2022.pdf";

const faqs = [
  {
    question: "What is Script tv?",
    content:
      "Script TV is 24/7 television, built on Script blockchain, for free. Watch hundreds of hours of content, engage with the community, earn rewards and tokens, and benefit from live off chain opportunities. We are redefining television, one step at a time.",
  },
  {
    question: "Which blockchain is Script Tv on?",
    content:
      "Script TV is built on Script blockchain. The goal of Script Network is to onboard the next 1 billion watchers of content to web3, whilst also providing a house for hundreds of thousands of filmmakers and studios to build using blockchain, with ease. The best part is as the network grows, the platform (literally), gets stronger!",
  },
  {
    question: "What makes this app unique?",
    content:
      "There are multiple aspects, but here are some: <br/> - Script TV are the first linear television platform on blockchain. That means you can watch films, tv series and more, on Script TV original channels, 24/7, at no cost, whilst earning rewards for doing so. This is the first in TV. <br/> -Content layer NFTs. For the first time ever, claim, buy and get rewarded based on spontaneous releases of NFTs during shows / films being aired. This unlocks an entirely different opportunity for holders and owners long term. <br/> - Beyond this, users are able to interact with each other, create content clubs, and yield further benefits from being part of groups.",
  },
  {
    question: "How much can i earn staking?",
    content:
      "This depends on various factors, but fortunately, we have made it easy for you to estimate this, through our staking calculator. This can be found on the footer of the token website. <br/> <br/> I am confused on how to take part in testnet, what do I do? We understand for many that’s it’s a totally new experience, so we have written out guides to explain further. Please head <a className='underline' href='https://whitepaper.script.tv/guides/how-to-sign-up-+-sign-in-to-script-tv'>here</a> for further explanation.",
  },
  {
    question: "I want to become a lightning or edge node, what do I do?",
    content:
      "Firstly, you ensure you fit the requirements of token allocation and system minimum quality, then you fill in the validator / lightning sign up form here – You will then be contacted by one of the team via email to progress.",
  },
  {
    question: "How can I take part in the presale or early rounds?",
    content:
      "More information will be relayed in our discord and telegram announcements channel.",
  },
  {
    question:
      "Why would a content partner want to partner with script network?",
    content:
      "Script Network is eliminating the need for any middle men in the industry. With its decentralised protocols, frustrating common issues in the industry like payments and data are all distributed automatically, without any disruption throughout the year. Besides this, blockchain brings an end to the unnecessary red tape in regards to transparency, immutability and traceability. This of course goes without saying that its an opportunity for content partners to gain access to a completely new market, with new distribution opportunities also!",
  },
  {
    question: "After listing, where can i buy SCPT or SPAY tokens?",
    content:
      "More information will be relayed in our discord and telegram announcements channel.",
  },
  {
    question: "What is the vision of Script Network? ",
    content:
      "We have HUGE vision! The main initial focus is to bring linear television onto the blockchain, , alongside leveraging NFTs (from content partners), and handle a critical flaw of other on-demand platforms that simply not allow users to engage with each other, and earn money for the content they are consuming. Script Network plans to increase the adoption of video on blockchain to the wider community, by creating a user experience free from jargon, or difficulty for those new to this technology. Alongside this, we wanted to ensure our platform allows users to get significant benefits, rewards and earnings on the app, in the metaverse and offline. This is just the start.",
  },
  {
    question:
      "Where is the best place to stay up to date and in touch with the community?",
    content:
      "We recommend you to join the discord <a className='underline' href='discord.gg/scriptnetwork' target='_blank'> here </a> for up to date information on what is happening, or the discord here where you can interact with the community and the team. <br/><br/> I want to partner with Script Network, how can I get in contact? Please email <a className='underline' href='https://discord.gg/scriptnetwork' target='_blank'>here</a> – for up to date information on what is happening, or the discord <a className='underline' href='https://t.me/scriptnetworkann' target='_blank'>here</a> or use the form on the contact us page.",
  },
  {
    question: "Where can I view the whitepaper and the tokenomics?",
    content: `You can view the tokenomics and the whitepaper, <a class='underline' href='https://whitepaper.script.tv/script-tokens/scpt'>here</a>`,
  },
  {
    question: "Why are there two different tokens?",
    content:
      "In order to ensure the effective management, security and stability of the network the token economy of Script.TV project based on close interaction of two tokens: <br/> 1.	SCRIPT ($SCPT), used for staking, governance and advertising <br/> 2.	SPAY ($SPAY), which actually is used as a rewards, transactions and upgrading ScriptGLASS. At its core, It is used to support all transactions on the blockchain such as payments for sharing a video stream, interacting with smart contracts, NFT transaction fees, etc.",
  },
  {
    question: "What is ScriptGLASS?",
    content:
      "ScriptGLASS is the NFT collection which is directly integrated to the watch-to-earn protocol within ScriptTV. At least 1 pair of ScriptGLASS must be equipped to watch and earn on a day to day basis. Beyond each glasses being aesthetically unique in color and design, each has a specific rarity which affects how much a users could possibly earn on a day to day basis. When watching content, users will need to re-charge their glasses, upgrade to higher levels (to earn more per day), buy a gem (for multiplier and raffle opportunities), and loot boxes (which is only available to glasses who reach an advanced level). More on this, <a className='underline' href='https://app.gitbook.com/o/LN18V7dIrEWjgaDnQUuI/s/-MbMrlj27fU9Jm3FoLG-/~/changes/EUY2nCJaZgoG3TVnnCYP/spay-tokenomics/scriptglass-explained' target='_blank'>here</a>",
  },
  // {
  //   question: "I want to partner with Script Network, how can i get in conact?",
  //   content:
  //     "Please email <a href='mailto:hello@script.tv'>hello@script.tv</a> or use the form on the <a href='mailto:hello@script.tv'>contact us page</a>.",
  // },
  {
    question: "How will NFTs be implemented into a TV platform?",
    content:
      "This will be through live feed access, an original layer onto our platform which allows NFTs to be auctioned and traded in real time, during shows being aired on the platform. Besides this, there will be a marketplace where legacy NFTs can be shared and traded.",
  },
  // {
  //   question: "I want to run a lighting node, how can i do this?",
  //   content:
  //     "If you’d like to run a node, please fill out the form here (link to the form)",
  // },
  // {
  //   question:
  //     "Does running a lighting node require hardware, or a high spec PC?",
  //   content:
  //     "Not at all, only basic system requirements used to run most PC apps is required to run a node on our network. No additional hardware is required.",
  // },
  // {
  //   question: "What type of blockchain is Script Network?",
  //   content: "Script Network is a Proof of Stake (PoS) blockchain.",
  // },
  // {
  //   question: "I want to invest in Script Network, ow do I go about this?",
  //   content:
  //     "Please register by going to the form here (link to it), and filling it in.",
  // },
  // {
  //   question: "Where can I buy SCPT tokens?",
  //   content:
  //     "They are not yet launched, but will be announced where and when they can be purchased in due course.",
  // },
  // {
  //   question: "How do you gain rewards on Script Network?",
  //   content:
  //     "Rewards can be accrued in three ways on the network <br /> - Running a node <br> - Watching content <br> - Completing challenges <br> All of these methods have their own unique value accrual process and is written in more detail in our documentation.",
  // },
  // {
  //   question: "Why is there two different types of tokens?",
  //   content:
  //     "The two tokens have two different use cases. <br /> SCPT: For Governance, Staking and Advertising.SPAY: For transactions, Trading / upgrading your NFTs, and rewards",
  // },
  // {
  //   question:
  //     "I have ab idea to run dApp to run on Script Network. How can I get started?",
  //   content:
  //     "Script Network will have a rolling fund for support through grants and opportunities through our ecosystem. Please contact us through discord for more info",
  // },
];

const leftFAQ = faqs.slice(0, faqs.length / 2);
const RightFAQ = faqs.slice(faqs.length / 2, faqs.length);

function FAQ() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <Navbar />
      </div>

      <div className="mb-12 lg:mb-16">
        <div className="container">
          <Title variant="44" className="font-semibold text-center">
            Have a question? we have answers!
          </Title>
        </div>
      </div>

      <div className="mb-16 lg:mb-20">
        <div className="container grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <div className="grid gap-4 lg:gap-6">
            {leftFAQ.map((item, i) => (
              <Accordion title={item.question} key={i}>
                {ReactHtmlParser(item.content)}
              </Accordion>
            ))}
          </div>
          <div className="grid gap-4 lg:gap-6">
            {RightFAQ.map((item, i) => (
              <Accordion title={item.question} key={i}>
                {ReactHtmlParser(item.content)}
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16 lg:mb-20">
        <div className="container">
          <ScriptDocumentation />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
