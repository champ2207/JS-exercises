function engQimmat(obj) {
  let maxName;
  let maxPrice = -Infinity;
  for (let key in obj) {
    if (obj[key] > maxPrice) {
      maxPrice = obj[key];
      maxName = key;
    }
  }
  return maxName;
}
console.log(engQimmat({olma: 10, banan: 20, uzum: 30}));

