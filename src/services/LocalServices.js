import { STORAGEENUM } from "utils/helper"

export default class LocalServices {

    static getServices(name) {
        return JSON.parse(sessionStorage.getItem(STORAGEENUM[name]))
    }
}