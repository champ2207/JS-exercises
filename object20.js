function nusxa(obj) {
  let result = {};
  for (let key in obj) {
    result[key] = obj[key];
  }
  return result;
}
console.log(nusxa({a: 1, b: 2}));
