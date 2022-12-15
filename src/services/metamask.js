
import { ethers } from "ethers";

export default class MetamaskService {

    static async connectHandler() {
        if (window.ethereum) {
          try {
            const res = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            await this.accountChange(res[0]);
          } catch (err) {
            console.error(err);
            throw(err);
          }
        } else {
          return "Install MetaMask";
        }
    };

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
}
