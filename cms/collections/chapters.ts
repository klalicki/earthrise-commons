import { collection, fields } from "@keystatic/core";
import { contentSchema } from "./contentSchema";
const chapters = collection({
  label: "Chapters",
  slugField: "title",
  path: "src/content/chapters/*",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: {
    chapterNumber: fields.number({ label: "Chapter Number" }),
    ...contentSchema,
  },
});

export default chapters;
