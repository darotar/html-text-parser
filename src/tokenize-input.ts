import type { Token } from "./types";

export function tokenizeInput(input: string): Token[] {
  const tokens: Token[] = [];

  if (!input) return tokens;

  const tagRE = /<\/?[a-z][a-z0-9]*\/?>/gi;

  let lastIndex = 0;
  let match;

  while ((match = tagRE.exec(input)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        type: "text",
        content: input.slice(lastIndex, match.index),
      });
    }

    const raw = match[0];

    tokens.push({
      type: "tag",
      raw,
      tagName: raw.replace(/<\/?([a-z][a-z0-9]*)\/?>/i, "$1"),
      isClosing: raw.startsWith("</"),
    });

    lastIndex = tagRE.lastIndex;
  }

  if (lastIndex < input.length) {
    tokens.push({
      type: "text",
      content: input.slice(lastIndex),
    });
  }

  return tokens;
}
