import { APIPATH } from '../constants/index'
import axios from 'axios';

export default class Api {
    static fetchMediumBlog(blogLimit) {
        const options = {
            headers:{
                ipAddress: 'dummyData',
                latitude: 'dummyData',
                longitude: 'dummyData',
                countryName: 'dummyData',
                screenName: 'research'
            }
        }
        return axios.get(
            `${APIPATH.BASEURL}getAllMediumFeeds?limit=${blogLimit}`, options).then(res => res.data);
    }

    static getMarketPrice() {
        return axios.get(`${APIPATH.MARKETURL}?vs_currency=usd&ids=theta-token,theta-fuel&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(res => res.data)
    }

    static getSupplyData() {
        return axios.get(`${APIPATH.EXPLORERURL}supplyData`).then(res => res.data)
    }
}