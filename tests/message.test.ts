const message = require("libs/message");

test("HelloMessageのテスト", () => {
  expect(message.HelloMessage("World")).toBe("Hello World");
});
