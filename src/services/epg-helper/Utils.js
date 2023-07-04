import moment from "moment"

export const Utils = {
    getStartDate: () => moment().utcOffset(0).set({hour:0, minute:0, second:0, millisecond:0}),
    getEndDate: () => moment().utcOffset(0).set({hour:24, minute:0, second:0, millisecond:0}),
    getHumanReadableDate: (timestamp) => moment(timestamp).utcOffset('+0000').format('YYYY-MM-DD HH:mm ZZ'),
    getHours: (date) => moment(date).utc().hours()
}
