function findSameInteger(a, b) {
  // your code here
  let result = [];

  for (let i = 0; i < a.length; i++) {
    let perA = a[i];
    let found = false;

    for (let j = 0; j < b.length; j++) {
      let perB = b[j];

      if (perA === perB) {
        found = true;
        break;
      }
    }

    if (found) {
      let already = false;

      for (let k = 0; k < result.length; k++) {
        let perResult = result[k];

        if (perResult === perA) {
          already = true;
          break;
        }
      }

      if (!already) {
        result.push(perA);
      }
    }
  }

  if (result.length === 0) {
    return false;
  }

  return result;
}

console.log(findSameInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12]));

console.log(findSameInteger([1, 1, 1, 5, 9, 12], [1, 1, 5, 10, 12]));

console.log(findSameInteger([9, 3, 5, 7], [1, 1, 2, 10, 12]));

module.exports = findSameInteger;
