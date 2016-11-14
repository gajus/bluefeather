// @flow

type DelayType = (ms: number) => Promise<any>;

/**
 * Creates a promise that is scheduled to resolve after a set delay.
 */
const delay: DelayType = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default delay;
