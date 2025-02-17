import { collection, fields } from "@keystatic/core";
import contentSchema from "./contentSchema";
const lessons = collection({
  label: "Lessons",
  slugField: "title",
  path: "content/lessons/*",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: contentSchema,
});

export default lessons;
