# eve-swagger-simple
Simple promise-based node.js module for utilizing Eve Swagger Interface.
Please email me for bugs/suggestions!

##Usage
```
var esis = require('eve-swagger-simple');

// Prints to console the amount of ISK in the wallet.
async function showWallet() {
    var wallet = await esis.request('/characters/0123/wallet/', { 
        character_id: 0123, 
        datasource: singularity, 
        token: (character's access token here)
        // Add other parameters if you need.
    });
    console.log(wallet);
};
showWallet();

// Sets autopilot destination.
async function setAutopilot() {
    var autopilot = await esis.request('/ui/autopilot/waypoint/', {
        datasource: 'tranquility',
        add_to_beginning: true,
        clear_other_waypoints: true,
        destination_id: 30000142,
        token: (character's access token here)
        // Add other parameters if you need.
    });
    console.log(autopilot);
};
setAutopilot();
```


##Update
###1.0.2
POST routes work now.  
