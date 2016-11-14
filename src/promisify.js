// @flow

/**
 * @property context Invokes `nodeFunction` using `context` as the calling object.
 * @property multipleArguments Makes the resulting promise fulfill with an array of the callback's success value(s).
 */
type PromisifyOptionsType = {|
  context?: any,
  multipleArguments?: boolean
|};

type PromisifyType = (nodeFunction: Function, options?: PromisifyOptionsType) => Function;

const promisify: PromisifyType = (nodeFunction, options = {}) => {
  const multipleArguments = typeof options.multipleArguments === 'boolean' ? options.multipleArguments : false;
  const context = options.context || null;

  return (...args: Array<any>): Promise<any> => {
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

      nodeFunction.apply(context, args.concat([callback]));
    });
  };
};

export default promisify;
