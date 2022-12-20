import { APIPATH } from '../constants/index'
import axios from 'axios';
import {helper} from '../utils/helper';
import LocalServices from './LocalServices';


axios.interceptors.request.use(
    config => {
        const token = LocalServices.getServices("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
  )

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
            `${APIPATH.BASEURL}getAllMediumFeeds?limit=${blogLimit}`, options).then(res => res.data).catch(err=>err.response)
    }


}