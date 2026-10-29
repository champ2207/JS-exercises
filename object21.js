function qidir(obj, qiymat) {
  for (let key in obj) {
    if (obj[key] === qiymat) {
      return key;
    }
  }
}
console.log(qidir({a: 5, b: 9}, 9));
