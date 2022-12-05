import Footer from "components/Footer";
import Navbar from "components/Navbar";
import TableList from "components/TableList";
import Title from "components/Title";
import React from "react";

function AccountDetails() {
  return (
    <div className="relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <Navbar />
      </div>

      <main className="flex-1 container">
        <section className="mb-16 lg:mb-20">
          <Title
            variant="24"
            className="font-bold text-center text-primary mb-6 lg:mb-10"
          >
            Account Details
          </Title>

          <div className="overflow-x-auto">
            <table
              style={{ "--highlightedColor": "#242432" }}
              className="stake-nodes-table dividerLine min-w-[800px] lg:min-w-full rounded-lg"
            >
              <thead>
                <tr>
                  <th className="lineNone">
                    <span className="text-sm md:text-base xl:text-lg">
                      Address
                    </span>
                  </th>
                  <th>
                    <span className="text-sm md:text-base xl:text-lg">
                      0x98fd878cd2267577ea6ac47bcb5ff4dd97d2f9e5
                    </span>
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="lineNone">Balance</td>
                  <td>948,739,784 $SCPT</td>
                  <td>5,049,261,623.7012 $SPAY</td>
                </tr>
                <tr>
                  <td className="lineNone">Sequence</td>
                  <td>35</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16 lg:mb-20">
          <Title
            variant="24"
            className="font-bold text-center text-primary mb-6 lg:mb-10"
          >
            Tokens Staked by this address toValidator/Lightning Nodes
          </Title>

          <div className="overflow-x-auto">
            <TableList
              style={{ "--highlightedColor": "#242432" }}
              className="stake-nodes-table evenBg min-w-[740px] lg:min-w-full rounded-lg"
              thClassName="uppercase"
              headings={["Node Type", "tokrns staked", "to node", "status"]}
              data={[
                [
                  "Validator",
                  "50,000,000 $SCPT",
                  "0x98fd878cd2267577ea6ac47bcb5ff423123",
                  "Staked",
                ],
                ["", "", "", ""],
                ["", "50,000,000 $SCPT", "", ""],
              ]}
            />
          </div>
        </section>

        <section className="mb-16 lg:mb-20">
          <Title
            variant="24"
            className="font-bold text-center text-primary mb-6 lg:mb-10"
          >
            Tokens Staked to this Node
          </Title>

          <div className="overflow-x-auto">
            <TableList
              style={{ "--highlightedColor": "#242432" }}
              className="stake-nodes-table evenBg min-w-[740px] lg:min-w-full rounded-lg"
              thClassName="uppercase"
              headings={[
                "Node Type",
                "From address",
                "status",
                "tokens staked",
              ]}
              data={[
                [
                  "Validator",
                  "0x98fd878cd2267577ea6ac47bcb5ff4asd2",
                  "",
                  "50,000,000 $SCPT",
                ],
                [
                  "Lightning",
                  "0x98fd878cd2267577ea6ac47bcb5ff42324",
                  "Staked",
                  "50,000 $SCPT",
                ],
                ["", "", "", ""],
                ["", "", "", "50,000,000 $SCPT"],
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AccountDetails;
