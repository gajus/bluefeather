/* eslint-disable promise/prefer-await-to-callbacks, id-length */

import test from 'ava';
import promisify from '../src/promisify';

test('resolves value', async (t) => {
  const foo = (callback) => {
    process.nextTick(() => {
      callback(null, 'foo');
    });
  };

  const result = await promisify(foo)();

  t.true(result === 'foo');
});

test('passes parameters', async (t) => {
  t.plan(3);

  const foo = (a, b, c, callback) => {
    t.true(a === 'a');
    t.true(b === 'b');
    t.true(c === 'c');

    process.nextTick(() => {
      callback(null);
    });
  };

  await promisify(foo)('a', 'b', 'c');
});

test('handles an error', async (t) => {
  const foo = (callback) => {
    process.nextTick(() => {
      callback(new Error('foo'));
    });
  };

  const error = await t.throws(promisify(foo)());

  t.true(error.message === 'foo');
});

test('options.multipleArguments=true', async (t) => {
  const foo = function (callback) {
    process.nextTick(() => {
      callback(null, 'foo', 'bar', 'baz');
    });
  };

  const result = await promisify(foo, {
    multipleArguments: true
  })();

  t.deepEqual(result, ['foo', 'bar', 'baz']);
});
