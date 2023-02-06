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
}
