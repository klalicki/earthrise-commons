import { config, fields, collection } from "@keystatic/core";
import people from "./cms/collections/people";
import chapters from "./cms/collections/chapters";
export default config({
  storage: {
    kind: "local",
  },
  collections: {
    people,
    chapters,
  },
});
