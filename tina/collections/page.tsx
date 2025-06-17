import type { Collection } from "tinacms";
import React from "react";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      required: false,
    },
    {
      name: "author",
      type: "reference",
      collections: ["people"],
      required: false,
      ui: {
        optionComponent: (props, _sys) => {
          return <p>{props.name}</p>;
        },
      },
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true,
    },
    {
      name: "basedOn",
      label: "Based On Existing Page ('fork')",
      type: "reference",
      collections: ["page"],
      ui: {
        optionComponent: (props, _sys) => {
          return <p>{props.title ?? _sys.filename}</p>;
        },
      },
    },
  ],
};
