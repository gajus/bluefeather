// @flow

type CallbackType = (currentValue: any, index: any, values: Iterable<any>) => any;

type MapSeriesType = (values: Array<any>, mapper: CallbackType) => Promise<Array<any>>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const mapSeries: MapSeriesType = async (values, mapper) => {
  const mappedValues = [];

  let index = -1;

  for (const value of values) {
    mappedValues.push(await mapper(value, ++index, values));
  }

  return mappedValues;
};

export default mapSeries;
