import React from "react";
import { Link } from "react-router-dom";
import * as _ from "lodash";
import { truncateMiddle } from 'common/helpers/utils';
import { formatCoin, priceCoin } from 'common/helpers/utils';
import { from, to, fee, value, hash, age, date, type, coins } from 'common/helpers/transactions';
import { TxnTypeText, TxnClasses } from 'common/constants';


const Value = ({ coins, price }) => {
  const isMobile = window.screen.width <= 560;
  return (
    
    <React.Fragment>
  
      <div className="currency scpt">
        {/* {formatCoin(+coins.SCPTWei)} */}
        {isNaN(parseFloat(formatCoin(coins?.scptwei))) ? 0 : formatCoin(coins?.scptwei)}
        {" SCPT"}
        {/* {!isMobile && <div className='price'>{`[\$${priceCoin(coins.scptwei, price['scpt'])} USD]`}</div>} */}
      </div>
      <div className="currency spay">
        {/* {formatCoin(+coins.SPAYWei)} */}
        {isNaN(parseFloat(formatCoin(coins?.spaywei))) ? 0 : formatCoin(coins?.spaywei)}
        {" SPAY"}
        {/* {<div className='price'>{`[\$${priceCoin(coins.SPAYWei, price['spay'])} USD]`}</div>} */}
      </div>
    </React.Fragment>)
}

function TransactionTableList({
  data,
  headings,
  className = "token-stats-table",
  thClassName,
  style,
  account
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
          {
            _.map(data, txn => {
              let source = null;
              source = !account ? 'none' : account.address === from(txn, null, account) ? 'from' : 'to';
              return (
                <tr key={txn.hash}>
                  <td>{type(txn)}</td>
                  <td><Link to={`/txs/${txn.hash}`}>{hash(txn, truncate)}</Link></td>
                  <td>{txn.block_height}</td>
                  <td title={date(txn)}>{age(txn)}</td>
                  <td><Link to={`/account/${from(txn)}`}>{from(txn, 20)}</Link></td>
                  <td>
                    <Link to={`/account/${to(txn, null, account?.address)}`}>{to(txn, 20, account?.address)}</Link>
                  </td>
                  <td><Value coins={coins(txn, account)} /></td>
                </tr>
              )
              
            }) 
          }
        </tbody>
      )}
    </table>
  );
}

export default TransactionTableList;
