var esis = require('./index');

async function search(word) {

    var result = await esis.request('/search/', {
        categories: ['solarsystem'],
        datasource: 'tranquility',
        search: word
    });

    console.log('result: ' + JSON.stringify(result));
}

search('Jita');

async function autopilot() {

    esis.request('/ui/autopilot/waypoint/', {
        datasource: 'tranquility',
        add_to_beginning: true,
        clear_other_waypoints: true,
        destination_id: 30002659,
        token: 'ISYfV-jO16fQhp3I88XUbTdU3bZhm3bVkWRvQgBES8AcG0YFmq2TKw5uveD393BYwZT5Vu1T4FhXaeEBD7wavg2'
    });

};
autopilot();