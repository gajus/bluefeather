# Bluefeather

[![Travis build status](http://img.shields.io/travis/gajus/bluefeather/master.svg?style=flat-square)](https://travis-ci.org/gajus/bluefeather)
[![Coveralls](https://img.shields.io/coveralls/gajus/bluefeather.svg?style=flat-square)](https://github.com/gajus/bluefeather)
[![NPM version](http://img.shields.io/npm/v/bluefeather.svg?style=flat-square)](https://www.npmjs.org/package/bluefeather)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

A collection of Promise utilities.

* [Utility functions](#utility-functions)
  * [`delay`](#delay)
  * [`map`](#map)
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

### `map`

> For the record, this function is just a thin-wrapper around [`Bluebird#map`](http://bluebirdjs.com/docs/api/promise.map.html).

This method is identical to [`Bluebird#map`](http://bluebirdjs.com/docs/api/promise.map.html) except that the `concurrency` setting can be overridden using `BLUEFEATHER_MAX_CONCURRENCY` environment variable. Controlling max concurrency using environment variables enables debugging of the codebase without refactoring the code.

```js
type MapperType<T, R> = (currentValue: T, index: number, values: $ReadOnlyArray<T>) => R;

type MapConfigurationType = {|
  +concurrency: number
|};

type MapType<T, R> = (values: $ReadOnlyArray<T>, mapper: MapperType<T, R>, configuration?: MapConfigurationType) => Promise<$ReadOnlyArray<R>>;

const map: MapType<*, *>;

```

### `mapSeries`

```js
type CallbackType<T, R> = (currentValue: T, index: number, values: $ReadOnlyArray<T>) => R;

type MapSeriesType<T, R> = (values: $ReadOnlyArray<T>, mapper: CallbackType<T, R>) => Promise<$ReadOnlyArray<R>>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const mapSeries: MapSeriesType<*, *>;

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
type SuppressType = <T: Promise<*>>(
  ErrorConstructor: Class<Error> | (error: Error) => boolean,
  promise: T
) => T | Promise<void>;

/**
 * Suppresses errors that are instance of ErrorConstructor.
 */
const suppress: SuppressType;

```
