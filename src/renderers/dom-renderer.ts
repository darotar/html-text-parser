import { renderWith } from "./renderer";
import type { Node } from "../types";

export const renderToDom = (tree: Node[]) =>
  renderWith<HTMLElement | Text | DocumentFragment>(tree, {
    text: (txt) => document.createTextNode(txt),
    element: (tag, children) => {
      const el = document.createElement(tag);
      children.forEach((child) => el.appendChild(child));
      return el;
    },
    fragment: (children) => {
      const frag = document.createDocumentFragment();
      children.forEach((child) => frag.appendChild(child));
      return frag;
    },
  });
