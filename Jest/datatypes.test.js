test("Null & Undefined checks", () => {
  const value = null;

  expect(value).toBeNull();
  expect(value).toBeDefined();
  expect(value).not.toBeUndefined();
  expect(value).toBeFalsy();
  expect(value).not.toBeTruthy();
});

test("Undefined check", () => {
  let value;

  expect(value).toBeUndefined();
  expect(value).not.toBeDefined();
});

test("Zero Values", () => {
  const value = 0;

  expect(value).not.toBeNull();
  expect(value).toBeDefined();
  expect(value).not.toBeUndefined();
  expect(value).not.toBeTruthy();
  expect(value).toBeFalsy();
});

// NUMBER
test("Number comparison", () => {
  const value = 3 + 3;

  expect(value).toBe(6);
  expect(value).toEqual(6);
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(6);
  expect(value).toBeLessThan(10);
  expect(value).toBeLessThanOrEqual(6);
});

test("Floating point numbers", () => {
  const value = 0.1 + 0.2;

  expect(value).toBeCloseTo(0.3);
});

// STRING
test("String match", () => {
  const text = "Hello JavaScript Bro";

  expect(text).toBe("Hello JavaScript Bro");
  expect(text).toMatch(/JavaScript/);
  expect(text).toContain("Bro");
});

// OBJECTS
test("Object equality", () => {
  const user = { name: "Aman", age: 22 };

  expect(user).toEqual({ name: "Aman", age: 22 });
  expect(user).not.toBe({ name: "Aman", age: 22 }); // reference check
});

test("Object partial match", () => {
  const user = { name: "Aman", age: 22, city: "Delhi" };

  expect(user).toMatchObject({ name: "Aman" });
});

// ARRAYS
test("Array checks", () => {
  const arr = ["apple", "banana", "mango"];

  expect(arr).toContain("banana");
  expect(arr).toHaveLength(3);
});

test("Array of objects", () => {
  const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Ravi" },
  ];

  expect(users).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: "Aman" })]),
  );
});

// 🚨 Exceptions / Errors
function throwError() {
  throw new Error("Something went wrong");
}

test("Exception handling", () => {
  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow("Something went wrong");
});

// ASYNC / PROMISE
test("Promise resolve", async () => {
  const data = Promise.resolve("success");

  await expect(data).resolves.toBe("success");
});

test("Promise reject", async () => {
  const data = Promise.reject("error");

  await expect(data).rejects.toBe("error");
});

// 🧪 Mock Functions
test("Mock function", () => {
  const mockFn = jest.fn();

  mockFn(1);
  mockFn(2);

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(2);
  expect(mockFn).toHaveBeenCalledWith(1);
});

// 🎭 Boolean
test("Boolean values", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

// 🧠 Type Checking
test("Type checks", () => {
  expect(10).toEqual(expect.any(Number));
  expect("hello").toEqual(expect.any(String));
  expect({}).toEqual(expect.any(Object));
});

// 🏁 Snapshot
test("Snapshot test", () => {
  const user = { name: "Aman", age: 22 };

  expect(user).toMatchSnapshot();
});

// ONLY TEST MATCH
test("Array Matches", () => {
  const todoList = ["Buy Groceries", "Clean Room", "Cetaphil Combo Pack"];

  expect(todoList).toContain("Cetaphil Combo Pack");
});
