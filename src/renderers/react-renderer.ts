import { ReactNode, createElement, Fragment } from "react";
import { renderWith } from "./renderer";
import type { Node } from "../types";

export const renderToReact = (tree: Node[]) =>
  renderWith<ReactNode>(tree, {
    text: (txt) => txt,
    element: (tag, children) => createElement(tag, null, ...children),
    fragment: (children) => createElement(Fragment, null, ...children),
  });
