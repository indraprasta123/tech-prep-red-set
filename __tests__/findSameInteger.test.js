const findSameInteger = require("../findSameInteger");

describe("findSameInteger test", () => {
  test("findSameInteger test case 1", () => {
    const a = [1, 2, 3, 5, 9, 12];
    const b = [1, 2, 5, 10, 12];
    const result = findSameInteger(a, b);
    expect(result).toEqual(expect.any(Array));
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);
    expect(result[2]).toBe(5);
    expect(result[3]).toBe(12);
  });

  test("findSameInteger test case 2", () => {
    const a = [1, 1, 1, 5, 9, 12];
    const b = [1, 1, 5, 10, 12];
    const result = findSameInteger(a, b);
    expect(result).toEqual(expect.any(Array));
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(5);
    expect(result[2]).toBe(12);
  });

  test("findSameInteger test case 3", () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const result = findSameInteger(a, b);
    expect(result).toEqual(expect.any(Boolean));
    expect(result).toBe(false);
  });
});
