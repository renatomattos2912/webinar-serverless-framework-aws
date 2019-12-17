const logger = require('../../../core/lib/logger');
const {
  successResponse,
  errorResponse,
} = require('../../../core/lib/api-response');

module.exports = {
  placeGetAll: async event => {
    const LOG_LABEL = 'app/v2/place.placeGetAll';

    logger.info({ label: LOG_LABEL, message: 'STARTED' });

    let response = null;

    try {
      const body = {
        response: 'v2',
      };

      response = successResponse(body);
    } catch (err) {
      logger.error(err);
      response = errorResponse(err);
      throw err;
    } finally {
      logger.info({ label: LOG_LABEL, message: 'ENDED' });
      return response;
    }
  },
};
