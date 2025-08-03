type TextNode = {
  type: "text";
  content: string;
};

export type TagNode = {
  type: "tag";
  tagName: string | null;
  children: Node[];
};

export type Token =
  | {
      type: "tag";
      tagName: string;
      raw: string;
      isClosing: boolean;
    }
  | TextNode;

export type Node = TagNode | TextNode;

export type AllowedTagsList = Set<string> | ReadonlySet<string> | string[];

export type Renderer<T> = {
  text: (text: string) => T;
  element: (tag: string, children: T[]) => T;
  fragment?: (children: T[]) => T;
};
