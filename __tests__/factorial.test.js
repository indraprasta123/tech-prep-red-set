const cariFaktorial = require("../factorial");

describe("factorial test", () => {
  test("factorial test case 1", () => {
    const result = cariFaktorial(4);
    expect(result).toEqual(expect.any(Number));
    expect(result).toBe(24);
  });

  test("factorial test case 2", () => {
    const result = cariFaktorial(10);
    expect(result).toEqual(expect.any(Number));
    expect(result).toBe(3628800);
  });

  test("factorial test case 3", () => {
    const result = cariFaktorial(11);
    expect(result).toEqual(expect.any(Number));
    expect(result).toBe(39916800);
  });
});
