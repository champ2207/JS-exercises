function engYuqori(obj) {
  let maxName;
  let maxBall = -Infinity;
  for (let key in obj) {
    if (obj[key] > maxBall) {
      maxBall = obj[key];
      maxName = key;
    }
  }
  return maxName;
}
console.log(engYuqori({Ali: 80, Vali: 95, Salim: 70}));