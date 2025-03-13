import { fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const LinkBlock = block({
  label: "Link Block",
  schema: {
    title: fields.text({
      label: "Title",
      defaultValue: "Related Resources",
    }),
    links: fields.blocks(
      {
        external: {
          label: "External Link",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            url: fields.url({ label: "URL" }),
          }),
        },
        file: {
          label: "File",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            file: fields.file({
              label: "File",
              directory: "public/pages",
              publicPath: "/pages/",
            }),
          }),
        },
      },
      { label: "Links" }
    ),
  },
});

export default LinkBlock;
