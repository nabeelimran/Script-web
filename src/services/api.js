import { APIPATH } from '../constants/index'
import axios from 'axios';

export default class Api {
    static fetchMediumBlog(blogLimit) {
        return axios.get(`${APIPATH}getAllMediumFeeds?limit=${blogLimit}`).then(res => res.data);
    }
}