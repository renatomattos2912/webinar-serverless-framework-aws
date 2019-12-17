module.exports = {
  successResponse: body => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    };

    return response;
  },
  errorResponse: err => {
    const response = {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ status: 'error', message: err.message }),
    };

    return response;
  },
  notAuthorized: () => {
    const response = {
      statusCode: 403,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ status: 'error', message: 'Not Authorized!' }),
    };

    return response;
  },
};
