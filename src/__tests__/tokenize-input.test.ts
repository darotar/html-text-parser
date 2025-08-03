import { tokenizeInput } from "../tokenize-input";

describe("tokenizeInput func", () => {
  it("should return empty array on empty string", () => {
    expect(tokenizeInput("")).toStrictEqual([]);
  });

  it("should return a single text tag if just text passed", () => {
    expect(tokenizeInput("Hello, world")).toStrictEqual([
      { type: "text", content: "Hello, world" },
    ]);
  });

  it("should create array of tokens with html", () => {
    expect(tokenizeInput("Hello, <b>World</b>")).toStrictEqual([
      {
        type: "text",
        content: "Hello, ",
      },
      {
        type: "tag",
        tagName: "b",
        isClosing: false,
        raw: "<b>",
      },
      {
        type: "text",
        content: "World",
      },
      {
        type: "tag",
        tagName: "b",
        isClosing: true,
        raw: "</b>",
      },
    ]);
  });
});
