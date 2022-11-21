import React from "react";

function TableList({ data, headings }) {
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
        {data.map((row, rowIndex) => (
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
