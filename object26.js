function ortacha(obj) {
  let values = Object.values(obj);
  let sum = 0;
  for (let value of values) {
    sum = sum + value;
  }
  return sum / values.length;
}
console.log(ortacha({a: 10, b: 20, c: 30}));
