import * as CryptoJS from "crypto-js";

export default class CryptoService {

    static  getHash(text){
    
        return CryptoJS.MD5(text);
    }
}