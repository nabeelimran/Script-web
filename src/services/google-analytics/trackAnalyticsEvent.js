import ReactGA from "react-ga";

const analyticsEventTracker = (category, action, label) => {
    ReactGA.event({
        category, action, label
    })
}

export default analyticsEventTracker;