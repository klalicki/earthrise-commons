import { config, collection, fields } from "@keystatic/core";
import people from "./cms/collections/people";
import posts from "./cms/collections/posts";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    people,
    posts,
  },
});
