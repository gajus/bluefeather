# Bluefeather

[![Travis build status](http://img.shields.io/travis/gajus/bluefeather/master.svg?style=flat-square)](https://travis-ci.org/gajus/bluefeather)
[![Coveralls](https://img.shields.io/coveralls/gajus/bluefeather.svg?style=flat-square)](https://github.com/gajus/bluefeather)
[![NPM version](http://img.shields.io/npm/v/bluefeather.svg?style=flat-square)](https://www.npmjs.org/package/bluefeather)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

A collection of Promise utilities.

* [Utility functions](#utility-functions)
  * [`delay`](#delay)
  * [`mapSeries`](#mapseries)
  * [`promisify`](#promisify)
  * [`suppress`](#suppress)

## Utility functions

### `delay`

```js
type DelayType = (ms: number) => Promise<void>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const delay: DelayType;

```

### `mapSeries`

```js
type CallbackType = (currentValue: any, index: any, values: Iterable<any>) => any;

type MapSeriesType = (values: Array<any>, mapper: CallbackType) => Promise<Array<any>>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const mapSeries: MapSeriesType;

```

### `promisify`

```js
/**
 * @property multipleArguments Makes the resulting promise fulfill with an array of the callback's success value(s).
 */
type PromisifyOptionsType = {|
  multipleArguments?: boolean
|};

type PromisifyType = (nodeFunction: Function, options?: PromisifyOptionsType) => Function;

/**
 * Creates a function that when executed returns a promise whose fait depends
 * on the callback provided as the last parameter to the wrapped function.
 */
const promisify: PromisifyType;

```

### `suppress`

```js
type SuppressType = <T: *>(
  ErrorConstructor: Class<Error>,
  promise: Promise<T>
) => Promise<T | void>;

/**
 * Suppresses errors that are instance of ErrorConstructor.
 */
const suppress: SuppressType;

```
