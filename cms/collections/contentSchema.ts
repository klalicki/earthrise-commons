import { fields } from "@keystatic/core";
import customFields from "../fields";
import { contentComponents } from "../contentComponents/contentComponents";

export const contentSchema = {
  title: fields.slug({ name: { label: "Title" } }),
  subtitle: fields.text({ label: "Subtitle" }),
  hero: fields.image({
    label: "Hero Image",
    directory: "public/pages",
    publicPath: "/pages/",
  }),
  UNGoals: customFields.UNGoals,
  postType: fields.empty(),
  author: fields.multiRelationship({ label: "Author", collection: "people" }),

  content: fields.markdoc({
    label: "Content",
    components: contentComponents,
  }),
};
