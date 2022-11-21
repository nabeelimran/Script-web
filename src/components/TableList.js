import React from "react";

const arr = [
  ["Total Token Supply", "6,000,000,000 GMT"],
  ["Private Sale Allocation", "978,000,000 GMT"],
  ["Private Sale Token Price", "~ 0.005 USD / GMT"],
  ["Private Sale Amount Raised", "~ 5,000,000 USD"],
  ["Binance Launchpad Sale Allocation", "420,000,000 GMT"],
  ["Binance Launchpad Sale Price", "	0.010 USD / GMT"],
  ["Binance Launchpad Amount to be Raised", "4,200,000 USD"],
  ["Initial Circ. Supply When Listed on Binance", "600,000,000 GMT (10.00%)"],
];

const headings = ["Token Name", "GMT"];

function TableList() {
  return (
    <table className="token-stats-table">
      <thead>
        <tr>
          {headings.map((heading, i) => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {arr.map((row, rowIndex) => (
          <tr>
            {row.map((item, i) => (
              <td>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableList;
