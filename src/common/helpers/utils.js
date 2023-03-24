import _ from "lodash";
import BigNumber from "bignumber.js";

import { WEI } from "common/constants";
import { ethers } from "ethers";

export function truncateMiddle(str, maxLength = 20, separator = "...") {
  if (str && str.length <= 20) return str;

  let diff = maxLength - separator.length;
  let front = Math.ceil(diff / 2);
  let back = Math.floor(diff / 2);
  return str.substr(0, front) + separator + str.substr(str.length - back);
}

export function formatNumber(num, length = 0) {
  return num
    .toFixed(length)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatCurrency(num, length = 2) {
  return "$" + num.toFixed(length).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatCoin(weiAmount, length = 4) {
  return new BigNumber(weiAmount)
    .dividedBy(WEI)
    .decimalPlaces(length)
    .toFormat({
      decimalSeparator: ".",
      groupSeparator: ",",
      groupSize: 3,
    });
}

export function priceCoin(weiAmount, price) {
  // debugger
  return new BigNumber(weiAmount)
    .dividedBy(WEI)
    .multipliedBy(price)
    .decimalPlaces(2)
    .toFormat({
      decimalSeparator: ".",
      groupSeparator: ",",
      groupSize: 3,
    });
}

export function sumCoin(weiAmountA, weiAmountB) {
  return BigNumber.sum(new BigNumber(weiAmountA), new BigNumber(weiAmountB));
}

export function getQueryParam(search, name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export function getSCPT(weiAmount) {
  return new BigNumber(weiAmount).dividedBy(WEI).toFixed();
}

export function getHex(str) {
  var arr1 = [];
  for (var n = 0, l = str.length; n < l; n++) {
    var hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return "0x" + arr1.join("");
}

export const fromWei = (weiAmount) => {
  return ethers.utils.formatEther(weiAmount) || 0;
};
