import { collection, fields } from "@keystatic/core";
import customFields from "../fields";
import { contentComponents } from "../contentComponents/contentComponents";
const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "content/posts/*",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    subtitle: fields.text({ label: "Subtitle" }),
    hero: fields.image({
      label: "Hero Image",
      directory: "public/pages",
      publicPath: "/pages/",
    }),
    UNGoals: customFields.UNGoals,
    postType: fields.select({
      label: "Post Type",
      options: [
        { value: "chapter", label: "Chapter" },
        { value: "lesson-plan", label: "Lesson Plan" },
        { value: "community", label: "Community" },
      ],
      defaultValue: "chapter",
    }),
    author: fields.relationship({ label: "Author", collection: "people" }),
    parentPage: fields.relationship({
      label: "Parent Page",
      collection: "posts",
    }),
    content: fields.markdoc({
      label: "Content",
      components: contentComponents,
    }),
  },
});

export default posts;
