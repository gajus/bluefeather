# Bluefeather

[![Travis build status](http://img.shields.io/travis/gajus/bluefeather/master.svg?style=flat-square)](https://travis-ci.org/gajus/bluefeather)
[![Coveralls](https://img.shields.io/coveralls/gajus/bluefeather.svg?style=flat-square)](https://github.com/gajus/bluefeather)
[![NPM version](http://img.shields.io/npm/v/bluefeather.svg?style=flat-square)](https://www.npmjs.org/package/bluefeather)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

A collection of Promise utilities.

* [`delay`](#delay)
* [`mapSeries`](#mapseries)
* [`promisify`](#promisify)

## `delay`

```js
type DelayType = (ms: number) => Promise<void>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const delay: DelayType;

```

## `mapSeries`

```
type CallbackType = (currentValue: any, index: any, values: Iterable<any>) => any;

type MapSeriesType = (values: Array<any>, mapper: CallbackType) => Promise<Array<any>>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const mapSeries: MapSeriesType;

```

## `promisify`

```
/**
 * @property context Invokes `nodeFunction` using `context` as the calling object.
 * @property multipleArguments Makes the resulting promise fulfill with an array of the callback's success value(s).
 */
type PromisifyOptionsType = {|
  context?: any,
  multipleArguments?: boolean
|};

type PromisifyType = (nodeFunction: Function, options?: PromisifyOptionsType) => Function;

/**
 * Creates a function that when executed returns a promise whose fait depends
 * on the callback provided as the last parameter to the wrapped function.
 */
const promisify: PromisifyType;

```
