function qosh(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    if (key in result) {
      result[key] = result[key] + obj2[key];
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
console.log(qosh({a: 1, b: 2}, {b: 3, c: 4}));
