function maxKalit(obj) {
  let max = -Infinity;
  let maxKey;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(maxKalit({a: 3, b: 9, c: 5}));

