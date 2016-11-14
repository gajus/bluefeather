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

  const foo = (foo, bar, baz, callback) => {
    t.true(foo === 'a');
    t.true(bar === 'b');
    t.true(baz === 'c');

    process.nextTick(() => {
      callback(null);
    });
  };

  await promisify(foo)('a', 'b', 'c');
});

test('handles an error', async (t) => {
  const foo = (callback) => {
    process.nextTick(() => {
      callback('foo');
    });
  };

  const result = await t.throws(promisify(foo)());

  t.true(result === 'foo');
});

test('options.context={foo: "bar"}', async (t) => {
  t.plan(1);

  const context = {
    foo: 'bar'
  };

  const foo = function (callback) {
    t.true(this === context);

    process.nextTick(() => {
      callback();
    });
  };

  await promisify(foo, {
    context
  })();
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
