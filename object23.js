function chiqar(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
chiqar({a: 1, b: 2});
