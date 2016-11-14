// @flow

type DelayType = (ms: number) => Promise<any>;

const delay: DelayType = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default delay;
