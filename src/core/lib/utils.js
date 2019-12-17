const moment = require('moment');

module.exports = {
  getQueryParam: ({ params, name }) => {
    if (!params) return null;
    if (!params[name]) return null;
    return params[name];
  },
  getGtmUnixDate: () => {
    var gmt = moment().utc();
    return gmt.unix();
  },
};
