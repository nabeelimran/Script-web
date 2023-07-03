import { ethers } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import React from "react";
import { getMetadata, getGlasses } from "utils/api";
import {
  glassPassAddress,
  scriptGlassesAddress,
  scriptPayAddress,
  scriptTvAddress,
  scriptVoucherAddress,
} from "utils/constants";
import ScriptTvABI from "./abi/scriptTV.json";
import ScriptVoucherABI from "./abi/ScriptVoucher.json";
import ScriptPayABI from "./abi/scriptPay.json";
import ScriptGlassABI from "./abi/scriptGlass.json";
import ScriptGlassPassABI from "./abi/GlassPass.json";

let scriptTvContract;
let scriptVoucher;
let scriptPayContract;
let scriptGlassContract;
let scriptPassContract;

if (window.ethereum) {
  const provider = new ethers.providers.Web3Provider(window?.ethereum);
  const signer = provider.getSigner();

  scriptTvContract = new ethers.Contract(scriptTvAddress, ScriptTvABI, signer);

  scriptVoucher = new ethers.Contract(
    scriptVoucherAddress,
    ScriptVoucherABI,
    signer
  );

  scriptPayContract = new ethers.Contract(
    scriptPayAddress,
    ScriptPayABI,
    signer
  );

  scriptGlassContract = new ethers.Contract(
    scriptGlassesAddress,
    ScriptGlassABI,
    signer
  );

  scriptPassContract = new ethers.Contract(
    glassPassAddress,
    ScriptGlassPassABI,
    signer
  );
}

export const approve = async () => {
  const tx = await scriptPayContract.approve(
    scriptTvAddress,
    ethers.utils.parseEther("1000000000")
  );
  return await tx.wait();
};

export const checkApproval = async (user) => {
  const allowance = await scriptPayContract.allowance(user, scriptTvAddress);
  console.log("allowance", Number(allowance));
  return Number(allowance);
};

export const approveVoucherForTv = async () => {
  const tx = await scriptVoucher.setApprovalForAll(scriptTvAddress, true);
  return await tx.wait();
};

export const checkVoucherForTvApproval = async (user) => {
  return await scriptVoucher.isApprovedForAll(user, scriptTvAddress);
};

export const getNextImg = async () => {
  let next = (await scriptGlassContract.getNextTokenId()).toString();
  return `https://ahram-bucket.s3.eu-central-1.amazonaws.com/assets/${next}.png`
};

export const approveVoucher = async () => {
  const tx = await scriptPayContract.approve(
    scriptVoucherAddress,
    ethers.utils.parseEther("1000000000")
  );
  return await tx.wait();
};

export const checkVoucherApproval = async (user) => {
  const allowance = await scriptPayContract.allowance(
    user,
    scriptVoucherAddress
  );

  console.log("allowance", allowance);
  return Number(allowance);
};

export const approveGlassPass = async () => {
  const tx = await scriptPassContract.setApprovalForAll(scriptTvAddress, true);
  return await tx.wait();
};

export const checkGlassPassApproval = async (user) => {
  const allowed = await scriptPassContract.isApprovedForAll(
    user,
    scriptTvAddress
  );
  return allowed;
};

export const balanceOf = async (user) => {
  const balance = await scriptPayContract.balanceOf(user);
  return formatEther(balance);
};

export const equipgem = async (glassId, gemType, nonce, signature) => {
  const tx = await scriptTvContract.equipGem(
    glassId,
    gemType,
    nonce,
    signature
  );
  return await tx.wait();
};

export const equipVoucher = async (
  voucherType,
  glassId,
  signature,
  setIsDisabled
) => {
  console.log("equipVoucher", { voucherType, glassId, signature });
  try {
    setIsDisabled(true);
    const tx = await scriptTvContract.associateVoucher(
      voucherType,
      glassId,
      signature,
      {
        gasLimit: 100000,
      }
    );
    return await tx.wait();
  } catch (error) {
    console.log("error", error);
    setIsDisabled(false);
  }
};

export const unequipVoucher = async (glassId) => {
  const tx = await scriptTvContract.releaseVoucher(glassId);
  return await tx.wait();
};

export const isFreeClaimed = async (address) => {
  const isClaimed = await scriptTvContract.freemiumOwner(address);
  return isClaimed;
};

export const mintFreeGlasses = async (address, nonce, signature) => {
  console.log(address, nonce, signature);
  const tx = await scriptTvContract.mintFreemiumGlasses(
    address,
    nonce,
    signature
  );
  return await tx.wait();
};

export const rechargeGlasees = async (amount, nonce, signature, glassId) => {
  const tx = await scriptTvContract.rechargeGlasses(
    amount,
    nonce,
    signature,
    glassId
  );
  return await tx.wait();
};

export const mintVoucher = async (address, type, tokenId, nonce, signature) => {
  const tx = await scriptTvContract.mintRechargeVoucher(
    address,
    type,
    tokenId,
    nonce,
    signature
    // {
    //   gasLimit: 1000000,
    // }
  );
  return await tx.wait();
};

export const glassesOfOwner = async (address) => {
  let glasses = await scriptGlassContract.tokensOfOwner(address);

  let glassListPromise = glasses.map(async (id) => {
    let metadata = await getMetadata(id.toNumber());
    return {
      id: id.toNumber(),
      img: metadata.image,
      type: metadata.attributes[0].value,
      level: metadata.attributes[2].value,
      gem: metadata.attributes[3].value,
    };
  });
  let glassList = await Promise.all(glassListPromise);
  return glassList;
};

export const glassesOfOwnerServer = async (address) => {
  let glassList = await getGlasses(address);
  return glassList.map((item) => ({
    ...item,
    id: item.tokenId,
    realId: item.id,
    img: `https://ahram-bucket.s3.eu-central-1.amazonaws.com/assets/${item.tokenId}.png`,
    gem: item.gemsRecords.length ? item.gemsRecords[0].gemType : "",
  }));
};

export const getVoucherBalance = async (address) => {
  const [common, rare, superscript] = await scriptVoucher.balanceOfBatch(
    [address, address, address],
    [0, 1, 2]
  );
  return [common.toNumber(), rare.toNumber(), superscript.toNumber()];
};

export const getGlassPassBalance = async (address) => {
  const balance = await scriptPassContract.balanceOf(address);
  return balance.toNumber();
};

export const getBaseUri = async () => {
  let tokenURI = await scriptGlassContract.tokenURI(1);
  tokenURI = tokenURI.split("/metadata")[0];
  return tokenURI;
  // return "https://ahram-bucket.s3.eu-central-1.amazonaws.com"
};

// contract write functions
export const mintGlasses = async (type, useGlassPass) => {
  try {
    const tx = await scriptTvContract.mintGlasses(type, useGlassPass);
    const txResponse = await tx.wait();
    console.log(txResponse);
    return txResponse;
  } catch (error) {
    console.log(error);
  }
};

export const earningPayout = async (amount, nonce, signature, type) => {
  try {
    const tx = await scriptTvContract.earningPayout(
      amount,
      nonce,
      signature,
      type
    );
    const txResponse = await tx.wait();
    console.log(txResponse);
    return txResponse;
  } catch (error) {
    console.log(error);
  }
};
