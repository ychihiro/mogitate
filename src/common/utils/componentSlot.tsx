import { Children } from "react";

export class ComponentSlot {
  public children: React.ReactNode[];

  constructor(children: React.ReactNode) {
    this.children = Children.toArray(children);
  }

  get(key: any, defaultValue = ""): React.ReactNode {
    const contents = this.children.find((child) => {
      if (child === null) return false;
      if (!(typeof child === "object")) return false;
      if (!("type" in child)) return false;
      if (!("props" in child)) return false;

      return (
        child.type === "template" && child.props.slot === key // スロット名が一致する要素を返す
      );
    });

    if (contents === null) return defaultValue; // コンテンツがない場合はデフォルト値を返す
    if (!(typeof contents === "object")) return defaultValue;
    if (!("props" in contents)) return defaultValue;

    return contents.props.children;
  }
}
