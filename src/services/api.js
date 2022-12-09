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
}