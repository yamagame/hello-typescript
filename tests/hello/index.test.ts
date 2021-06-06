const { hello } = require("libs/hello");

test("Hello のテスト", () => {
  expect(hello).toBe("Hello");
});
