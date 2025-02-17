import { collection, fields } from "@keystatic/core";
import contentSchema from "./contentSchema";
const community = collection({
  label: "Community Resources",
  slugField: "title",
  path: "content/community/*",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: contentSchema,
});

export default community;
