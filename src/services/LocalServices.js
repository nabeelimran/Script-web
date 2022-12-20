import { enumStorange } from "utils/helper"

export default class LocalServices {

    static  getServices(name) {
        return JSON.parse(sessionStorage.getItem(enumStorange[name]))
    }
}