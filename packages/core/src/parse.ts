import { buildHtmlTree } from "./build-html-tree";
import { DEFAULT_ALLOWED_TAGS } from "./consts";
import { tokenizeInput } from "./tokenize-input";
import { AllowedTagsList, Node } from "./types";

export const parse = <T>(
  input: string,
  renderer: <T>(tree: Node[]) => T[],
  allowedTags: AllowedTagsList = DEFAULT_ALLOWED_TAGS
): T[] => renderer<T>(buildHtmlTree(tokenizeInput(input)));
