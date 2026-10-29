function sarala(obj) {
  let keys = Object.keys(obj);
  keys.sort();
  return keys;
}
console.log(sarala({c: 3, a: 1, b: 2}));