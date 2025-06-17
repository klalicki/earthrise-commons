import type { Collection } from "tinacms";
import React from "react";
import { PageFields } from "../fields/pageFields";
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
  fields: [...PageFields],
};
