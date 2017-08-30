# eve-swagger-simple
Simple promise-based node.js module for utilizing Eve Swagger Interface.
Feel free to check out <a href="https://www.npmjs.com/package/eve-sso-simple">eve-sso-simple</a> for simplified SSO sign-on and token retrieval.
Please email me for bugs/suggestions!


##Usage Examples

### Print the search result for 'Jita.'
```
var esis = require('eve-swagger-simple');

async function search(word) {

    var result = await esis.request('/search/', {
        categories: ['solarsystem'],
        datasource: 'tranquility',
        search: word
    });

    console.log(result);
}
search('Jita');
```

### Print the wallet balance.
```
var esis = require('eve-swagger-simple');

async function showWallet() {

    var wallet = await esis.request('/characters/95943054/wallet/', { 
        character_id: 95943054,
        datasource: 'singularity', 
        token: ... // Character's access token here.
        .
        .
        // Add other parameters if you need.
    });

    console.log(wallet);
};
showWallet();
```

### Set in-game autopilot.
```
var esis = require('eve-swagger-simple');

// Sets autopilot destination.
async function setAutopilot() {
    var autopilot = await esis.request('/ui/autopilot/waypoint/', {
        datasource: 'tranquility',
        add_to_beginning: true,
        clear_other_waypoints: true,
        destination_id: 30000142,
        token: (character's access token here)
        .
        .
        // Add other parameters if you need.
    });
    console.log(autopilot);
};
setAutopilot();
```


##Updates
###1.0.2
POST routes work now.
###1.0.3
GET routes now working properly as before.
###~1.0.5
Bug fixes.
