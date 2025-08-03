import { Node, Renderer } from "./types";

export const renderWith = <T>(tree: Node[], renderer: Renderer<T>): T[] => {
  const renderNode = (node: Node): T => {
    if (node.type === "text") return renderer.text(node.content);

    const children = node.children.map(renderNode);
    const tag = node.tagName;

    if (!tag && renderer.fragment) {
      return renderer.fragment(children);
    }

    return renderer.element(tag ?? "div", children);
  };

  return tree.map(renderNode);
};
