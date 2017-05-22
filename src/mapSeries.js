// @flow

type CallbackType<T, R> = (currentValue: T, index: number, values: $ReadOnlyArray<T>) => R;

type MapSeriesType<T, R> = (values: $ReadOnlyArray<T>, mapper: CallbackType<T, R>) => Promise<$ReadOnlyArray<R>>;

const mapSeries: MapSeriesType<*, *> = async (values, mapper) => {
  const mappedValues = [];

  let index = -1;

  for (const value of values) {
    mappedValues.push(await mapper(value, ++index, values));
  }

  return mappedValues;
};

export default mapSeries;
