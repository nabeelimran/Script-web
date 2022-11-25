import Accordion from "components/Accordion";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Title from "components/Title";
import React from "react";

const faqs = [
  {
    question: "What is Script tv?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "Which blockchain is Script Tv on?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "What makes this app unique?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "How much can i earn staking?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "I want to become a validatior or lighting node, what do i do?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "How can i take part in the parsale or early rounds?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question:
      "Why would a content partner want to partner with script network?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "After kisting, where can i buy SCPT or SPAY tokens?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "What is the vision of Script Network? ",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question:
      "Where is the best place to stay up to date and in touch with the community?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "Where can I view the whitepaper and the tokenomics?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "Why are there two different tokens?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "I want to partner with Script Network, how can i get in conact?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "How will NFTs be implemented into a TV platfrom?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "I want to run a lighting node, how can i do this?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question:
      "Does running a lighting node require hardware, or a high spec PC?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "What type of blockchain is Script Network?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "I want to invest in Script Network, ow do I go about this?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "Where can I buy SCPT tokens?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "How do you gain rewards on Script Network?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question: "Why is there two different types of tokens?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
  },
  {
    question:
      "I have ab idea to run dApp to run on Script Network. How can I get started?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores earum magni animi! Omnis, nostrum odit? Unde aspernatur ratione delectus exercitationem, in ea obcaecati magni quas alias sunt nulla ullam temporibus.",
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
              <Accordion title={item.question}>{item.content}</Accordion>
            ))}
          </div>
          <div className="grid gap-4 lg:gap-6">
            {RightFAQ.map((item, i) => (
              <Accordion title={item.question}>{item.content}</Accordion>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
