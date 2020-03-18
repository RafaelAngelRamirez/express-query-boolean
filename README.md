express-query-auto-parse
==================

> Convert query strings to boolean, numbers and dates for express/connect applications.

[![npm](https://img.shields.io/npm/v/express-query-auto-parse.svg)](https://www.npmjs.com/package/express-query-auto-parse)
[![Build Status](https://travis-ci.com/RafaelAngelRamirez/express-query-boolean.svg?branch=master)](https://travis-ci.com/RafaelAngelRamirez/express-query-boolean)


## Installation

    npm install --save express-query-boolean


## Getting Started
The module will recursively attempt to parse every property in `req.query`.

Load it right after `bodyParser`:

```js
var autoParser = require('express-query-auto-parse');

// [...]

app.use(bodyParser.json());
app.use(autoParser());
```

#### Without
```js
// ?a=true&b[c]=false
console.log(req.query);
// => { a: 'true', b: { c: 'false' } }
```

#### With
```js
// ?a=true&b[c]=false
console.log(req.query);
// => { a: true, b: { c: false } }
```

#### Numbers
Convert string to numbers if they can be converted. 
```js
// ?a=2a&b=2
console.log(req.query);
// => { a: '2a', b: 2 }
```

### Dates ( New in v2.2.0 )
Convert string to dates if they are valid dates. 
```js
// ?a=2a&b=2020-03-17T23:05:53.733Z
console.log(req.query);
// => { a: '2a', b: 2020-03-17T23:05:53.733Z }
```




# Change logs

## v3.0.1
- FIX - Documentation

## v3.0.0
- Added support for date conversion.
- FIX - Vulns and outdatet packages. 
- FIX - Travis integration shows wrong build.
- FIX - NPM tag show wrong info.
- README updated






## Forked from
Copyright (c) 2015 [Marius Craciunoiu](https://github.com/mariusc23/express-query-boolean). Licensed under the MIT license.





