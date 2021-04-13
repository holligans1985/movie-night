const isEmptyObj = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

const fakeData = (data) => ({
  data,
});

export { isEmptyObj, fakeData };
