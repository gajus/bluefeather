# Bluefeather

[![Travis build status](http://img.shields.io/travis/gajus/bluefeather/master.svg?style=flat-square)](https://travis-ci.org/gajus/bluefeather)
[![Coveralls](https://img.shields.io/coveralls/gajus/bluefeather.svg?style=flat-square)](https://github.com/gajus/bluefeather)
[![NPM version](http://img.shields.io/npm/v/bluefeather.svg?style=flat-square)](https://www.npmjs.org/package/bluefeather)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

WIP

Bluefeather is a collection of utilities used to abstract common tasks when working with Promises.

Bluefeather does not extend the native Promise prototype. Bluefeather uses the native Promise implentation and leverages the [This-Binding Syntax](https://github.com/tc39/proposal-bind-operator) ECMAScript proposal to implement all of the [Bluebird API](bluebirdjs.com/docs/api-reference.html).

Using Bluefeather requires to transpile code using [`babel-plugin-transform-function-bind`](https://babeljs.io/docs/plugins/transform-function-bind/) Babel plugin.

## Bind operator

Bluefeather leverages the bind-operator proposal

```js
import {
  mapSeries
} from 'bluefeather';

const names = [
  'foo',
  'bar',
  'baz'
];

Promise
  ::mapSeries((value, indexValue) => {
    return value + '_';
  })
  .then((values) => {
    values;
    // [
    //   'foo_',
    //   'bar_',
    //   'baz_'
    // ]
  })
```
