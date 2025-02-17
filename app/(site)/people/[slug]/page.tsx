import React from "react";
import Markdoc from "@markdoc/markdoc";
import { reader } from "../../reader";
import { markdocConfig } from "../../../../keystatic.config";
import { MarkdocRenderer } from "../../../../components/layout/MarkdocRenderer/MarkdocRenderer";

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const post = await reader.collections.people.read(slug);

  if (!post) return <div>Post not found!</div>;

  const { node } = await post.bio();

  return (
    <div>
      <h1>{post.name}</h1>
      <MarkdocRenderer node={node}></MarkdocRenderer>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.people.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
