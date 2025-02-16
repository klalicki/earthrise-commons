import type { Collection } from "tinacms";

export const PeopleCollection: Collection = {
  name: "people",
  label: "People",
  path: "content/people",
  format: "md",

  fields: [
    {
      type: "string",
      name: "name",
      label: "Full Name",
      isTitle: true,
      required: true,
    },
    { type: "string", name: "pronouns", label: "Pronouns" },
    {
      type: "object",
      name: "workplace",
      label: "Workplace",
      fields: [
        { type: "string", name: "jobTitle", label: "Job Title" },
        { type: "string", name: "organization", label: "Organization" },
        { type: "string", name: "location", label: "Location" },
      ],
    },
    { type: "rich-text", name: "bio", label: "Bio", isBody: true },
  ],
};
