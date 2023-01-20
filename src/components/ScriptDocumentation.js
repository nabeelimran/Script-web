import React from "react";
import Button from "./Button";
import Title from "./Title";
import { helper } from "utils/helper";
import Summary from "../files/Summary.pdf";

function ScriptDocumentation() {
  return (
    <div className="bg-[#131313] rounded-3xl p-8 sm:p-10 md:p-14 grid md:grid-cols-[1fr_237px] gap-12">
      <div>
        <Title
          variant="48"
          className="text-left font-medium text-primary mb-5"
          lineHeight={1.2}
        >
          <span className="text-blue-link">Script</span> <br />
          Documentation
        </Title>

        <p className="fs-16px font-medium mb-8">
          Want to know more about how Script Network works? Head to our
          whitepaper for details on our protocol, security, vision, and
          tokenomics.
        </p>

        <div className="flex items-start flex-wrap -mx-2 -my-2">
          <div className="m-2">
            <Button label="Whitepaper" buttonProps={{
              onClick: () => {
                helper.openLink('https://whitepaper.script.tv/')
              },
            }} />
          </div>
          <div className="m-2">
            <Button label="Summary" variant={3} buttonProps={{
              onClick: () => {
                helper.openLink(Summary)
              },
            }}/>
          </div>
          {/* <div className="m-2">
            <Button label="One Pager" variant={3} />
          </div> */}
        </div>
      </div>

      {/* <div className="flex items-end">
        <div className="border-t-2 border-white">
          <img src="images/whitepaper.png" className="w-full" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default ScriptDocumentation;
