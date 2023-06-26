import axios from "axios";
import { serverURL } from "./constants";

const api = axios.create({
  baseURL: serverURL,
});

export const getRechargeCost = async (glassId) => {
  try {
    const response = await api.request({
      url: "/scripts/calculate-recharge",
      method: "GET",
      params: {
        glasses: glassId,
      },
    });

    console.log("getRechargeCost", response);

    return response.data.rechargeCost;
  } catch (error) {
    console.log(error);
  }
};

export const getRechargeSignature = async (glassId) => {
  try {
    const response = await api.request({
      url: "/scripts/recharge-glasses",
      method: "GET",
      params: {
        glasses: glassId,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPoints = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/get-points",
      method: "GET",
      params: {
        address,
      },
    });

    return response.data.points;
  } catch (error) {
    console.log(error);
  }
};

export const getGlasses = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/get-glasses",
      method: "GET",
      params: {
        address,
      },
    });

    console.log("getGlasses", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const claimGlasses = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/claim-free-glass",
      method: "GET",
      params: {
        address,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFreeGlassTxn = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/check-free-glass-tx",
      method: "GET",
      params: {
        address,
      },
    });
    return response.data.type === "FREE_MINT" ? response.data : {};
  } catch (error) {
    // console.log(error);
  }
};

export const getMetadata = async (token) => {
  try {
    const response = await api.request({
      url: "/scripts/metadata",
      method: "GET",
      params: {
        token,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getStats = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/get-stats",
      method: "GET",
      params: {
        address,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error in getting stats");
  }
};

export const getGemsEligibility = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/check-gem-eligibility",
      method: "GET",
      params: {
        address,
      },
    });

    console.log("/scripts/check-gem-eligibility", response.data);

    return response.data;
  } catch (error) {
    console.log("error in getGemsEligibility");
  }
};

export const getGemPrice = async (glassId) => {
  try {
    const response = await api.request({
      url: "/scripts/get-gem-price",
      method: "GET",
      params: {
        glassId,
      },
    });

    return response.data.price;
  } catch (error) {
    console.log("error in getGemPrice");
  }
};

export const getGemSignature = async (glassId) => {
  try {
    const response = await api.request({
      url: "/scripts/claim-gem",
      method: "GET",
      params: {
        glassId,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error in getGemSignature");
  }
};

export const getVoucherEligibility = async (address) => {
  try {
    const response = await api.request({
      url: "/scripts/check-voucher-eligibility",
      method: "GET",
      params: {
        address,
      },
    });

    console.log("/scripts/check-voucher-eligibility", response.data);

    return response.data;
  } catch (error) {
    console.log("error in getVoucherEligibility");
  }
};

export const getVoucherSignature = async (address, type) => {
  try {
    const response = await api.request({
      url: "/scripts/claim-voucher",
      method: "GET",
      params: {
        address,
        type,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error in getVoucherSignature");
  }
};

export const calculatePayout = async (address, type) => {
  try {
    const response = await api.request({
      url: "/scripts/calculate-payout",
      method: "GET",
      params: {
        address,
        type,
      },
    });

    console.log("/scripts/calculatePayout", response.data);

    return response.data;
  } catch (error) {
    console.log("error in calculatePayout");
  }
};

export const claimPayout = async (address, type) => {
  try {
    const response = await api.request({
      url: "/scripts/claim-payout",
      method: "GET",
      params: {
        address,
        type,
      },
    });

    console.log("/scripts/claimPayout", response.data);

    return response.data;
  } catch (error) {
    console.log("error in claimPayout ", error);
  }
};

export const fetchEquipSignature = async (glassId) => {
  try {
    const response = await api.request({
      url: "/scripts/equip-voucher",
      method: "GET",
      params: {
        glassId,
      },
    });

    return response.data.signature;
  } catch (error) {
    console.log("error in getVoucherSignature");
  }
};

export const fetchEquippedVouchers = async (address) => {
  let query = `{
    users(where: {id:"${address.toLowerCase()}"}) {
      id
      vouchers {
        glassID
        voucherType
      }
    }
  }`;
  let response = await fetch(
    "https://api.thegraph.com/subgraphs/name/nabeelimran/scripttv",
    {
      method: "POST",
      body: JSON.stringify({ query }),
    }
  );
  let data = await response.json();
  let events = data.data.users.length ? data.data.users[0].vouchers : [];
  console.log("fetchEquippedVouchers events", events);
  return splitByVoucherType(events);
};

export const getRechargeHistory = async (glassId) => {
  let query = `{
    rechargeGlasses(where: {glassId: "${glassId}"}) {
      glassId
      amount:value
      address:from
      blockTimestamp
    }
  }`;

  let response = await fetch(
    "https://api.thegraph.com/subgraphs/name/nabeelimran/scripttv",
    {
      method: "POST",
      body: JSON.stringify({ query }),
    }
  );
  let data = await response.json();
  console.log("recharge history", data.data.rechargeGlasses);
  return data?.data?.rechargeGlasses || [];
};

export const getRewardsHistory = async (address) => {
  console.log("address", address);
  let query = `{
    earningPayouts(where: {to: "${address.toLowerCase()}"})
    { 
      address:to
      amount 
      blockTimestamp
    }
}`;

  let response = await fetch(
    "https://api.thegraph.com/subgraphs/name/nabeelimran/scripttv",
    {
      method: "POST",
      body: JSON.stringify({ query }),
    }
  );
  let data = await response.json();
  console.log("rewards history", data);
  return data?.data?.earningPayouts || [];
};

export const getNonClaimedTransactions = async (userId) => {
  try {
    const response = await axios.request({
      url: "https://stagebackend.script.tv/api/v1/getTransactions",
      method: "GET",
      params: {
        executed: false,
        userId,
        page: 0,
        // type: "PAYOUT_RARE",
      },
    });

    console.log("getNonClaimedTransactions", response.data.data);

    return response.data;
  } catch (error) {
    console.log("error in getNonClaimedTransactions");
  }
};

// export const postMethod = async () => {
//   const response = await api.request({
//     url: "/products",
//     method: "POST",
//     data: {
//       firstName: 'Fred'
//     },
//   })
//   return response.data;
// }

const splitByVoucherType = (arr) =>
  arr.reduce(
    (splits, obj) => {
      const voucherType = obj.voucherType;
      if (!splits[voucherType]) splits[voucherType] = [];
      splits[voucherType].push(obj.glassID);
      return splits;
    },
    [[], [], []]
  );
