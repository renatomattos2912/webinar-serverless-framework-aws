const db = require('../../../core/lib/faunadb');
const logger = require('../../../core/lib/logger');
const {
  successResponse,
  errorResponse,
} = require('../../../core/lib/api-response');

module.exports = {
  placeAdd: async event => {
    const LOG_LABEL = 'app/v1/place.add';

    logger.info({ label: LOG_LABEL, message: 'STARTED' });

    let response = null;

    try {
      const data = JSON.parse(event.body);

      logger.info({ label: LOG_LABEL, message: data });

      const body = {};
      body.name = data.name;

      await db.add({
        collection: 'Place',
        data: body,
      });

      response = successResponse({ status: 'ok', message: 'Data added!' });
    } catch (err) {
      logger.error(err);
      response = errorResponse(err);
      throw err;
    } finally {
      logger.info({ label: LOG_LABEL, message: 'ENDED' });
      return response;
    }
  },
  placeGet: async event => {
    const LOG_LABEL = 'app/v1/place.placeGet';

    logger.info({ label: LOG_LABEL, message: 'STARTED' });

    let response = null;

    try {
      const id = event.pathParameters.id;

      const q = await db.getOne({
        collection: 'Place',
        id,
      });

      response = successResponse(q.data);
    } catch (err) {
      logger.error(err);
      response = errorResponse(err);
      throw err;
    } finally {
      logger.info({ label: LOG_LABEL, message: 'ENDED' });
      return response;
    }
  },
  placeGetAll: async event => {
    const LOG_LABEL = 'app/v1/place.placeGetAll';

    logger.info({ label: LOG_LABEL, message: 'STARTED' });

    let response = null;

    try {
      const q = await db.get({
        index: 'all_place',
      });

      response = successResponse(q.data);
    } catch (err) {
      logger.error(err);
      response = errorResponse(err);
      throw err;
    } finally {
      logger.info({ label: LOG_LABEL, message: 'ENDED' });
      return response;
    }
  },
  placeUpdate: async event => {
    const LOG_LABEL = 'app/v1/place.placeUpdate';

    logger.info({ label: LOG_LABEL, message: 'STARTED' });

    let response = null;

    try {
      const id = event.pathParameters.id;

      const data = JSON.parse(event.body);

      logger.info({ label: LOG_LABEL, message: data });

      const body = {};
      body.name = data.name;

      const q = await db.update({
        collection: 'Place',
        id,
        data,
      });

      response = successResponse({ status: 'ok', message: 'Data updated!' });
    } catch (err) {
      logger.error(err);
      response = errorResponse(err);
      throw err;
    } finally {
      logger.info({ label: LOG_LABEL, message: 'ENDED' });
      return response;
    }
  },
  placeDel: async event => {
    const LOG_LABEL = 'app/v1/place.placeDel';

    logger.info({ label: LOG_LABEL, message: 'STARTED' });

    let response = null;

    try {
      const id = event.pathParameters.id;

      const q = await db.del({
        collection: 'Place',
        id,
      });

      response = successResponse({ status: 'ok', message: 'Data deleted!' });
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
