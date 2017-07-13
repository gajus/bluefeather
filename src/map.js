// @flow

import {
  map as bluebirdMap
} from 'bluebird';

type MapperType<T, R> = (currentValue: T, index: number, values: $ReadOnlyArray<T>) => R;

type MapConfigurationType = {|
  +concurrency: number
|};

type MapType<T, R> = (values: $ReadOnlyArray<T>, mapper: MapperType<T, R>, configuration?: MapConfigurationType) => Promise<$ReadOnlyArray<R>>;

const map: MapType<*, *> = (values, mapper, configuration) => {
  let concurrency;

  concurrency = configuration && configuration.concurrency || Infinity;

  // eslint-disable-next-line no-process-env
  if (process.env.BLUEFEATHER_MAX_CONCURRENCY) {
    // eslint-disable-next-line no-process-env
    concurrency = parseInt(process.env.BLUEFEATHER_MAX_CONCURRENCY, 10);
  }

  return bluebirdMap(values, mapper, {
    concurrency
  });
};

export default map;
