// @flow

type CallbackType = (currentValue: any, index: any, values: Iterable<any>) => {};

type MapSeriesType = (mapper: CallbackType) => Promise<Array<any>>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const mapSeries: MapSeriesType = async function (mapper) {
  // eslint-disable-next-line consistent-this
  const values = await this;
  const mappedValues = [];

  for (const index in values) {
    if (values.hasOwnProperty(index)) {
      mappedValues.push(await mapper(values[index], index, values));
    }
  }

  return mappedValues;
};

export default mapSeries;
