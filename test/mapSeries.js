import test from 'ava';
import mapSeries from '../src/mapSeries';

test('maps values', async (t) => {
  const promise = new Promise((resolve) => {
    resolve([
      'foo',
      'bar',
      'baz'
    ]);
  });

  const result = await promise
    ::mapSeries((value) => {
      return value + ':';
    });

  t.deepEqual(result, [
    'foo:',
    'bar:',
    'baz:'
  ]);
});
