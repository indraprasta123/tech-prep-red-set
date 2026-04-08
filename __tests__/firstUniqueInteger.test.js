const firstUniqueInteger = require("../firstUniqueInteger");

describe("firstUniqueInteger test", () => {
  test("firstUniqueInteger test case 1", () => {
    const a = [1, 2, 3, 5, 9, 12];
    const b = [1, 2, 5, 10, 12];
    const result = firstUniqueInteger(a, b);
    expect(result).toEqual(expect.any(Number));
    expect(result).toBe(3);
  });

  test("firstUniqueInteger test case 2", () => {
    const a = [1, 2, 4];
    const b = [1, 2, 5];
    const result = firstUniqueInteger(a, b);
    expect(result).toEqual(expect.any(Number));
    expect(result).toBe(4);
  });

  test("firstUniqueInteger test case 3", () => {
    const a = [1, 2, 5];
    const b = [1, 2, 5];
    const result = firstUniqueInteger(a, b);
    expect(result).toEqual(expect.any(Boolean));
    expect(result).toBe(false);
  });
});
