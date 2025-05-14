import type { Collection } from "tinacms";

export const ChapterCollection: Collection = {
  name: "chapters",
  label: "Chapters",
  path: "src/content/chapters",
  format: "mdx",
  // Uncomment this to enable visual editing once the page template is live
  // ui: {
  //   router: ({ document }) => {
  //     return `/${document._sys.filename}`;
  //   },
  // },
  fields: [
    {
      name: "title",
      type: "string",
      required: true,
      isTitle: true,
    },
    { type: "string", name: "subtitle", label: "Subtitle" },
    {
      type: "reference",
      name: "author",
      label: "Author",
      collections: ["people"],
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true,
    },
    {
      label: "Page Blocks",
      name: "pageBlocks",
      type: "object",
      list: true,
      templates: [
        {
          label: "Text Block",
          name: "text",
          fields: [{ type: "rich-text", name: "text", label: "Text" }],
        },
        {
          label: "Link Block",
          name: "link",
          fields: [
            {
              label: "Links",
              name: "links",
              type: "object",
              list: true,
              templates: [
                {
                  label: "External Link",
                  name: "externalLink",
                  fields: [{ type: "string", name: "url", label: "URL" }],
                },
                {
                  label: "File",
                  name: "file",
                  fields: [
                    {
                      type: "image",
                      label: "File Upload",
                      name: "filename",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
