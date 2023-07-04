import { ToastMessage } from 'components/ToastMessage';
import moment from 'moment'
import LocalServices from 'services/LocalServices';
import MixPanelService from 'services/mixPanelService';
import bell from '../assets/bell.wav';
import { ENV } from 'constants';
import { xmlDataList } from 'assets/xml/xmlData';
import XmlService from 'services/XmlService';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const helper = {
  epgStartDate: () => moment().utcOffset(0).set({hour:0, minute:0, second:0, millisecond:0}),
  epgEndDate: () => moment().utcOffset(0).set({hour:24, minute:0, second:0, millisecond:0}),
  formatLocalDate:(date) => moment(date).format("DD/MM/YYYY"),
  formatLocalTime:(date) => moment.utc(date).format("HH:mm"),
    percentFormat: (num) => num.toFixed(4).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'),
    numberFormat: (num) => num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
    currencyFormat: (num) => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
    openLink: (url) => window.open(url, '_blank'),
    getTimeZone:() => Intl.DateTimeFormat().resolvedOptions().timeZone,
    createTimeSlot:(currentDate) =>{
      const startTime = moment(currentDate.getHours(), 'HH:mm');
      var endTime = moment(currentDate.getHours(), 'HH:mm');
      if (endTime <= startTime) {
        endTime.add(1, 'day');
      }
  
      const timeStops = [];
      if(currentDate.getMinutes()>=30){
        startTime.add(30,'minutes')
      }
      while (startTime <= endTime) {
        timeStops.push(moment(startTime).format('HH:mm'));
        startTime.add(30, 'minutes');
      }
  
      return timeStops;
    },
    osList: [
      {value: 'window', title: 'Window'},
      {value: 'macOS', title: 'macOS'},
      {value: 'linux', title: 'Linux'},
      {value: 'iOS', title: 'iOS'},
      {value: 'android', title: 'Android'},
      {value: 'chromeOS', title: 'ChromeOS'},
      {value: 'ubuntu', title: 'Ubuntu'},
      {value: 'other', title: 'Other'}
    ],
    deviceList: [
      {value: 'desktop', title: 'Desktop'},
      {value: 'laptop', title: 'Laptop'},
      {value: 'iPhone', title: 'Apple iPhone'},
      {value: 'androidPhone', title: 'Android Phone'},
      {value: 'other', title: 'Other'}
    ],
    browserList: [
      {value: 'chrome', title: 'Google Chrome'},
      {value: 'firefox', title: 'Firefox'},
      {value: 'brave', title: 'Brave'},
      {value: 'safari', title: 'Safari'},
      {value: 'microsoft-edge', title: 'Microsoft Edge'},
      {value: 'internet-explorer', title: 'Internet Explorer'},
      {value: 'other', title: 'Other'}
    ],  
    getDiffInMinfromCurrent:(startDate, dateType) => moment(startDate).diff(moment(new Date()), 'minutes'),
    getDiffInMin:(startDate, endDate)=> moment(startDate).diff(moment(endDate), 'minutes'),
    getIn12HoursFormat:(date)=>{
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    },
    getRandomNumber: (size) => {
      const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i = size; i > 0; i--) {
        result += char[Math.round(Math.random() * (char.length - 1))];
      }
      return result;
    },
    formatDate: (date, format) => moment(date).utc().format(format),
    getISOString: () => moment().toISOString(),
    comingSoonNotification: (e) => {
      if(e) {
        e.preventDefault();
      } 
      ToastMessage('Coming Soon') 
    },
    trackByMixpanel: (event, data) => {
      try {
        MixPanelService.track(event, data);  
      } catch (error) {
        console.log(error, `on ${event} event`);
      }
    },
    glassImages: [
      'images/blue-glasses.png',
      'images/yellow-glasses.png',
      'images/green-glasses.png',
      'images/orange-glasses.png'
    ],
    playSound: () => {
      new Audio(bell).play();
    },
    generateTokenUrl: (path) => {
      return `${ENV === 'stage' ? 'https://stagetoken.script.tv/' : 'https://token.script.tv/'}${path}`;
    },
    formatCurrency: (amount) => {
      const formatter = new Intl.NumberFormat('en-US', {
        currency: 'USD',
      });
      
      return formatter.format(amount);
    },
    convertTwoDigit: (minute) => minute && minute.length === 1 ? `0${minute}` : minute
}

export const metamaskNetwork = {
    polygonTestnet: {
      chainName: 'Polygon Testnet',
      rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
      chainId: `0x${Number(80001).toString(16)}`,
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
      },
      blockExplorerUrls: ['https://mumbai-explorer.matic.today/']
    },
    ropstenTestnet: {
      chainName: 'Ropsten Test Network',
      rpcUrls: ['https://ropsten.infura.io/v3/'],
      chainId: `0x${Number(3).toString(16)}`,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://ropsten.etherscan.io']
    },
    ethereumMainnet: {
      chainName: 'Ethereum Mainnet',
      rpcUrls: ['https://mainnet.infura.io/v3/'],
      chainId: `0x${Number(1).toString(16)}`,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://etherscan.io']
    },
    scriptTestnet: {
      chainName: 'Script Testnet',
      rpcUrls: ['https://testeth-rpc-api.script.tv/rpc'],
      chainId: `0x${Number(382).toString(16)}`,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://explorer.script.tv/']
    },
    spaceID: {
      chainName: 'Smart Chain',
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      chainId: `0x${Number(56).toString(16)}`,
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
      },
      blockExplorerUrls: ['https://bscscan.com']
    },
    OKC:{
      chainName: 'OKC',
      rpcUrls: ['https://exchainrpc.okex.org/'],
      chainId: `0x${Number(66).toString(16)}`,
      nativeCurrency: {
        name: 'OKT',
        symbol: 'OKT',
        decimals: 18
      },
      blockExplorerUrls: ['https://www.oklink.com/en/okc']
    },
    bitgret:{
      chainName: 'Bitgert Mainnet',
      rpcUrls: ['https://rpc.icecreamswap.com/'],
      chainId: `0x${Number(32520).toString(16)}`,
      nativeCurrency: {
        name: 'Bitgert Mainnet',
        symbol: 'Brise',
        decimals: 18
      },
      blockExplorerUrls: ['https://brisescan.com']
    }

}

export const STORAGEENUM =  {
  token: "script-token",
  user: "userInfo"
}

export const detectBrowser = () => {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
    return `Opera`;
  }
  else if (navigator.userAgent.indexOf("Chrome") !== -1) {
    return 'Chrome';
  }
  else if (navigator.userAgent.indexOf("Safari") !== -1) {
    return 'Safari';
  }
  else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    return 'Firefox';
  }
  else if ((navigator.userAgent.indexOf("MSIE") !== -1)) {
    return 'IE';
  }
  else {

    return 'unknown';
  }
}

export const isBnbUser = () => {
  const user = LocalServices.getServices('user') || null;
  if(user && user.userName && (user.userName.includes('.bnb') || user.userName.includes('.eth'))) {
    return true;
  }
  return false
};

export const loginTypes = {
  metamask:"METAMASK_SIGNUP",
  wallet:"WALLET_CONNECT",
  bnb:"BNB_SIGNUP",
  okc:"OKC_SIGNUP",
  bitgret:"BITGERT_SIGNUP",
  gmail:"GMAIL_SIGNUP",
  twitter:"TWITTER_SIGNUP",
  temple: "TEMPLE_SIGNUP",
  trust: "TRUST_WALLET_SIGNUP",
  ens: "ENS_SIGNUP"
}

export const updateShowDetails = (channelId) => {
  let result = {};
  if(xmlDataList.filter((file) => file.id === channelId)?.length > 0) {
    const jsonObject = XmlService.parseXmlToJson(xmlDataList.filter((file) => file.id === channelId)[0].xmlData);
    const today = moment();
    const timeInMin = (today.hour() * 60) + today.minute()
    jsonObject.children = jsonObject.children.map((child) => {
      if(child.name === "programme") {
        const startTimestamp = child.attributes.start.split(' ')[0];
        const stopTimestamp = child.attributes.stop.split(' ')[0];
        child.attributes.utcStart = dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ');
        child.attributes.utcStartTime = dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').hour() * 60 + dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').minute();
        child.attributes.utcStartTimeString = `${dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').hour()}:${helper.convertTwoDigit(dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').minute().toString())}`
        child.attributes.utcStop = dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ');
        child.attributes.utcStopTime = (dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').hour() * 60) + dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').minute();
        child.attributes.utcStopTimeString = `${dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').hour()}:${helper.convertTwoDigit(dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').minute().toString())}`
      }
      return child;
    })

    jsonObject.children.forEach((child) => {
      if(child?.name === "programme" && child?.attributes?.utcStartTime <= timeInMin && child.attributes.utcStopTime >= timeInMin) {
        // console.log('ifcondition')
        result.utcStartTimeString = child?.attributes?.utcStartTimeString;
        result.utcStopTimeString = child?.attributes?.utcStopTimeString;
        child?.children.forEach((attr) => {
          if(attr.name === 'title') {
            result.title = attr.value
          }
          if(attr.name === 'desc') {
            result.description = attr.value
          }
          if(attr.name === 'icon') {
            result.videoThumbnailUrl = attr.attributes.src;
          }
        })
      }
    });
    return result.toString() !== '{}' ? result : null;
  }
  return null;
}

export const planByEpg = (channelId) => {
  if(xmlDataList.filter((file) => file.id === channelId)?.length > 0) {
    const jsonObject = XmlService.parseXmlToJson(xmlDataList.filter((file) => file.id === channelId)[0].xmlData);
    jsonObject.children = jsonObject.children.map((child) => {
      if(child.name === "programme") {
        const startTimestamp = child.attributes.start.split(' ')[0];
        const stopTimestamp = child.attributes.stop.split(' ')[0];
        child.attributes.utcStart = dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ');
        child.attributes.utcStartTime = dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').hour() * 60 + dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').minute();
        child.attributes.utcStartTimeString = `${dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').hour()}:${helper.convertTwoDigit(dayjs(startTimestamp, 'YYYYMMDDHHmmss ZZ').minute().toString())}`
        child.attributes.utcStop = dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ');
        child.attributes.utcStopTime = (dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').hour() * 60) + dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').minute();
        child.attributes.utcStopTimeString = `${dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').hour()}:${helper.convertTwoDigit(dayjs(stopTimestamp, 'YYYYMMDDHHmmss ZZ').minute().toString())}`
      }
      return child;
    })
    return jsonObject;
  }
}
