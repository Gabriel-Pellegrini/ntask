const express = require('express');
const consign = require('consign');
const app = express();

//Configuring JSON tabulation
//app.set('json spaces',4);

consign()
    .include('models')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app)


