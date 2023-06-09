import { ToastMessage } from 'components/ToastMessage';
import moment from 'moment'
import LocalServices from 'services/LocalServices';
import MixPanelService from 'services/mixPanelService';
import bell from '../assets/bell.wav';
import { ENV } from 'constants';
export const helper = {
  formatLocalDate:(date) => moment(date).format("DD/MM/YYYY"),
  formatLocalTime:(date) => moment.utc(date).format("HH:mm"),
    percentFormat: (num) => num.toFixed(4).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'),
    numberFormat: (num) => num.toFixed(4).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
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
      return `${ENV === 'stage' ? 'https://stage.script.tv/' : 'https://script.tv/'}${path}`;
    }
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
  if(user && user.userName && user.userName.includes('.bnb')) {
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
  trust: "TRUST_WALLET_SIGNUP"
}

export const stakingIntervalCalc = (principal, rate, time, powNumber) => {
  let p = Math.floor(principal);
  let roi = parseFloat(rate);
  let t = parseInt(time);
  let intervalArr = [];
  for (let i = 1; i <= Math.floor(t); i++) {
    const amountInterval = p * Math.pow(1 + roi, (1*powNumber));
    const interestInterval = amountInterval - p;  
    p += interestInterval;
    intervalArr.push({
      amount: amountInterval.toFixed(6),
      interest: interestInterval.toFixed(6)
    })
  }
  console.log(intervalArr);
  return intervalArr;
}

export const stakingCalc = {
  dailyCalc: (principal, rate, time) => {
    const dailyRate = rate / 36500;
    
    const amount = principal * Math.pow(1 + dailyRate, (time * 365));
    const interest = amount - principal;
    return {
      amount: amount.toFixed(6),
      interest: interest.toFixed(6),
      stakingInterval: stakingIntervalCalc(principal, dailyRate, time, 365)
    };
  },
  weeklyCalc: (principal, rate, time) => {
    const weeklyRate = rate / 100 / 52;
    // Calculate the compound interest
    const amount = principal * Math.pow(1 + weeklyRate, (time * 52));
    const interest = amount - principal;
    
    return {
      amount: amount.toFixed(6),
      interest: interest.toFixed(6),
      stakingInterval: stakingIntervalCalc(principal, weeklyRate, time, 52)
    };
  },
  monthlyCalc: (principal, rate, time) => {
    // Convert rate from annual percentage to monthly decimal rate
    const monthlyRate = rate / 100 / 12;
    // Calculate the compound interest
    const amount = principal * Math.pow(1 + monthlyRate, (time * 12));
    const interest = amount - principal;
    
    return {
      amount: amount.toFixed(6),
      interest: interest.toFixed(6),
      stakingInterval: stakingIntervalCalc(principal, monthlyRate, time, 12)
    };
  },
  yearlyCalc: (principal, rate, time) => {
    // Convert rate from percentage to decimal
    const yearlyRate = rate / 100;
    // Calculate the compound interest
    const amount = principal * Math.pow(1 + yearlyRate, time);
    const interest = amount - principal;
  
    return {
      amount: amount.toFixed(6),
      interest: interest.toFixed(6),
      stakingInterval: stakingIntervalCalc(principal, yearlyRate, time, 1)
    };
  },
} 
