import { APIPATH } from "../constants/index";
import axios from "axios";
import { helper } from "../utils/helper";
import LocalServices from "./LocalServices";
import * as moment from "moment";
import CryptoService from "./CryptoService";

axios.interceptors.request.use(
  (config) => {
    const token = LocalServices.getServices("token");
    let user = "scriptNetwork";
    let nonce =
      "ff271e44dd667385581151162f7e71d49e2740f6465f929fd948d12d30fd17bb6a9898b848596960555aa1a020888f7be39b65bad9b82c61d988eb0b0545387a";
    let currentDate = `${moment().format("DD/MM/YYYY HH:mm:ss.SSS")}`;
    let rawDigest = String.raw`${currentDate}\n${window.location.origin}\n${user}\n${nonce}\n`;
    let digest = CryptoService.encryptHmacSHA256(rawDigest);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (!config.url.includes(APIPATH.SIDURL)) {
      config.headers["userAuth"] = `HmacSHA512 ${user}:${nonce}:${digest}`;
      config.headers["requestDate"] = currentDate;
      config.headers["url"] = window.location.origin;
    }
    if (
      config.url.includes(APIPATH.NOTIFICATIONURL) ||
      config.url.includes("https://ipfs.io")
    ) {
      console.log("here");
      config.headers.delete("userAuth");
      config.headers.delete("requestDate");
      config.headers.delete("url");
      config.headers.delete("Authorization");
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default class Api {
  static fetchMediumBlog(blogLimit) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: "research",
      },
    };
    return axios
      .get(`${APIPATH.BASEURL}getAllMediumFeeds?limit=${blogLimit}`, options)
      .then((res) => res.data);
  }

  static getMarketPrice() {
    return axios
      .get(
        `${APIPATH.MARKETURL}?vs_currency=usd&ids=theta-token,theta-fuel&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => res.data);
  }

  static getSupplyData() {
    return axios
      .get(`${APIPATH.EXPLORERURL}supplyData`)
      .then((res) => res.data);
  }

  static walletLogin(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}walletRegisterAndLogin`, req, options);
  }

  static solicalLogin(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}socialLogin`, req, options);
  }

  static emailVerification(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}emailVerification`, req, options);
  }
  static resendOtp(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}resendOTP`, req, options);
  }

  static checkUsernameOrEmailExist(email, username, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}checkEmailOrUsernameIsExists?email=${email}&username=${username}`,
      options
    );
  }

  static getUserDetailsByWalletAddress(walletAddress, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getUserDetailsByWalletAddress?walletAddress=${walletAddress}`,
      options
    );
  }

  static getUserDetailByEmailAddress(email, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getUserPrivilegesByUserEmail?emailId=${email}`,
      options
    );
  }
  static getChannels(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}show/details?zoneId=${helper.getTimeZone()}`,
      options
    );
  }
  static getShows(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}live/shows?zoneId=${helper.getTimeZone()}`,
      options
    );
  }

  static getVideoTokenEarned(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}user/token/details?userId=${userId}`,
      options
    );
  }

  static addVideoToken(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}save/user/token`, req, options);
  }

  static saveVideoDuration(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.put(`${APIPATH.BASEURL}save/duration`, req, options);
  }

  static logout(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}logoutUser`, req, options);
  }

  static changePassword(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}changePassword`, req, options);
  }

  static getVideoWatchDuration(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}videoWatchDuration?userId=${userId}`,
      options
    );
  }

  static getLastWatchShowHistory(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}lastVideoHistory?userId=${userId}`,
      options
    );
  }

  static getTwitterPosts(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}getAllTwitterFeeds`, options);
  }

  static viewUserProfile(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}viewuserprofile?id=${userId}`, options);
  }

  static getCountryList(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}getCountries`, options);
  }

  static getCategory(pageNo, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}getCategory?pageNo=${pageNo}`, options);
  }

  static getAllChannels(pageNo, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getAllChannels?page=${pageNo}`,
      options
    );
  }

  static getVideoWatchAnalytics(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.get(
      `${APIPATH.BASEURL}analytic/graph?userId=${userId}`,
      options
    );
  }

  static getVideoWatchAnalyticsByDate(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}analyticByDate/graph?userId=${userId}`,
      options
    );
  }

  static updateProfile(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(
      `${APIPATH.BASEURL}edituserProfile/uploadFile`,
      req,
      options
    );
  }

  static addComment(body, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}addComment`, body, options);
  }

  static getCommentByVideoId(vdoId, pageNo, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getVideoComment?videoId=${vdoId}&pageNo=${pageNo}`,
      options
    );
  }

  static getLeaderboardData(pageNo, pageSize, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getLeaderBoardLists?page=${pageNo}&size=${pageSize}`,
      options
    );
  }

  static getLatestDayReward(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getLatestDayRewardOfUser?userId=${userId}`,
      options
    );
  }

  static collectDailyReward(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}createReward`, req, options);
  }

  static subscribeChannel(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}subscribeChannel`, req, options);
  }

  static getChannelDetailByChannelId(channelId, isOwner, userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getChannelByChannelId?channelId=${channelId}&isOwner=${isOwner}&userId=${userId}`,
      options
    );
  }

  static getPastSchedulingDetails(channelId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getPastSchedulingDetails?channelId=${channelId}`,
      options
    );
  }

  static getSchedulingDetailsByDate(channelId, date, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getSchedulingDetailsByDate?channelId=${channelId}&date=${date}`,
      options
    );
  }

  static getCannelListByCategoryId(categoryId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}channel/details?categoryId=${categoryId}`,
      options
    );
  }

  static reportIssue(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}reportIssue`, req, options);
  }

  static getMyRewardPointTotal(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getMyRewardsTotal?userId=${userId}`,
      options
    );
  }

  static getChatRewardByUserId(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getChatRewardByUserId/${userId}`,
      options
    );
  }

  static saveTokenEarnedByChat(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}saveOrUpdateChatReward`, req, options);
  }

  static getAllUserRewardsData(userId, pageNo, pageSize, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getAllUserRewardsData?userId=${userId}&page=${pageNo}&limit=${pageSize}`,
      options
    );
  }

  static getGlassesList(walletAddress, pageNo, pageSize, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getGlasses?walletAddress=${walletAddress}&page=${pageNo}&size=${pageSize}`,
      options
    );
  }

  static getSpaceIDName(walletAddress) {
    return axios.get(
      `${APIPATH.BASEURL}getNameBySpaceId?walletAddress=${walletAddress}`
    );
  }

  static loginWithSpaceID(req) {
    return axios.post(`${APIPATH.BASEURL}loginWithSpaceId`, req);
  }

  static selectGlass(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}chooseGlass`, req, options);
  }

  static getSelectGlass(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.get(
      `${APIPATH.BASEURL}getUserActiveGlassDetail?userId=${userId}`,
      options
    );
  }

  static startSession(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}startSession`, req, options);
  }

  static endSession(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}closeSession`, req, options);
  }

  static saveIndividualChat(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}saveIndividualChat`, req, options);
  }

  static getIndividualChat(screenName, page) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.get(
      `${APIPATH.BASEURL}getIndividualChats?page=${page}`,
      options
    );
  }

  static updateWalletAddress(userId, walletAddress, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.put(
      `${APIPATH.BASEURL}updateWalletAddress?userId=${userId}&walletAddress=${walletAddress}`,
      {},
      options
    );
  }

  static getNotifications() {
    return axios.get(
      `${APIPATH.NOTIFICATIONURL}/notification/show-notification/0x6B787b16445983197bf4b291016c74363d78979a`
    );
  }

  static getOverAllOrderedToken(walletAddress, screenName = "stfx") {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `https://stagebackend.script.tv/api/v1/getOverallOrderToken`,
      options
    );
  }

  static saveUserVisitNotificationPage(userId) {
    return axios.post(
      `${APIPATH.BASEURL}saveUserNotificationViewHistory/${userId}`,
      {}
    );
  }

  static signupModalApi(data, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}register`, data, options);
  }

  static signinModalApi(data, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}`, data, options);
  }
}
