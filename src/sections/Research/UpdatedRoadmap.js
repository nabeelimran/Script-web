import BlubDivider from "components/BlubDivider";
import LinkScroller from "components/LinkScroller";
import ReadMoreCards from "components/ReadMoreCards";
import ScriptDocumentation from "components/ScriptDocumentation";
import Title from "components/Title";
import React, { useEffect, useState }  from "react";
import Api from "services/api";

function UpdatedRoadmap() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getMediumBlogs()
  }, [])
  
  const getMediumBlogs = () => {
    Api.fetchMediumBlog(4).then((res) => {
      if(res && res.isSuccess) {
        setBlogs(res.data);
      }
    })
  }
  
  return (
    <section>
      <div className="container-two">
        <Title className="text-primary font-medium mb-5" variant="24">
          Read more about our roadmap{" "}
          <LinkScroller
            to="/"
            wait={200}
            scrollerOptions={{
              smooth: true,
              offset: -30,
            }}
            id="homepage-roadmap"
            className="text-blue-link"
          >
            HERE
          </LinkScroller>
        </Title>
        {/* <Title className="text-primary font-medium mb-5" variant="20">
          6.2 Updated roadmap
        </Title> */}
        {/* 
        <div className="space-y-16 mb-20">
          <div>
            <Title className="text-primary font-medium mb-4" variant="20">
              Q1 2022:
            </Title>

            <div className="space-y-10">
              <ListIntended
                title="Rental system"
                points={[
                  "A credit system that uses quiz to train renters to understand how STEPN works.",
                  "A matching system in the Marketplace to match renters and sneaker owners based on renters' credit rating.",
                  "A rental system that uses smart contracts to settle the rental agreement.",
                ]}
              />
              <ListIntended
                title="Multi-chain Wallet"
                points={[
                  "Users can deposit and send both Solana and EVM blockchains' assets.",
                ]}
              />
            </div>
          </div>

          <div>
            <Title className="text-primary font-medium mb-4" variant="20">
              Q2 2022:
            </Title>

            <div className="space-y-10">
              <ListIntended
                title="Leaderboard"
                points={[
                  "A PvP Leaderboard linked with Marathon Mode, ranking players, groups of players on the Leaderboard",
                ]}
              />

              <ListIntended
                title="Marathon Mode"
                points={[
                  "A weekly or monthly marathon, users need to pay a registration fee to participat",
                  "Top-ranked players or groups of players will receive PvP rewards.",
                ]}
              />

              <ListIntended
                title="Governance"
                points={[
                  "Users can stake GMT in-app to participate in the governance.",
                ]}
              />
            </div>
          </div>

          <div>
            <Title className="text-primary font-medium mb-4" variant="20">
              Q3 2022:
            </Title>

            <div className="space-y-10">
              <ListIntended
                title="Achievement system"
                points={[
                  "Based on users' activities, the app will issue achievement badges to users. Some of the achievement badges have special in-app perks.",
                  "The achievement badge can be traded in the Marketplace.",
                ]}
              />

              <ListIntended
                title="Quest system"
                points={[
                  "A daily, weekly quest system enables users to earn extra rewards through completing certain tasks.",
                ]}
              />

              <ListIntended
                title="Backgraund Mode"
                points={[
                  "A background mode enables users to earn tokens without actively playing the Solo Mode.",
                ]}
              />
            </div>
          </div>

          <div>
            <Title className="text-primary font-medium mb-4" variant="20">
              Q4 2022:
            </Title>

            <div className="space-y-10">
              <ListIntended
                title="Fiat on/off Ramp"
                points={[
                  "A fiat on and off-ramp to connect non-crypto users to the STEPN app.",
                ]}
              />

              <ListIntended
                title="Social-Fi"
                points={[
                  "STEPN will implement social interaction functions in-app via Location-Based Services (LBS).",
                ]}
              />
            </div>
          </div>
        </div> */}

        <div className="mb-20">
          <BlubDivider container="" />
        </div>

        {/* <div className="space-y-12 mb-20">
          <div>
            <Title className="text-primary font-medium mb-4" variant="20">
              7. Community
            </Title>

            <div className="space-y-3">
              <a
                href="https://twitter.com/script_network"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Twitter" />
              </a>
              <a
                href="https://t.me/scriptnetworkann"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Telegram" />
              </a>
              <a
                href=" https://discord.gg/scriptnetwork"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Discord" />
              </a>
            </div>
          </div>

          <div>
            <Title className="text-primary font-medium mb-4" variant="20">
              8. Appendix
            </Title>

            <div className="space-y-3">
              <a
                href="token.script.tv"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Website" />
              </a>
              <a
                href="https://medium.com/@scriptnetwork"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Medium" />
              </a>
              <a
                href="https://whitepaper.script.tv/"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Whitepapper" />
              </a>
              <a
                href="/"
                className="w-fit block"
                target="_blank"
                rel="noreferrer"
              >
                <BulletPoint point="Linktree" />
              </a>
            </div>
          </div>
        </div> */}

        <div className="mb-20">
          <ScriptDocumentation />
        </div>

        <div>
          <div className="grid grid-cols-[auto_1fr] gap-6 items-center mb-10 lg:mb-16">
            <Title className="font-medium text-primary">Read more</Title>
            <div className="h-[1px] w-full bg-primary"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              blogs && blogs.length > 0 ?
                blogs.map((blog, index) => 
                  <ReadMoreCards key={index} blog={blog} />      
                )
              : null
            }
            {/* <ReadMoreCards />
            <ReadMoreCards />
            <ReadMoreCards />
            <ReadMoreCards /> */}
          </div>
        </div>
      </div>
    </section>
  );

}

export default UpdatedRoadmap;
