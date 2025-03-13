import { collection, fields } from "@keystatic/core";

const people = collection({
  label: "People",
  slugField: "name",
  path: "src/content/people/*",
  entryLayout: "content",
  format: {
    contentField: "body",
  },
  schema: {
    name: fields.slug({ name: { label: "Name" } }),
    pronouns: fields.text({ label: "Pronouns" }),
    workplace: fields.object(
      {
        jobTitle: fields.text({ label: "Job Title" }),
        organization: fields.text({ label: "Organization" }),
        location: fields.text({ label: "Location" }),
      },
      { label: "Workplace" }
    ),
    photo: fields.image({
      label: "Photo",
      directory: "public/people",
      publicPath: "/people/",
    }),
    body: fields.markdoc({ label: "Bio" }),
  },
});

export default people;
