import type { Collection } from "tinacms";
import React from "react";
import { PageFields } from "../fields/pageFields";
export const ChapterCollection: Collection = {
  name: "chapter",
  label: "Chapters",
  path: "src/content/chapter",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [{ name: "chapterNumber", type: "number" }, ...PageFields],
};
