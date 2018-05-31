// @flow

// @todo Fix
type SuppressType = (
  ErrorConstructor: Class<Error>,
  promise: Promise<*>
) => Promise<*>;

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
