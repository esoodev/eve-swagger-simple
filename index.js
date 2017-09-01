var request = require('request');
var querystring = require('querystring');
const baseUrl = ('https://esi.tech.ccp.is/latest');

module.exports = {

    // Send a GET request to ESI - try POST if it fails.
    request: function (route, parameters) {

        return new Promise((resolve, reject) => {

            request.get({
                url: baseUrl + route + '?' + querystring.stringify(parameters)
            }, (error, response, body) => {

                if (error) {
                    reject(error);
                } else if (response && body) {
                    var result;

                    try {
                        result = JSON.parse(body);
                    } catch (e) {
                        reject(e);
                    }

                    if (result.error == 'Method not allowed') {
                        this._post(route, parameters).then(
                            res => { resolve(res) },
                            err => { reject(err) }
                        );
                    } else {
                        resolve(result);
                    }
                } else {
                    reject(response);
                }
            });
        });
    },

    // Send a post request to ESI
    _post: function (route, parameters) {

        return new Promise((resolve, reject) => {

            request.post({
                url: baseUrl + route,
                qs: parameters
            }, (error, response, body) => {

                if (error) {
                    reject(error);
                } else { resolve('POST sent to ' + baseUrl + route + '\n' + JSON.stringify(parameters)); }
            });
        });
    }

}