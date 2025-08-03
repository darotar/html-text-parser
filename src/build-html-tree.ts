import type { Node, Token, TagNode } from "./types";

export function buildHtmlTree(tokens: Token[]): Node[] {
  if (!tokens.length) return [];

  if (tokens.length === 1 && tokens[0].type === "text")
    return [{ type: "text", content: tokens[0].content }];

  const root: Node = { type: "tag", tagName: null, children: [] };

  const stack: Node[] = [root];

  tokens.forEach((token) => {
    const parent = stack[stack.length - 1] as TagNode;

    if (token.type === "text") {
      parent.children?.push(token);
    } else {
      if (token.isClosing) {
        if (stack.length > 1 && parent.tagName === token.tagName) {
          stack.pop();
        }
      } else {
        const node: TagNode = {
          type: "tag",
          tagName: token.tagName,
          children: [],
        };

        parent.children?.push(node);
        stack.push(node);
      }
    }
  });

  return root.children;
}
