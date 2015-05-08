# kicad-components-to-json.js

KiCad components (.cmp) to JSON converter.

[![npm module](https://badge.fury.io/js/kicad-components-to-json.svg)](https://www.npmjs.org/package/kicad-components-to-json)
[![dependencies](https://david-dm.org/mondalaci/kicad-components-to-json.svg)](https://david-dm.org/mondalaci/kicad-components-to-json)
[![Build Status](https://travis-ci.org/mondalaci/kicad-components-to-json.svg?branch=master)](https://travis-ci.org/mondalaci/kicad-components-to-json)

# Usage

First, `npm install kicad-components-to-json`

Then let's take a KiCad components file like [uhk-left-main.cmp](test/uhk-left-main.cmp) and

```
var fs = require('fs');
var kicadComponentsToJson = require('kicad-components-to-json');
var kicadComponents = fs.readFileSync(
    'node_modules/kicad-components-to-json/test/uhk-left-main.cmp',
    {encoding:'utf8'});
console.log(JSON.stringify(kicadComponentsToJson(kicadComponents), null, 4));
```

This way you'll end up with [uhk-left-main.json](test/uhk-left-main.json)
