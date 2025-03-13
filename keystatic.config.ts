import { config, fields, collection } from "@keystatic/core";
import people from "./cms/collections/people";
import chapters from "./cms/collections/chapters";
import lessons from "./cms/collections/lessons";
export default config({
  storage: {
    kind: "local",
  },
  collections: {
    people,
    chapters,
    lessons,
  },
});
