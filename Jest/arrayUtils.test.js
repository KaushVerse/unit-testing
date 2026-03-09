const arrayUtils = require("./arrayUtils");

describe("Array Utils - All Operations", () => {
  let arr;

  beforeEach(() => {
    arr = [];
  });

  test("add → should add element to array", () => {
    arrayUtils.add(arr, 10);

    expect(arr).toEqual([10]);
  });

  test("remove → should remove element from array", () => {
    arr = [1, 2, 3];

    arrayUtils.remove(arr, 2);

    expect(arr).toEqual([1, 3]);
  });

  test("remove → should do nothing if element not found", () => {
    arr = [1, 2, 3];

    arrayUtils.remove(arr, 5);

    expect(arr).toEqual([1, 2, 3]);
  });

  test("contains → should return true if element exists", () => {
    arr = [5, 10, 15];

    const result = arrayUtils.contains(arr, 10);

    expect(result).toBe(true);
  });

  test("contains → should return false if element does not exist", () => {
    arr = [5, 10, 15];

    const result = arrayUtils.contains(arr, 20);

    expect(result).toBe(false);
  });

  test("size → should return array length", () => {
    arr = [1, 2, 3, 4];

    const length = arrayUtils.size(arr);

    expect(length).toBe(4);
  });

  test("clear → should remove all elements", () => {
    arr = [1, 2, 3];

    arrayUtils.clear(arr);

    expect(arr).toEqual([]);
  });
});