
// import { ethers } from "ethers";
import { metamaskNetwork } from "utils/helper";
import CryptoService from "./CryptoService";

export default class MetamaskService {

    static async connectHandler() {
      
        if (window.ethereum) {
          try {
            const res = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            return await res[0];
          } catch (err) {
            console.error(err);
            throw(err);
          }
        } else {
          return "Install MetaMask";
        }
    };

    static async signatureRequest(walletAddress) {
        
        return await window.ethereum.request({
          method: 'eth_sign',
          params: [walletAddress, CryptoService.getHash(`met@m@sk@login`).toString()]
        })
    }

    static async getChainId() {
        try {
            let chainId = await window.ethereum.request({
                method: 'eth_chainId'
            })
            return await chainId    
        } catch (error) {
            throw(error)
        }
    }
    

    static async accountsChanged(newAccount) {
        try {
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [newAccount.toString(), "latest"],
          });
          return balance;
        } catch (err) {
          console.error(err);
          throw(err);
        }
    };

    static async changeChain(networkName) {
        let result = await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: metamaskNetwork[networkName].chainId
            }
          ]
        }).catch(async (err) => {
          if (err && err.code === 4902) {
            result = await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  ...metamaskNetwork[networkName]
                }
              ]
            })
          }
        })
        return result;
    }
    
}
