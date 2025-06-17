import type { Collection } from "tinacms";

export const PeopleCollection: Collection = {
  name: "people",
  label: "People",
  path: "src/content/people",
  format: "mdx",
  ui: {
    // router: ({ document }) => {
    //   return `/people/${document._sys.filename}`;
    // },
  },
  fields: [
    {
      name: "name",
      type: "string",
      required: true,
      isTitle: true,
    },
    { name: "photo", type: "image", required: false },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true,
    },
  ],
};
