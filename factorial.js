function cariFaktorial(a) {
  // 	your code here
  let hasil = 1;

  for (let i = a; i > 0; i--) {
    hasil = hasil * i;
  }

  return hasil;
}

console.log(cariFaktorial(4));

module.exports = cariFaktorial;
