#!/usr/bin/env node

var fs = require('fs');
var kicadComponentsToJson = require('../index.js');

var kicadComponents = fs.readFileSync(__dirname + '/uhk-left-main.cmp', {encoding:'utf8'});
var generatedKicadJson = JSON.stringify(kicadComponentsToJson(kicadComponents), null, 4);
var savedKicadJson = fs.readFileSync(__dirname + '/uhk-left-main.json', {encoding:'utf8'});
var statusCode = generatedKicadJson.trim() === savedKicadJson.trim() ? 0 : 1;

console.log(statusCode === 0 ? 'All good.' : 'Test failed!');
process.exit(statusCode);
