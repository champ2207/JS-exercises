// kkita obyektni bitta obyektga aylantirish.

// // Misol: ({a:1}, {b:2}) → {a:1, b:2}

function birlashtir(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
console.log(birlashtir({a: 1}, {b: 2}))