#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var kicadComponentsToJson = require('../index.js');

var programName = path.basename(process.argv[1]);
var kicadComponentsFilename = process.argv[2] || '';

if (kicadComponentsFilename.length === 0) {
    console.error('Usage: %s kicad-components-filename', programName);
    return;
}

try {
    fs.statSync(kicadComponentsFilename);
} catch(error) {
    console.error('File does not exists: "%s"', kicadComponentsFilename);
    return;
}

var kicadComponents = fs.readFileSync(kicadComponentsFilename, {encoding:'utf8'});
var kicadJson = kicadComponentsToJson(kicadComponents);

console.log(JSON.stringify(kicadJson, null, 4));
