import { ethers } from "ethers";

export default class EnsService {
    static async resolveNameByAddress(address) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return await provider.lookupAddress(address);
    }
}
