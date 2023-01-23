import React from "react";

function TableList({
  data,
  headings,
  className = "token-stats-table",
  thClassName,
  style,
}) {
  return (
    <table style={style} className={className}>
      {headings && (
        <thead>
          <tr>
            {headings.map((heading, i) => (
              <th className={thClassName} key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
      )}

      {data && (
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, i) => (
                <td key={i}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default TableList;
