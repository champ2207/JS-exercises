function qaytaNomla(obj) {
  if ("fname" in obj) {
    obj.firstName = obj.fname;
    delete obj.fname;
  }
  return obj;
}
console.log(qaytaNomla({fname: "Ali", age: 20}));
