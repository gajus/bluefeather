// @flow

import test from 'ava';
import mapSeries from '../src/mapSeries';

test('maps values (sync callback)', async (t) => {
  const values = [
    'foo',
    'bar',
    'baz'
  ];

  const result = await mapSeries(values, (value) => {
    return value + ':';
  });

  t.deepEqual(result, [
    'foo:',
    'bar:',
    'baz:'
  ]);
});

test('maps values (async callback)', async (t) => {
  const values = [
    'foo',
    'bar',
    'baz'
  ];

  const result = await mapSeries(values, async (value) => {
    return value + ':';
  });

  t.deepEqual(result, [
    'foo:',
    'bar:',
    'baz:'
  ]);
});
