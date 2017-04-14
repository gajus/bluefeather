// @flow

type SuppressType = <T: *>(
  ErrorConstructor: Class<Error>,
  promise: Promise<T>
) => Promise<T | void>;

const suppress: SuppressType = async (ErrorConstructor, promise) => {
  try {
    return await promise;
  } catch (error) {
    if (error instanceof ErrorConstructor) {
      // eslint-disable-next-line consistent-return
      return;
    }

    throw error;
  }
};

export default suppress;
