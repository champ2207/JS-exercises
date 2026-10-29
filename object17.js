// Teskari aylantir 
// Kalit va qiymatlarni almashtiring. Misol: {a:1,b:2} -> {1:'a',2:'b'}.

function teskari(obj) {
  let result = {};

  for (let key in obj) {
    result[obj[key]] = key;
  }

  return result;
}

console.log(teskari({a: 1, b: 2}));
