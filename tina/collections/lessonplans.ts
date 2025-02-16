import type { Collection } from "tinacms";

export const LessonPlanCollection: Collection = {
  name: "lessonplan",
  label: "Lesson Plans",
  path: "content/lessons",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "reference",
      name: "author",
      label: "Author",
      collections: ["people"],
    },
  ],
};
