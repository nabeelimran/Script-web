import axios from "axios";
import { APIPATH } from "../constants/index";

export default class ExplorerService {
  static getTopBlocks(pageNo, pageLimit) {
    return axios
      .get(
        `${APIPATH.EXPLORERURL}blocks/top_blocks?pageNumber=${pageNo}&limit=${pageLimit}`
      )
      .then((res) => res.data);
  }

  static getTransactions(pageNo, pageLimit) {
    return axios
      .get(
        `${APIPATH.EXPLORERURL}transactions/range?pageNumber=${pageNo}&limit=${pageLimit}`
      )
      .then((res) => res.data);
  }

  static getStaking() {
    return axios.get(`${APIPATH.EXPLORERURL}stake/all`).then((res) => res.data);
  }

  static getStakeTotalHolderAddress() {
    return axios.get(`${APIPATH.EXPLORERURL}stake/totalHolderAdds`).then((res) => res.data);
  }

  static getOneDayTransactionsCount() {
    return axios.get(`${APIPATH.EXPLORERURL}transactions/number/24`).then((res) => res.data);
  }

  static getOneDayBlocksCount() {
    return axios.get(`${APIPATH.EXPLORERURL}blocks/number/24`).then((res) => res.data);
  }

  static getOnChainWalletCount() {
    return axios.get(`${APIPATH.EXPLORERURL}account/total/number`).then((res) => res.data);
  }

  static getDailyActiveWalletCount() {
    return axios.get(`${APIPATH.EXPLORERURL}activeAccount/latest`).then((res) => res.data);
  }

  static getTotalLightningNode() {
    return axios.get(`${APIPATH.EXPLORERURL}stake/totalGcpValue`).then((res) => res.data);
  }

  static getTotalValidatorNode() {
    return axios.get(`${APIPATH.EXPLORERURL}stake/totalVcpValue`).then((res) => res.data);
  }

  static getTransactionHistory() {
    return axios.get(`${APIPATH.EXPLORERURL}transactions/history`).then((res) => res.data);
  }

}
