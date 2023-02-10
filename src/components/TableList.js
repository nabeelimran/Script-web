import React from "react";
import { Link } from "react-router-dom";
import { averageFee, hash, age, date } from 'common/helpers/blocks';

function TableList({
  data,
  headings,
  className = "token-stats-table",
  thClassName,
  style,
}) {

  const truncate = 35;

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
          {data.sort((a, b) => b.height - a.height).map((b, rowIndex) => (
            <tr key={b.height}>
              <td>{b.height}</td>
              <td>
                <Link to={`/blocks/${b.height}`} className="hover:text-blue-link">
                  {hash(b, truncate ? truncate : undefined)}
                </Link>
              </td>
              <td className="age" title={date(b)}>{age(b)}</td>
              <td className="fee">{averageFee(b)} Gwei</td>
              <td className="txns">{b.num_txs}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default TableList;
