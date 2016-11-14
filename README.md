# Bluefeather

[![Travis build status](http://img.shields.io/travis/gajus/bluefeather/master.svg?style=flat-square)](https://travis-ci.org/gajus/bluefeather)
[![Coveralls](https://img.shields.io/coveralls/gajus/bluefeather.svg?style=flat-square)](https://github.com/gajus/bluefeather)
[![NPM version](http://img.shields.io/npm/v/bluefeather.svg?style=flat-square)](https://www.npmjs.org/package/bluefeather)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

## API

### promisify

```js
import {
  promisify
} from 'bluefeather';

promisify(nodeFunction, options)
```

#### Options

|Name|Default|Description|
|---|---|---|
|`context`|`null`|`nodeFunction` is called as a method on the `context`.|
|`multipleArguments`|`false`|Makes the resulting promise fulfill with an array of the callback's success value(s).|
