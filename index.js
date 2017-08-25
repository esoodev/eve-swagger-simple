var request = require('request');
const baseUrl = ('https://esi.tech.ccp.is/latest');

module.exports = {

    // Send a request to ESI
    request: function (route, parameters) {

        return new Promise((resolve, reject) => {

            request({
                url: baseUrl+route,
                qs: parameters
            }, (error, response, body) => {
                if (error) {
                    console.log('error:', error);
                    reject();
                } else if (response && body) {
                    resolve(JSON.parse(body));
                }
            });
        });
    }

}