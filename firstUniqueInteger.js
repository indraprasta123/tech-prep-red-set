function firstUniqueInteger(a, b) {
  // your code here

  for (let i = 0; i < a.length; i++) {
    let perA = a[i];
    let found = false;

    for (let j = 0; j < b.length; j++) {
      let perB = b[j];
      if (perA == perB) {
        found = true;
      }
    }

    if (!found) {
      return perA;
    }
  }

  return false;
}

console.log(firstUniqueInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12]));

module.exports = firstUniqueInteger;
