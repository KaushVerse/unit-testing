const { fetchPostAsText } = require("./fetchPost");

global.fetch = jest.fn();

test("Real typicode style data ko text banana", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam",
    }),
  });

  const result = await fetchPostAsText();

  expect(result).toContain("sunt aut facere");
  expect(result).not.toMatch(/\n/);
  expect(result).toBeTruthy();
});
