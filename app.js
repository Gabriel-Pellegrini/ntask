const express = require('express');
const consign = require('consign');
const app = express();
const port = 3000; 

//Configuring JSON tabulation
app.set('json spaces',4);

consign()
    .include('routes')
    .into(app)

app.listen(port,() => {
 console.log("Ntask listening on port " + port);
})
