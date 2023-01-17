import { scriptSecret } from "constants";
import * as CryptoJS from "crypto-js";

export default class CryptoService {

    static  getHash(text){
    
        return CryptoJS.MD5(text);
    }

    static encryptHmacSHA256(text) {
        let hash = CryptoJS.HmacSHA512(text, scriptSecret);
        const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        return hashInBase64
    }
}