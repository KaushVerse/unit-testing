const { add, substract, multiply, divide } = require("./mock");

function calculator(a, b, operation) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "substract":
      return substract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      throw new Error("Invalid Operation");
  }
}

module.exports = {
  calculator,
};
