import Markdoc, { Node } from "@markdoc/markdoc";
import React from "react";
import { LinkBlockRenderer } from "../../contentComponents/LinkBlock/LinkBlockRenderer";
const markdocConfig = {
  tags: {
    LinkBlock: {
      render: "LinkBlock",
      children: [],
      attributes: { title: { type: String }, links: { type: Object } },
    },
  },
};

export const MarkdocRenderer = ({ node }: { node: Node }) => {
  // const parsed = Markdoc.parse(source);
  const transformed = Markdoc.transform(node, markdocConfig);
  console.log(transformed);
  return Markdoc.renderers.react(transformed, React, {
    components: {
      LinkBlock: LinkBlockRenderer,
    },
  });
};
