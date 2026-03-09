const myFunction = require("./spy");

test("Should spy on function and check it is called", () => {
  // Arrange
  const spy = jest.spyOn(myFunction, "myFunciton");

  // Act
  myFunction.myFunciton(2, 3);

  // Assert
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(2, 3);

  // Cleanup
  spy.mockRestore();
});
