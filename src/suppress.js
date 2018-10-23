// @flow

// @todo Fix
type SuppressType = (
  ErrorConstructor: Class<Error> | (error: Error) => boolean,
  promise: Promise<*>
) => Promise<*>;

const suppress: SuppressType = (ErrorConstructor, promise) => {
  return promise
    .catch((error) => {
      if (typeof ErrorConstructor === 'function') {
        if (ErrorConstructor(error)) {
          return;
        } else {
          throw error;
        }
      }

      if (error instanceof ErrorConstructor) {
        // eslint-disable-next-line no-useless-return
        return;
      } else {
        throw error;
      }
    });
};

export default suppress;
