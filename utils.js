export const getAsyncActionType = (name) => {
  return {
    PENDING: `${name}: PENDING`,
    SUCCESS: `${name}: SUCCESS`,
    ERROR: `${name}: ERROR`,
    toString: () => name,
  };
};

export const sleep = n => new Promise(res => setTimeout(res, n));
