const { calculator } = require("./calculator");
const { add } = require("./mock");
jest.mock("./mock.js");

describe("calculator", () => {
  test("calls add function with parameter", () => {
    calculator(1, 2, "add");
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith(1, 2);
  });
});
