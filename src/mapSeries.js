// @flow

type CallbackType<T, R> = (currentValue: T, index: number, values: Array<T>) => R;

type MapSeriesType<T, R> = (values: Array<T>, mapper: CallbackType<T, R>) => Promise<Array<R>>;

const mapSeries: MapSeriesType<*, *> = async (values, mapper) => {
  const mappedValues = [];

  let index = -1;

  for (const value of values) {
    mappedValues.push(await mapper(value, ++index, values));
  }

  return mappedValues;
};

export default mapSeries;
