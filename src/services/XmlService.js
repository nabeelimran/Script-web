import axios from "axios";

export default class XmlService {

    static async getXmlFile(data) {
        try {
            const res = await axios.get(data, {
                "content-type": "application/xml; charset=utf-8"
            });
            return res;    
        } catch (error) {
            return error;
        }
    }
}
