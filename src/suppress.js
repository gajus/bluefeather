// @flow

type SuppressType = <T: Promise<*>>(
  ErrorConstructor: Class<Error>,
  promise: T
) => T | Promise<void>;

const suppress: SuppressType = (ErrorConstructor, promise) => {
  return promise
    .catch((error) => {
      if (error instanceof ErrorConstructor) {
        // eslint-disable-next-line no-useless-return
        return;
      } else {
        throw error;
      }
    });
};

export default suppress;
