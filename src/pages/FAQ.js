import Accordion from "components/Accordion";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ScriptDocumentation from "components/ScriptDocumentation";
import Title from "components/Title";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const faqs = [
  {
    question: "What is Script tv?",
    content:
      "Script TV is 24/7 television, on blockchain, for free. Watch thousands of hours of content, engage with the community, earn rewards and tokens, and benefit from live off chain opportunities. We are redefining television one step at a time.",
  },
  {
    question: "Which blockchain is Script Tv on?",
    content:
      "Script TV is built on our own blockchain (Script Blockchain). Built to scale, both vertically and horizontally. The best part is as the network grows, the platform (literally), gets stronger!",
  },
  {
    question: "What makes this app unique?",
    content:
      "Script TV is the first linear television platform on blockchain. That means you can watch films, tv series and more on our original channels, 24/7, at no cost, and get paid for doing so. Beyond this, we are the first to allow users to interact with content partners, earn off chain rewards, all on one platform.",
  },
  {
    question: "How much can i earn staking?",
    content:
      "This depends on various factors. To estimate your earnings however, head to our calculator tool <a href='https://token.script.tv/calculator/'>here</a>",
  },
  {
    question: "I want to become a validatior or lighting node, what do i do?",
    content:
      "Firstly, please ensure you fit the requirements of token allocation and system requirements, this information can be found on our token page. Then, fill in the validator / lightning node sign up form here. You will then be contacted by one of the team via email to progress.",
  },
  {
    question: "How can i take part in the parsale or early rounds?",
    content:
      "Initially, it will be available on Uniswap on launch, but it will soon expand to multiple exchanges. Further details will be shared on our social pages.",
  },
  {
    question:
      "Why would a content partner want to partner with script network?",
    content:
      "Script Network is eliminating the need for any middle men in the industry. With our decentralised protocols, frustrating common issues in the industry like content storage, payments and data are all distributed automatically, without disruption. Besides this, blockchain brings an end to the unnecessary red tape in regards to transparency, immutability and traceability.",
  },
  {
    question: "After listing, where can i buy SCPT or SPAY tokens?",
    content:
      "Initially, it will be available on Uniswap on launch, but it will soon expand to multiple exchanges, including our own.",
  },
  {
    question: "What is the vision of Script Network? ",
    content:
      "The vision for Script Network is to be the web3 answer to film and television. Using our bespoke protocols, industry experience and original features, we aim to also change the long standing narrative of the television and film experience through a platform.",
  },
  {
    question:
      "Where is the best place to stay up to date and in touch with the community?",
    content:
      "We recommend you to join the telegram announcements channel <a href='https://t.me/scriptnetwork' target='_blank'>here</a> – for up to date information on what is happening, or the discord <a href='https://discord.gg/tC26m3cTWu' target='_blank'>here</a> where you can interact with the community and the team.",
  },
  {
    question: "Where can I view the whitepaper and the tokenomics?",
    content:
      "You can view the tokenomics <a href='<?= get_template_directory_uri()?>/image-assets/Script WP JAN2022.pdf' target='_blank'>here</a>, and for the whitepaper, <a href='<?= get_template_directory_uri()?>/image-assets/Script WP JAN2022.pdf' target='_blank'>click here</a>.",
  },
  {
    question: "Why are there two different tokens?",
    content:
      "In order to ensure the network security, scalability and stability of the network, the token economy of Script Network is based on two tokens: <ul> <li class='text-black'>SCRIPT (ticker: SCPT), used for staking and network managing</li> <li class='text-black'>SPAY (ticker: SPAY), which actually is used as a gas for Script blockchain, alongside support for all transactions including payments for sharing a video stream, interacting with smart contracts, NFT transaction fees and more</li> </ul>",
  },
  {
    question: "I want to partner with Script Network, how can i get in conact?",
    content:
      "Please email <a href='mailto:hello@script.tv'>hello@script.tv</a> or use the form on the <a href='mailto:hello@script.tv'>contact us page</a>.",
  },
  {
    question: "How will NFTs be implemented into a TV platfrom?",
    content:
      "This will be through live feed access, an original layer onto our platform which allows NFTs to be auctioned and traded in real time, during shows being aired on the platform. Besides this, there will be a marketplace where legacy NFTs can be traded. Significantly, Script NFTs will bring multiple benefits including unlocking exclusive content / rewards on chain and staking the NFTs for SPAY tokens",
  },
  {
    question: "I want to run a lighting node, how can i do this?",
    content:
      "If you’d like to run a node, please fill out the form here (link to the form)",
  },
  {
    question:
      "Does running a lighting node require hardware, or a high spec PC?",
    content:
      "Not at all, only basic system requirements used to run most PC apps is required to run a node on our network. No additional hardware is required.",
  },
  {
    question: "What type of blockchain is Script Network?",
    content: "Script Network is a Proof of Stake (PoS) blockchain.",
  },
  {
    question: "I want to invest in Script Network, ow do I go about this?",
    content:
      "Please register by going to the form here (link to it), and filling it in.",
  },
  {
    question: "Where can I buy SCPT tokens?",
    content:
      "They are not yet launched, but will be announced where and when they can be purchased in due course.",
  },
  {
    question: "How do you gain rewards on Script Network?",
    content:
      "Rewards can be accrued in three ways on the network <br /> - Running a node <br> - Watching content <br> - Completing challenges <br> All of these methods have their own unique value accrual process and is written in more detail in our documentation.",
  },
  {
    question: "Why is there two different types of tokens?",
    content:
      "The two tokens have two different use cases. <br /> SCPT: For Governance, Staking and Advertising.SPAY: For transactions, Trading / upgrading your NFTs, and rewards",
  },
  {
    question:
      "I have ab idea to run dApp to run on Script Network. How can I get started?",
    content:
      "Script Network will have a rolling fund for support through grants and opportunities through our ecosystem. Please contact us through discord for more info",
  },
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
            Question?we have answers!
          </Title>
        </div>
      </div>

      <div className="mb-16 lg:mb-20">
        <div className="container grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <div className="grid gap-4 lg:gap-6">
            {leftFAQ.map((item, i) => (
              <Accordion title={item.question}>
                {ReactHtmlParser(item.content)}
              </Accordion>
            ))}
          </div>
          <div className="grid gap-4 lg:gap-6">
            {RightFAQ.map((item, i) => (
              <Accordion title={item.question}>
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
