import { APIPATH } from "../constants/index";
import axios from "axios";

export default class SpaceID {
    static getSIDName(address) {
        return axios.get(`${APIPATH.SIDURL}getName?tld=&address=${address}`);
    }
}