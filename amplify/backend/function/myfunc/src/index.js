const moment = require('moment');

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(moment().format()),
    };
    return response;
};