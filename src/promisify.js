// @flow

/* eslint-disable flowtype/no-weak-types */

/**
 * @property context Invokes `nodeFunction` using `context` as the calling object.
 * @property multipleArguments Makes the resulting promise fulfill with an array of the callback's success value(s).
 */
type PromisifyOptionsType = {|
  multipleArguments?: boolean
|};

type PromisifyType = (nodeFunction: Function, options?: PromisifyOptionsType) => Function;

/**
 * Creates a function that when executed returns a promise whose fait depends
 * on the callback provided as the last parameter to the wrapped function.
 */
const promisify: PromisifyType = (nodeFunction, options = {}) => {
  const multipleArguments = typeof options.multipleArguments === 'boolean' ? options.multipleArguments : false;

  return (...args: $ReadOnlyArray<any>): Promise<any> => {
    return new Promise((resolve, reject) => {
      const callback = (error, ...results) => {
        if (error) {
          reject(error);

          return;
        }

        if (multipleArguments) {
          resolve(results);

          return;
        }

        resolve(results[0]);
      };

      nodeFunction(
        ...args.concat([callback])
      );
    });
  };
};

export default promisify;
