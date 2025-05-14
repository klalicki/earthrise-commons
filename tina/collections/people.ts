import type { Collection } from "tinacms";

export const PeopleCollection: Collection = {
  name: "people",
  label: "People",
  path: "src/content/people",
  format: "mdx",
  // uncomment this to enable visual editing once the page template is live
  // ui: {
  //   router({ document }) {
  //     return `/people/${document._sys.filename}`;
  //   },
  // },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    { type: "string", name: "pronouns", label: "Pronouns" },

    {
      type: "object",
      name: "workplace",
      label: "Workplace Info",
      fields: [
        { type: "string", name: "jobTitle", label: "Job Title" },
        { type: "string", name: "organization", label: "Workplace" },
        { type: "string", name: "location", label: "Location" },
      ],
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      type: "rich-text",
      name: "bio",
      label: "Bio",
      isBody: true,
    },
  ],
};
