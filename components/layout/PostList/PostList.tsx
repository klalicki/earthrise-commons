import { reader } from "../../../app/(site)/reader";
import Link from "next/link";

export const PostList = async ({ collection }: { collection: string }) => {
  let collectionObj;
  const collectionNames = ["people", "lessons", "chapters", "community"];
  if (collectionNames.includes(collection)) {
    collectionObj = await reader.collections[collection].all();
  }

  return (
    <div>
      <h1>{collection}</h1>
      <ul>
        {collectionObj.map((item) => {
          return (
            <ul>
              <Link href={`/${collection}/${item.slug}`}>
                {item.entry?.title || item.entry.name}
              </Link>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
