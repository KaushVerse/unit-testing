const multiply = require("./index");

// TEST SUITE

describe("Multiply Test", () => {
  it("2 and 5 multiply not equal 10", () => {
    expect(multiply(2, 5)).toBe(10);
  });
  it("2 and 5 multiply not equal 4", () => {
    expect(multiply(2, 5)).not.toBe(4);
  });
  it("2 and 5 multiply equal 10", () => {
    expect(multiply(2, 5)).not.toBe(5);
  });
});

// test("2 and 5 multiply not equal 4", () => {
//   expect(multiply(2, 5)).not.toBe(4);
// });

test("Object Equality", () => {
    const data = {alpha : "A"};
    data["beta"] = "B";
    expect(data).toEqual({alpha: "A", beta: "B"})
})