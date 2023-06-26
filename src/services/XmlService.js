import xmlParser from "react-xml-parser";

export default class XmlService {

    static parseXmlToJson(xmlRawData) {
        return new xmlParser().parseFromString(xmlRawData)
    }
}
