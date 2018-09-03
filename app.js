const express = require('express');
// import express from "express"; 
const consign = require('consign');
const app = express();

//Configuring JSON tabulation
//app.set('json spaces',4);

consign()
    .include("libs/config.js")
    .then("db.js")
    // .then ('models')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app)

module.exports = app;

