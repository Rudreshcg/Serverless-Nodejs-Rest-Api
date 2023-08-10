const connection = require("./config/database");

async function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function response(statusCode, message, data) {
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            message: message,
            data: data
        })
    };
}

module.exports = {executeQuery, response}