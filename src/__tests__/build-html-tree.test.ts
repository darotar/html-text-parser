import { buildHtmlTree } from "../build-html-tree";

describe("buildHtmlTree func", () => {
  it("should return empty array if accepts empty array", () => {
    expect(buildHtmlTree([])).toStrictEqual([]);
  });

  it("should return array with one text node if have only text in tokens", () => {
    expect(buildHtmlTree([{ type: "text", content: "Hello, world" }]));
  });

  it("should return node if some tags exist in tokens", () => {
    expect(
      buildHtmlTree([
        { type: "tag", tagName: "p", raw: "<p>", isClosing: false },
      ])
    ).toStrictEqual([
      {
        type: "tag",
        tagName: "p",
        children: [],
      },
    ]);
  });
});
