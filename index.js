var request = require('request');
const baseUrl = ('https://esi.tech.ccp.is/latest');

module.exports = {

    // Send a GET request to ESI - try POST if it fails.
    request: function (route, parameters) {

        return new Promise((resolve, reject) => {

            request.get({
                url: baseUrl+route,
                qs: parameters
            }, (error, response, body) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else if (response && body) {
                    var result = JSON.parse(body);
                    if (result.error = 'Method not allowed') {
                        return this._post(route, parameters);
                    } else {
                        resolve(JSON.parse(body));
                    }
                }
            });
        });
    },

    // Send a post request to ESI
    _post: function (route, parameters) {

        return new Promise((resolve, reject) => {

            request.post({
                url: baseUrl+route,
                qs: parameters
            }, (error, response, body) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else if (response && body) {
                    resolve(JSON.parse(body));
                }
            });
        });
    }

}