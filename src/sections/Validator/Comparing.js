import Title from "components/Title";
import React from "react";

function Comparing() {
  return (
    <section>
      <div className="container">
        <div className="mb-10 lg:mb-16">
          <Title>
            Comparing To Other <span className="text-primary">Blockchains</span>
          </Title>
        </div>

        <div className="overflow-x-auto rounded-3xl">
          <table className="validator-table">
            <thead>
              <tr>
                <th></th>
                <th>Bitcoin</th>
                <th>Ethereum</th>
                <th>Polkadot</th>
                <th>
                  <img
                    src="images/logo-black.svg"
                    className="max-w-[135px]"
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transactional Throughput</td>
                <td>5</td>
                <td>13</td>
                <td>166</td>
                <td>1000+</td>
              </tr>

              <tr>
                <td>Transactional Finality</td>
                <td>10 Min</td>
                <td>5 Min</td>
                <td>2 Min</td>
                <td>2 Sec</td>
              </tr>

              <tr>
                <td>Energy Efficient</td>
                <td>No ASIC-Optimal</td>
                <td>No No GPU- Optimal</td>
                <td>Yes CPU- Optimal</td>
                <td>Yes CPU-Optimal</td>
              </tr>

              <tr>
                <td>Number Of Validators</td>
                <td>3 Pools w/51% hash rate</td>
                <td>2 Pools w/51% hash rate</td>
                <td> 200 nodes relay chain</td>
                <td>10-15 nodes</td>
              </tr>

              <tr>
                <td>Sybil Protection</td>
                <td>Proof of work</td>
                <td>Proof of stake</td>
                <td>Proof of stake</td>
                <td>Proof of stake</td>
              </tr>

              <tr>
                <td>Storage Ability/Content</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
              </tr>

              <tr>
                <td>Safety Threshold</td>
                <td>51%</td>
                <td>51%</td>
                <td>51%</td>
                <td>80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Comparing;
