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
              <th className={thClassName}>{heading}</th>
            ))}
          </tr>
        </thead>
      )}

      {data && (
        <tbody>
          {data.map((row, rowIndex) => (
            <tr>
              {row.map((item, i) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default TableList;
