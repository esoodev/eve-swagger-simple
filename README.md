# eve-swagger-simple
Simple promise-based node.js module for utilizing Eve Swagger Interface.
Feel free to check out <a href="https://www.npmjs.com/package/eve-sso-simple">eve-sso-simple</a> for simplified SSO sign-on and token retrieval.
Please email me for bugs/suggestions!


##Usage Examples

### Print the search result for 'Jita.'
```
var esis = require('eve-swagger-simple');

esis.request('/search/', {
    categories: 'station,solarsystem',
    datasource: 'tranquility',
    search: 'Jita'
}).then((result) => { console.log(result) });
```

### Print the wallet balance.
```
var esis = require('eve-swagger-simple');

esis.request('/characters/95943054/wallet/', { 
    character_id: 95943054,
    datasource: 'singularity', 
    token: ... // Character's access token here.
    .
    .
    // Add other parameters if you need.
}).then((result) => { console.log(result) });
```

### Set in-game autopilot.
```
var esis = require('eve-swagger-simple');

// Sets autopilot destination.
esis.request('/ui/autopilot/waypoint/', {
    datasource: 'tranquility',
    add_to_beginning: true,
    clear_other_waypoints: true,
    destination_id: 30000142,
    token: (character's access token here)
    .
    .
    // Add other parameters if you need.
});

```


##Updates
###1.0.2
POST routes work now.
###1.0.3
GET routes now working properly as before.
###~1.0.8
Bug fixes & README edits.
