import React from "react";
import { Link } from "react-router-dom";
import * as _ from "lodash";
import { formatCoin } from "common/helpers/utils";

function StakeTableList({
  data,
  headings,
  className = "token-stats-table",
  thClassName,
  style,
  type,
  totalStake
}) {

  const truncate = 35;
  const getStakeType = (type) => {
    if(type === 'vcp') {
      return 'Validator';
    }

    if(type === 'gcp') {
      return 'Lightning';
    }

    if(type === 'eenp') {
      return 'Edge';
    }
  }

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
          {data.map((d, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                {type === 'wallet' ? <Link to={`/account/${d.source}`}>{_.truncate(d.source, { length: truncate })}</Link> : <Link to={`/account/${d.holder}`}>{_.truncate(d.holder, { length: truncate })}</Link>}
              </td>
              {type === 'node' && <td>{getStakeType(d.type)}</td>}
              <td>
                {formatCoin(d.amount, 0)}
              </td>
              <td>
                {(d.amount / totalStake * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default StakeTableList;
