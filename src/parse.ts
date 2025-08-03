import { buildHtmlTree } from "./build-html-tree";
import { DEFAULT_ALLOWED_TAGS } from "./consts";
import { tokenizeInput } from "./tokenize-input";
import { AllowedTagsList, Node } from "./types";

export const parse = (
  input: string,
  renderer: (tree: Node[]) => null,
  allowedTags: AllowedTagsList = DEFAULT_ALLOWED_TAGS
) => renderer(buildHtmlTree(tokenizeInput(input)));
