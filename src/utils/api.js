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
  return splitByVoucherType(events);
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
