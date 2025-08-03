import { ReactNode, createElement, Fragment } from "react";
import { renderWith, type Node } from "@html-text-parser/core";

export const renderToReact = (tree: Node[]) =>
  renderWith<ReactNode>(tree, {
    text: (txt: string) => txt,
    element: (tag: string, children: ReactNode[]) =>
      createElement(tag, null, ...children),
    fragment: (children: ReactNode[]) =>
      createElement(Fragment, null, ...children),
  });
