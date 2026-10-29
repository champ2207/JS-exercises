function pick(obj, keys) {
  let result = {};
  for (let key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(pick({a: 1, b: 2, c: 3}, ["a", "c"]));
