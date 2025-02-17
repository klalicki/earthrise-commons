import { config, collection, fields } from "@keystatic/core";
import people from "./cms/collections/people";
import posts from "./cms/collections/posts";
import community from "./cms/collections/community";
import lessons from "./cms/collections/lessons";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    people,
    posts,
    lessons,
    community,
  },
});
