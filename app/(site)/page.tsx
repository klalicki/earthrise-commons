import Link from "next/link";
import { reader } from "./reader";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();
  const collections = reader.collections;
  return (
    <div>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
      <h2>pages:</h2>
      {Object.entries(collections).map(async (coll) => {
        const setPosts = await coll[1].all();
        return (
          <>
            <h3>{coll[0]}</h3>
            <ul>
              {setPosts.map((post) => {
                return (
                  <li>
                    <Link href={coll[0] + "/" + post.slug}>{post.slug}</Link>
                  </li>
                );
              })}{" "}
            </ul>
          </>
        );
      })}

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
