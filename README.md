# eve-swagger-simple
Simple promise-based node.js module for utilizing Eve Swagger Interface.

##Usage
```
var esis = require('eve-swagger-simple');

async function main() {
    var wallet = await esis.request('/characters/{character_id}/wallet/', { character_id: 0123, datasource: singularity, token: ...});
    console.log(wallet);
};

main();

```
