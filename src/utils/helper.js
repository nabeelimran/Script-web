import moment from 'moment'
export const helper = {
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
  console.log(startTime.format('HH:mm'))
      while (startTime <= endTime) {
        timeStops.push(moment(startTime).format('HH:mm'));
        startTime.add(30, 'minutes');
      }
  
      return timeStops;
    },
  
    getDiffInMinfromCurrent:(startDate, dateType)=> {
      let currentDate = moment(new Date());
      let diff = moment(startDate).diff(currentDate, 'minutes');
      return diff
    },
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
    }
}
