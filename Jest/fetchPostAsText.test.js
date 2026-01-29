const { fetchPostAsText } = require("./fetchPost");

global.fetch = jest.fn();

test("Typicode API → text snapshot", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => require("./__fixtures__/post1.json"),
  });

  const result = await fetchPostAsText();

  expect(result).toMatchSnapshot();
});
