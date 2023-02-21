import { mixPanelConfig } from "constants";
import * as mixpanel from 'mixpanel-browser';

export default class MixPanelService {

    static init() {
        mixpanel.init(mixPanelConfig.mixPanelUserToken, {debug: false, ignore_dnt: true});
    }
    
    static setIdentifier(userToken) {
        mixpanel.identify(userToken);
    }

    static track(id, action) {
        mixpanel.track(id, action);
    }
}
