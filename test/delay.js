/* eslint-disable promise/prefer-await-to-callbacks, id-length */

import test from 'ava';
import delay from '../src/delay';

test('resolves promise after set time', async (t) => {
  const startTime = new Date().getTime();

  await delay(100);

  const endTime = new Date().getTime();

  const duration = endTime - startTime;

  t.true(duration > 99 && duration < 110);
});
