// @flow

import {
  map as bluebirdMap
} from 'bluebird';

type CallbackType = (currentValue: any, index: any, values: Iterable<any>) => any;

type MapConfigurationType = {|
  +concurrency: number
|};

type MapType = (values: Array<any>, mapper: CallbackType, configuration: MapConfigurationType) => Promise<Array<any>>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const map: MapType = async (values, mapper, configuration) => {
  let concurrency;

  concurrency = configuration && configuration.concurrency || Infinity;

  // eslint-disable-next-line no-process-env
  if (process.env.BLUEFEATHER_MAX_CONCURRENCY) {
    // eslint-disable-next-line no-process-env
    concurrency = parseInt(process.env.BLUEFEATHER_MAX_CONCURRENCY, 10);
  }

  return bluebirdMap(values, mapper, {
    configuration: {
      concurrency
    }
  });
};

export default map;
