import { collection, fields } from "@keystatic/core";
import { contentSchema } from "./contentSchema";
const lessons = collection({
  label: "Lessons",
  slugField: "title",
  path: "src/content/lessons/*",
  entryLayout: "content",
  columns: ["title"],
  format: { contentField: "content" },
  schema: {
    relatedChapter: fields.relationship({
      label: "Related Chapter",
      collection: "chapters",
    }),
    ...contentSchema,
  },
});

export default lessons;
